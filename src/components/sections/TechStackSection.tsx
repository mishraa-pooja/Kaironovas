'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Boxes, GitBranch, Activity, Cloud, Code2 } from 'lucide-react'

const groups = [
  {
    icon: Cpu,
    label: 'Model Serving',
    items: ['vLLM', 'NVIDIA NIM', 'KServe'],
  },
  {
    icon: Boxes,
    label: 'Infrastructure',
    items: ['Kubernetes', 'Docker', 'Terraform'],
  },
  {
    icon: GitBranch,
    label: 'GitOps & CI/CD',
    items: ['ArgoCD', 'GitLab CI', 'GitHub Actions'],
  },
  {
    icon: Activity,
    label: 'Observability',
    items: ['Prometheus', 'Grafana'],
  },
  {
    icon: Cloud,
    label: 'Cloud',
    items: ['AWS', 'Azure', 'GCP'],
  },
  {
    icon: Code2,
    label: 'Languages',
    items: ['Python'],
  },
]

export function TechStackSection() {
  return (
    <section
      id="technology"
      className="py-24 bg-white dark:bg-[#080a12]"
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
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
            Built with production-grade infrastructure
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            The same tools used to run reliable systems at scale — for model
            serving, deployment, GitOps, and observability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {groups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="border-l border-slate-200 dark:border-white/10 pl-5"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
