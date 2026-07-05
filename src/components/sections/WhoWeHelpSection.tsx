'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, Headset, HeartPulse, ShieldCheck, Factory, Building2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'

const audiences = [
  {
    title: 'Banks & Financial Services',
    description:
      'Deploy AI on regulated data without it ever leaving your environment. Faster analyst research, secure internal knowledge, and audit-ready controls.',
    icon: Landmark,
  },
  {
    title: 'BPOs & Support Operations',
    description:
      'Automate repetitive support and back-office work with RAG assistants that answer from your SOPs — reducing handle time and manual effort.',
    icon: Headset,
  },
  {
    title: 'Healthcare & Life Sciences',
    description:
      'Private LLMs over clinical and operational data with strict access control, keeping sensitive information inside your infrastructure.',
    icon: HeartPulse,
  },
  {
    title: 'Insurance',
    description:
      'Speed up claims, underwriting research, and policy lookups with AI grounded in your documents — securely and traceably.',
    icon: ShieldCheck,
  },
  {
    title: 'Manufacturing',
    description:
      'Turn manuals, maintenance logs, and process docs into instant answers for engineering and operations teams on the floor.',
    icon: Factory,
  },
  {
    title: 'Enterprises with Sensitive Data',
    description:
      'Any organization that cannot send data to public AI APIs. We deploy private AI on your cloud, VPC, or on-premise.',
    icon: Building2,
  },
]

export function WhoWeHelpSection() {
  return (
    <section id="who-we-help" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Who We Help"
          title="Built for organizations with data they can't expose"
          description="If your data is too sensitive for public AI APIs, we deploy private AI inside your own environment — with security, compliance, and control built in."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-5 p-7 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
