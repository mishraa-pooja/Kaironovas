'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/section-header'

export function AboutSection() {
  return (
    <section id="outcomes" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            label="Business Outcomes"
            title="AI adoption without the security trade-off"
            description="Public AI tools are powerful, but sending sensitive data to third-party APIs isn't an option for most enterprises. We deliver the same capability — privately, on your infrastructure."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 -mt-4 text-left"
          >
            {[
              {
                label: 'Faster support',
                detail:
                  'AI assistants resolve customer and internal queries in seconds using your own knowledge base.',
              },
              {
                label: 'Better knowledge access',
                detail:
                  'Employees find answers across documents, systems, and SOPs without digging through folders.',
              },
              {
                label: 'Less manual work',
                detail:
                  'Automate repetitive research, lookups, and back-office tasks with AI grounded in your data.',
              },
              {
                label: 'Secure AI adoption',
                detail:
                  'Deploy AI on your infrastructure with full control — no customer data leaves your environment.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-7 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <p className="text-base font-medium text-white mb-2">{item.label}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
