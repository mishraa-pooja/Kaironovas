'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search, ClipboardList, Rocket, Check } from 'lucide-react'

const stages = [
  {
    step: '01',
    icon: Search,
    title: 'Review',
    intro: 'We review areas such as:',
    items: [
      'AI architecture',
      'Company data',
      'Model serving',
      'Deployment',
      'Security requirements',
      'Infrastructure',
      'GPU / cloud requirements',
      'CI/CD',
      'Observability',
      'Scaling',
    ],
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Recommendations',
    intro: 'Potential deliverables:',
    items: [
      'Architecture recommendations',
      'Deployment approach',
      'Infrastructure recommendations',
      'Security considerations',
      'Risk areas',
      'Implementation priorities',
      'Estimated implementation scope',
    ],
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Implement',
    intro: null,
    body: 'If there is a fit, Kaironovas can design, deploy, and operate the recommended production system.',
    items: [] as string[],
  },
]

export function InfraReviewSection() {
  return (
    <section
      id="infrastructure-review"
      className="py-24 bg-gradient-to-b from-white to-indigo-50/40 dark:from-[#080a12] dark:to-[#0b0f1e]"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            Start Small
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
            Start with an AI Infrastructure Review
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Before committing to a larger AI implementation, get a technical
            assessment of your architecture, data requirements, infrastructure,
            security considerations, and deployment approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-7 shadow-sm"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-sm font-semibold text-indigo-400 dark:text-indigo-500">
                    {stage.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {stage.title}
                </h3>

                {stage.body ? (
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {stage.body}
                  </p>
                ) : (
                  <>
                    {stage.intro && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                        {stage.intro}
                      </p>
                    )}
                    <ul className="space-y-2.5">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Button size="xl" variant="gradient" className="group shadow-indigo-600/20" asChild>
            <Link href="#contact">
              Request Infrastructure Review
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
