'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { founder, companyBlurb } from '@/lib/founder'
import { FounderCard } from '@/components/ui/founder-card'

export function AboutFounderSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#080a12]">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
              About Kaironovas
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
              Engineering-first AI infrastructure
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {companyBlurb}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FounderCard founder={founder} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
