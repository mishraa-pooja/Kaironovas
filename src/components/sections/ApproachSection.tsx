'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/section-header'

const architectureLayers = [
  'App / Business Workflow',
  'API Layer',
  'RAG / Agent Layer',
  'Model Serving',
  'Vector Database',
  'Kubernetes / GPU Infrastructure',
  'CI/CD + GitOps',
  'Monitoring + Observability',
]

export function ApproachSection() {
  return (
    <section id="architecture" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Reference Architecture"
          title="How production AI systems are built"
          description="A proven stack for deploying LLM applications — from your business workflow down to infrastructure and observability."
        />

        <div className="max-w-xl mx-auto">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-full flex items-center gap-4 px-5 py-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <span className="text-xs font-mono text-zinc-600 w-5 text-right flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-zinc-200">{layer}</span>
              </div>
              {index < architectureLayers.length - 1 && (
                <div className="py-2 text-zinc-700 text-xs font-mono" aria-hidden="true">
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
