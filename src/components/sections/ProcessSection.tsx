'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Database, Wrench, ShieldCheck, LineChart } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover your workflows',
    description: 'We identify high-impact tasks where private AI creates real value.',
  },
  {
    icon: Database,
    title: 'Connect your company data',
    description: 'Securely bring in docs, tickets, and internal systems as grounded context.',
  },
  {
    icon: Wrench,
    title: 'Build AI assistant or automation',
    description: 'We build RAG assistants and workflow automation around your needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Deploy securely',
    description: 'Ship to your infrastructure — on-prem, private cloud, or VPC.',
  },
  {
    icon: LineChart,
    title: 'Monitor, improve, and scale',
    description: 'Track usage and performance, then refine and expand with confidence.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-indigo-50/40 to-white dark:from-[#0b0f1e] dark:to-[#080a12]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            From company data to production AI
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden lg:block">
            <div className="mx-16 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-400/30 to-transparent" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.06] text-indigo-600 dark:text-indigo-300 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-400 dark:text-indigo-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
