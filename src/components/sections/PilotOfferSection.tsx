'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pilotIncludes = [
  'Review of your use case and data sources',
  'Private LLM + RAG deployment plan',
  'Infrastructure setup on your cloud, VPC, or on-premise',
  'GitOps & CI/CD pipeline',
  'Observability and monitoring',
  'Secure, access-controlled deployment',
  '2-week hands-on support',
]

export function PilotOfferSection() {
  return (
    <section id="pilot" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 rounded-2xl border border-white/15 bg-white/[0.03]"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-4">
              Pilot Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Private AI Pilot
            </h2>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              A focused engagement to deploy a secure, private AI system on your
              own infrastructure — grounded in your data, monitored, and ready to
              scale.
            </p>

            <ul className="space-y-3.5 mb-10">
              {pilotIncludes.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="xl" asChild className="group">
              <Link href="#contact">
                Request Pilot
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
