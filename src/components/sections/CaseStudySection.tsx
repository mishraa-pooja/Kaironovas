'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowDown, Check, FlaskConical } from 'lucide-react'
import { architecture, demonstrates, benchmark } from '@/lib/caseStudy'

export function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden py-24 bg-[#0b0f1e] text-white"
    >
      <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
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
          className="max-w-3xl mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Engineering Case Study
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
            Inside a Production AI Deployment
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-5">
            A look at how Kaironovas approaches model serving, GitOps, GPU
            infrastructure, observability, and production deployment.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200">
            <FlaskConical className="h-4 w-4 text-indigo-300" />
            Kaironovas Engineering Lab
          </span>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Architecture flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
              <div className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Deployment architecture
              </div>
              <div>
                {architecture.map((node, index) => (
                  <div key={node.title}>
                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-3.5">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-semibold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">
                          {node.title}
                        </div>
                        <div className="truncate text-xs text-slate-400">
                          {node.detail}
                        </div>
                      </div>
                    </div>
                    {index < architecture.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="h-4 w-4 text-indigo-400/60" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Demonstrates + benchmark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                What it demonstrates
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {demonstrates.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-300" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Benchmark
                </span>
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[11px] font-medium text-amber-300">
                  Measurements pending
                </span>
              </div>
              <dl className="divide-y divide-white/5">
                {benchmark.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2 font-mono text-sm"
                  >
                    <dt className="text-slate-400">{row.label}</dt>
                    <dd
                      className={
                        row.value === 'Coming soon'
                          ? 'text-slate-500'
                          : 'text-white'
                      }
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Button size="xl" variant="gradient" className="group shadow-lg shadow-indigo-600/30" asChild>
            <Link href="/case-studies/production-llm-deployment">
              View Technical Case Study
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
