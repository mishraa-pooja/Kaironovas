'use client'

import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Logo } from '@/components/ui/logo'

export function Footer() {
  const platform = [
    { name: 'Private LLM Deployment', href: '#solutions' },
    { name: 'RAG on Company Data', href: '#solutions' },
    { name: 'GPU Infrastructure', href: '#solutions' },
    { name: 'GitOps & CI/CD', href: '#solutions' },
    { name: 'AI Observability', href: '#solutions' },
  ]

  const company = [
    { name: 'Who We Help', href: '#who-we-help' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Private AI Pilot', href: '#pilot' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Logo variant="white" size="md" showText={true} />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Private AI infrastructure and automation — secure private LLMs, RAG,
              and workflow automation deployed on your own infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-5">Platform</h3>
            <ul className="space-y-3">
              {platform.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-5">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-5">Contact</h3>
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-zinc-500 mt-0.5" />
              <a
                href="mailto:hello@kaironovas.com"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                hello@kaironovas.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Kaironovas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
