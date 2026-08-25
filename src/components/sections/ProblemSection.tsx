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
    title: 'Public AI tools can’t safely access it',
    description:
      'Sending sensitive company data to third-party APIs is a non-starter for most security, legal, and compliance teams.',
  },
  {
    icon: MessageSquareOff,
    title: 'Generic chatbots don’t solve real work',
    description:
      'A chat window with no access to your data or systems won’t resolve tickets, answer policy questions, or automate workflows.',
  },
  {
    icon: ServerCog,
    title: 'You need deployed, observable systems',
    description:
      'Real value comes from private AI that’s deployed on your infrastructure, connected to your data, and monitored in production.',
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
            Most AI tools are not built for private company data
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
