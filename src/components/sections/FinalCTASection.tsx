'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0b0f1e] text-white">
      <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            Ready to build AI your company can actually use?
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-300 leading-relaxed mb-9">
            Let’s identify where private AI can create real value in your
            organization and what it would take to deploy it securely.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              variant="gradient"
              className="group shadow-lg shadow-indigo-600/30"
              asChild
            >
              <Link href="#contact">
                Get an AI Infrastructure Review
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white/15 bg-transparent text-slate-200 hover:border-indigo-400/40 hover:bg-white/5"
              asChild
            >
              <Link href="#contact">Talk to an Engineer</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
