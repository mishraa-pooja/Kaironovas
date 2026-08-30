import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Button } from '@/components/ui/button'
import { FounderCard } from '@/components/ui/founder-card'
import { founder, companyBlurb } from '@/lib/founder'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Kaironovas',
  description:
    'Kaironovas is an AI infrastructure and automation engineering company that helps businesses connect AI to their company data and deploy it securely in production.',
}

const philosophy = [
  'Production-first: systems are built to run reliably, not just demo well.',
  'Private by design: your data and AI workloads stay inside your environment.',
  'Reproducible and observable: GitOps, CI/CD, monitoring, and logging by default.',
]

const delivery = [
  'Review your architecture, data, and deployment requirements',
  'Recommend an approach and implementation priorities',
  'Design, deploy, and operate the production system',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080a12]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 bg-[#0b0f1e] text-white">
          <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="relative container mx-auto px-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
              About Kaironovas
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
              Engineering-first AI infrastructure
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">{companyBlurb}</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 bg-white dark:bg-[#080a12]">
          <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Engineering philosophy
              </h2>
              <ul className="space-y-4">
                {philosophy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-12 mb-6">
                How we deliver
              </h2>
              <ol className="space-y-4">
                {delivery.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Founder
              </h2>
              <FounderCard founder={founder} />

              <div className="mt-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.03] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                  Technical areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {founder.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-white to-indigo-50/40 dark:from-[#080a12] dark:to-[#0b0f1e]">
          <div className="relative container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Let&apos;s look at your setup
            </h2>
            <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-400 mb-8">
              Start with an AI Infrastructure Review — a technical assessment of your
              architecture, data, and deployment approach.
            </p>
            <Button size="xl" variant="gradient" className="group shadow-indigo-600/20" asChild>
              <Link href="/#contact">
                Get an AI Infrastructure Review
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
