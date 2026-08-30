import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// Prefer the service_role key (server-only, bypasses RLS). Fall back to anon.
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

const PRIORITY_LABELS: Record<string, string> = {
  'private-ai-assistant': 'Private AI Assistant',
  rag: 'RAG / Knowledge Search',
  'llm-deployment': 'LLM Deployment',
  'ai-infrastructure': 'AI Infrastructure',
  'workflow-automation': 'Workflow Automation',
  other: 'Other',
}

const ENVIRONMENT_LABELS: Record<string, string> = {
  'public-cloud': 'Public Cloud',
  'private-cloud-vpc': 'Private Cloud / VPC',
  'on-prem': 'On-Prem',
  'not-sure': 'Not Sure',
}

const TIMELINE_LABELS: Record<string, string> = {
  exploring: 'Exploring',
  'lt-1-month': 'Less than 1 month',
  '1-3-months': '1–3 months',
  '3-plus-months': '3+ months',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const company = String(body.company ?? '').trim()
    const website = String(body.website ?? '').trim()
    const building = String(body.building ?? '').trim()
    const priority = String(body.priority ?? '').trim()
    const environment = String(body.environment ?? '').trim()
    const timeline = String(body.timeline ?? '').trim()
    const stack = String(body.stack ?? '').trim()

    // Validation
    if (!name || !email || !building) {
      return NextResponse.json(
        { error: 'Name, work email, and project description are required' },
        { status: 400 }
      )
    }
    if (!emailRegex.test(email) || name.length > 200 || building.length > 5000) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const priorityLabel = PRIORITY_LABELS[priority] || priority
    const environmentLabel = ENVIRONMENT_LABELS[environment] || environment
    const timelineLabel = TIMELINE_LABELS[timeline] || timeline

    // Structured summary stored in the existing `message` column so no DB migration
    // is required. `service` keeps the primary priority for quick filtering.
    const message = [
      `What they want to build:`,
      building,
      '',
      `Main priority: ${priorityLabel || '-'}`,
      `Where it should run: ${environmentLabel || '-'}`,
      `Timeline: ${timelineLabel || '-'}`,
      `Company website: ${website || '-'}`,
      `Current AI stack: ${stack || '-'}`,
    ].join('\n')

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
      .insert({ name, email, company, service: priorityLabel, message })
      .select('id')
      .single()

    if (error) {
      console.error('Supabase insert error:', error.message)
      return NextResponse.json(
        { error: 'Failed to save your request. Please try again.' },
        { status: 500 }
      )
    }

    // 2. Notify (email + optional Slack). Never fail the request if notifications hiccup.
    await sendNotifications({
      name,
      email,
      company,
      priority: priorityLabel,
      message,
    })

    return NextResponse.json({
      success: true,
      id: data.id,
      message: "Thank you! We'll review your request and get back to you within 24 hours.",
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
  priority: string
  message: string
}

async function sendNotifications(lead: Lead) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL, SLACK_WEBHOOK_URL } =
    process.env

  const summary = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || '-'}`,
    `Priority: ${lead.priority || '-'}`,
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
        subject: `Infrastructure Review request: ${lead.name}${lead.company ? ` (${lead.company})` : ''}`,
        text: summary,
      })
    } catch (err) {
      console.error(
        'Email notification failed (lead was still saved):',
        err instanceof Error ? err.message : err
      )
    }
  }

  // Optional Slack ping
  if (SLACK_WEBHOOK_URL) {
    try {
      await fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New Infrastructure Review request: ${lead.name} <${lead.email}> — ${lead.priority || 'general'}`,
        }),
      })
    } catch (err) {
      console.error('Slack notification failed:', err instanceof Error ? err.message : err)
    }
  }
}
