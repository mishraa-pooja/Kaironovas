'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function TrustSection() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-6">
            Why Kaironovas
          </p>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
            Built by engineers with hands-on experience in infrastructure
            automation, DevOps, CI/CD, Kubernetes, and AI deployment.
          </p>
          <p className="mt-6 text-zinc-500 leading-relaxed">
            We focus on systems that run reliably in production — not demos that
            impress in a slide deck.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
