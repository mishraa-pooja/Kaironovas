'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/section-header'

const capabilities = [
  'RAG',
  'LLM Deployment',
  'vLLM / Ollama',
  'Open-Source Models',
  'Vector Databases',
  'Kubernetes',
  'Terraform',
  'GitOps',
  'CI/CD',
  'Observability',
  'Cloud Deployment',
  'Workflow Automation',
  'APIs',
  'Security Controls',
]

export function TechnicalExpertiseSection() {
  return (
    <section id="expertise" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Technical Capabilities"
          title="The full AI platform stack"
          description="Infrastructure, deployment, and operations — the engineering capabilities required to run AI in production."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="px-4 py-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200 text-center"
            >
              <span className="text-sm font-medium text-zinc-300">
                {capability}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
