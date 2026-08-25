'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { MessagesSquare, Search, Rocket, Check } from 'lucide-react'

const solutions = [
  {
    icon: MessagesSquare,
    title: 'Private AI Assistants',
    description:
      'Chat with internal docs, SOPs, tickets, and knowledge bases securely.',
    points: [
      'Runs inside your environment',
      'Role-based access control',
      'Cited, source-backed answers',
    ],
  },
  {
    icon: Search,
    title: 'RAG & Knowledge Search',
    description:
      'Turn scattered company data into reliable, searchable AI answers.',
    points: [
      'Connects docs, PDFs, wikis & tools',
      'Grounded retrieval, not guesswork',
      'Always current with your data',
    ],
  },
  {
    icon: Rocket,
    title: 'LLM Deployment & Automation',
    description:
      'Deploy models, automate workflows, and integrate AI into your existing tools.',
    points: [
      'Self-hosted or private cloud LLMs',
      'Workflow & tool integrations',
      'GitOps, CI/CD & observability',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-indigo-50/40 dark:from-[#080a12] dark:to-[#0b0f1e]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
            Private AI systems built around your workflows
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Not a generic chatbot. We design, deploy, and operate AI that connects
            to your data and runs securely inside your infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.06] group">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20 transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 border-t border-slate-100 dark:border-white/10 pt-6">
                      {solution.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
