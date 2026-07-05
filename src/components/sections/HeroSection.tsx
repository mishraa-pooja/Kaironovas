'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,120,0.12),transparent)]" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-8"
          >
            Private AI Infrastructure &amp; Automation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Deploy Private AI
            <br />
            On Your Company Data
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12"
          >
            Kaironovas builds secure, private AI systems on your own
            infrastructure — private LLMs, RAG on company data, GPU clusters,
            GitOps, and observability. Faster answers, less manual work, and
            full control of your data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="xl" asChild className="group">
              <Link href="#contact">
                Book a Private AI Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="#solutions">See What We Build</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
