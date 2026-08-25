'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Server,
  GitBranch,
  Activity,
  Database,
  Workflow,
  ShieldCheck,
} from 'lucide-react'

const capabilities = [
  {
    icon: Server,
    title: 'Private LLM deployment',
    description:
      'Self-hosted or cloud-based models running securely inside your own environment.',
  },
  {
    icon: GitBranch,
    title: 'GitOps-ready infrastructure',
    description:
      'Versioned, declarative deployment workflows for reproducible, auditable delivery.',
  },
  {
    icon: Activity,
    title: 'Observability & usage tracking',
    description:
      'Metrics, logging, and cost visibility so you always know how your AI performs.',
  },
  {
    icon: Database,
    title: 'RAG connected to your data',
    description:
      'Retrieval pipelines grounded in your docs, tickets, and internal systems.',
  },
  {
    icon: Workflow,
    title: 'Automation across your tools',
    description:
      'AI agents that take action inside your existing business applications.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-first approach',
    description:
      'Systems engineered to run reliably and securely — not just demo well.',
  },
]

export function AboutSection() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-24 bg-[#0b0f1e] text-white"
    >
      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Why Kaironovas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
            Built by engineers who understand deployment, not just demos
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Most vendors can show a chatbot. Few can run AI reliably inside real
            enterprise environments. We combine AI engineering with infrastructure
            automation to take systems from prototype to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
