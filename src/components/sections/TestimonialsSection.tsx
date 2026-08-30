'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  Headset,
  FileSearch,
  Users,
  AlertTriangle,
  FileSignature,
  Workflow,
} from 'lucide-react'

const useCases = [
  {
    icon: Headset,
    title: 'Customer support knowledge assistant',
    description:
      'Help support teams find grounded answers across documentation and historical tickets without manually searching multiple systems.',
  },
  {
    icon: FileSearch,
    title: 'Internal document search',
    description:
      'Find trusted answers across wikis, PDFs, drives, and internal documentation with cited sources.',
  },
  {
    icon: Users,
    title: 'HR and policy assistant',
    description:
      'Give employees grounded answers on policies, benefits, and internal processes using approved company sources.',
  },
  {
    icon: AlertTriangle,
    title: 'DevOps / incident assistant',
    description:
      'Surface runbooks, past incidents, infrastructure documentation, and troubleshooting steps to help engineering teams investigate issues faster.',
  },
  {
    icon: FileSignature,
    title: 'Sales and proposal assistant',
    description:
      'Help sales teams find product information and draft proposals using approved internal knowledge.',
  },
  {
    icon: Workflow,
    title: 'Operations workflow automation',
    description:
      'Connect AI to business tools and automate repetitive operational workflows with controlled actions.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="use-cases" className="py-24 bg-white dark:bg-[#080a12]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
            Where companies can use private AI
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Real workflows teams put private AI to work on — grounded in their own
            data and deployed securely inside their infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.06] group">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300 transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2.5">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {useCase.description}
                    </p>
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
