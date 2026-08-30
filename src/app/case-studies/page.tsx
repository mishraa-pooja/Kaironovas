import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { ArrowRight, FlaskConical } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies | Kaironovas',
  description:
    'Engineering case studies from Kaironovas — reference deployments covering model serving, GitOps, GPU infrastructure, and production observability.',
}

// Structured so future real client case studies can be added to this list.
const caseStudies = [
  {
    href: '/case-studies/production-llm-deployment',
    eyebrow: 'Kaironovas Engineering Lab',
    title: 'Inside a Production AI Deployment',
    description:
      'How Kaironovas approaches model serving, GitOps, GPU infrastructure, observability, and production deployment.',
    tags: ['vLLM', 'Kubernetes', 'ArgoCD', 'GPU', 'Prometheus'],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080a12]">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 bg-[#0b0f1e] text-white">
          <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="relative container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
              Case Studies
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Engineering case studies and reference deployments. We only publish
              customer work when we&apos;re able to share it — everything here is
              clearly labelled.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-[#080a12]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study) => (
                <Link
                  key={study.href}
                  href={study.href}
                  className="group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-400/40"
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 mb-5">
                    <FlaskConical className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
                    {study.eyebrow}
                  </span>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {study.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-300">
                    View technical case study
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
