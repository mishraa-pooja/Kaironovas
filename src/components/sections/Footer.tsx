'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Cloud, ShieldCheck } from 'lucide-react'
import { Logo } from '@/components/ui/logo'

export function Footer() {
  const services = [
    { name: 'Private AI Assistants', href: '/#solutions' },
    { name: 'RAG & Knowledge Search', href: '/#solutions' },
    { name: 'LLM Deployment & Automation', href: '/#solutions' },
    { name: 'Use Cases', href: '/#use-cases' },
    { name: 'How We Work', href: '/#process' }
  ]

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Logo variant="white" size="md" showText={true} />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Private AI infrastructure and automation — secure private LLMs, RAG, and workflow automation deployed inside your own environment.
            </p>
            {/* TODO: Add real LinkedIn / GitHub URLs, then reintroduce social links here. */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:hello@kaironovas.com" className="text-white hover:text-indigo-400 transition-colors">
                    hello@kaironovas.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Cloud className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Deployment</p>
                  <p className="text-white">On-prem · VPC · Cloud</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheck className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Data</p>
                  <p className="text-white">Private by design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kaironovas. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Private AI Infrastructure</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Deployed in your environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}