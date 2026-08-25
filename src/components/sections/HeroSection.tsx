'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ShieldCheck,
  Database,
  Layers,
  Server,
  Bot,
  ArrowDown,
} from 'lucide-react'

const pipeline = [
  {
    icon: Database,
    title: 'Company Data',
    detail: 'Docs · Tickets · Chats · PDFs · Internal tools',
  },
  {
    icon: Layers,
    title: 'RAG Pipeline',
    detail: 'Chunk · Embed · Retrieve · Ground',
  },
  {
    icon: Server,
    title: 'Private LLM',
    detail: 'Self-hosted · Access-controlled · Secure',
  },
  {
    icon: Bot,
    title: 'AI Assistant & Automation',
    detail: 'Answers · Actions · Workflows',
  },
]

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Soft premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/40 to-white dark:from-[#080a12] dark:via-[#0b0f1e] dark:to-[#080a12]" />
      <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] bg-indigo-200/30 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 h-72 w-72 bg-violet-200/20 dark:bg-violet-600/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-100 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3.5 py-1.5 shadow-sm backdrop-blur mb-7"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span className="text-sm font-medium text-indigo-900 dark:text-indigo-200">
                Private AI Infrastructure &amp; Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6"
            >
              Deploy Private AI
              <br />
              On Your{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                Company Data
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8"
            >
              Kaironovas helps teams build secure AI assistants, RAG pipelines, and
              LLM deployment workflows using their own internal data,
              infrastructure, and tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="xl" variant="gradient" className="group shadow-indigo-600/20" asChild>
                <Link href="#contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 dark:border-white/15 dark:bg-transparent dark:text-slate-200 dark:hover:border-indigo-400/40 dark:hover:bg-white/5"
                asChild
              >
                <Link href="#use-cases">Explore Use Cases</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400"
            >
              <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <span>
                Built for teams that need privacy, control, automation, and
                production-grade AI.
              </span>
            </motion.div>
          </div>

          {/* Right: infrastructure diagram */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-indigo-100/50 to-violet-100/40 dark:from-indigo-600/15 dark:to-violet-600/10 rounded-[2rem] blur-2xl" />

            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm shadow-xl shadow-indigo-600/5 dark:shadow-black/40 p-5 sm:p-6">
              {/* Card chrome */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-white/15" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Your Environment
                </span>
              </div>

              {/* Pipeline nodes */}
              <div className="rounded-xl border border-dashed border-indigo-200/70 dark:border-indigo-400/20 bg-indigo-50/20 dark:bg-indigo-500/5 p-3 sm:p-4">
                {pipeline.map((node, index) => {
                  const Icon = node.icon
                  return (
                    <div key={node.title}>
                      <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.06] p-3.5 shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            {node.title}
                          </div>
                          <div className="truncate text-xs text-slate-500 dark:text-slate-400">
                            {node.detail}
                          </div>
                        </div>
                      </div>
                      {index < pipeline.length - 1 && (
                        <div className="flex justify-center py-1.5">
                          <ArrowDown className="h-4 w-4 text-indigo-300 dark:text-indigo-500" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
