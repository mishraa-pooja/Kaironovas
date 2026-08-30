'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileStack, Lock, MessageSquareOff, ServerCog } from 'lucide-react'

const problems = [
  {
    icon: FileStack,
    title: 'Knowledge is scattered everywhere',
    description:
      'Critical information lives across docs, tickets, chats, PDFs, wikis, and internal tools — with no single place to ask.',
  },
  {
    icon: Lock,
    title: 'Sensitive data requires more control',
    description:
      'Security, privacy, and compliance requirements can limit where sensitive company data and AI workloads can run.',
  },
  {
    icon: MessageSquareOff,
    title: 'Generic chatbots don’t solve real workflows',
    description:
      'AI becomes useful when it can retrieve trusted company information, connect to existing systems, and support real business workflows.',
  },
  {
    icon: ServerCog,
    title: 'Production AI needs real infrastructure',
    description:
      'Reliable AI systems need deployment automation, authentication, monitoring, scaling, logging, and production-grade infrastructure.',
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white dark:bg-[#080a12]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Production AI gets harder when private company data is involved
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex gap-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:bg-white/5 dark:text-slate-400 dark:group-hover:bg-indigo-500/15 dark:group-hover:text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {problem.description}
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
