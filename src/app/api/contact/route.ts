import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// Prefer the service_role key (server-only, bypasses RLS). Fall back to anon.
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const company = String(body.company ?? '').trim()
    const service = String(body.service ?? '').trim()
    const message = String(body.message ?? '').trim()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }
    if (!emailRegex.test(email) || name.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    // 1. Save to Supabase
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase env vars are not configured')
      return NextResponse.json(
        { error: 'Server is not configured. Please try again later.' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({ name, email, company, service, message })
      .select('id')
      .single()

    if (error) {
      console.error('Supabase insert error:', error.message)
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      )
    }

    // 2. Notify (email + optional Slack). Never fail the request if notifications hiccup.
    await sendNotifications({ name, email, company, service, message })

    return NextResponse.json({
      success: true,
      id: data.id,
      message: "Thank you! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error('Contact form error:', error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

type Lead = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

async function sendNotifications(lead: Lead) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL, SLACK_WEBHOOK_URL } =
    process.env

  const summary = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || '-'}`,
    `Interest: ${lead.service || '-'}`,
    '',
    lead.message,
  ].join('\n')

  // Email via SMTP (only if configured)
  if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      })

      await transporter.sendMail({
        from: `"Kaironovas Website" <${SMTP_USER}>`,
        to: CONTACT_EMAIL || SMTP_USER,
        replyTo: lead.email,
        subject: `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ''}`,
        text: summary,
      })
    } catch (err) {
      console.error('Email notification failed (lead was still saved):', err instanceof Error ? err.message : err)
    }
  }

  // Optional Slack ping
  if (SLACK_WEBHOOK_URL) {
    try {
      await fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `New lead: ${lead.name} <${lead.email}> — ${lead.service || 'general'}` }),
      })
    } catch (err) {
      console.error('Slack notification failed:', err instanceof Error ? err.message : err)
    }
  }
}
