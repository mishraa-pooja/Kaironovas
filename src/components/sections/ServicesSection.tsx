'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Database,
  Server,
  Workflow,
  GitBranch,
  Cpu,
  Container,
  Activity,
  Plug,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'

const solutions = [
  {
    title: 'Production RAG Systems',
    description:
      'End-to-end retrieval pipelines with document ingestion, chunking, embedding, and source-cited responses.',
    icon: Database,
  },
  {
    title: 'Private LLM Deployment',
    description:
      'Self-hosted open-source models on your infrastructure — VPC, on-premise, or private cloud.',
    icon: Server,
  },
  {
    title: 'AI Workflow Automation',
    description:
      'Connect LLMs and agents to business tools to automate operational workflows at scale.',
    icon: Workflow,
  },
  {
    title: 'MLOps & CI/CD',
    description:
      'Automated model deployment pipelines, versioning, testing, and rollback for AI workloads.',
    icon: GitBranch,
  },
  {
    title: 'GPU Infrastructure',
    description:
      'GPU cluster provisioning, scheduling, and cost optimization for inference and training.',
    icon: Cpu,
  },
  {
    title: 'Kubernetes AI Deployments',
    description:
      'Containerized AI services with autoscaling, service mesh, and production-grade orchestration.',
    icon: Container,
  },
  {
    title: 'AI Observability',
    description:
      'Monitoring, logging, tracing, and cost tracking for LLM applications in production.',
    icon: Activity,
  },
  {
    title: 'Enterprise AI Integrations',
    description:
      'Connect AI systems to CRMs, ERPs, internal APIs, Slack, Teams, and existing data sources.',
    icon: Plug,
  },
]

export function ServicesSection() {
  return (
    <section id="solutions" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="What We Build"
          title="Private AI systems, built on your infrastructure"
          description="We design, deploy, and operate secure AI platforms — private LLMs, RAG on company data, GPU infrastructure, and automation that runs entirely inside your environment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group p-7 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors">
                  <Icon className="h-4 w-4 text-zinc-300" />
                </div>
                <h3 className="text-base font-medium text-white mb-2.5">
                  {solution.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
