'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Target, Shield, Users, Award } from 'lucide-react'

const stats = [
  { number: 'Private', label: 'LLMs on your infrastructure', icon: Brain },
  { number: 'RAG', label: 'Grounded in your data', icon: Target },
  { number: 'GitOps', label: 'Automated deployments', icon: Shield },
  { number: 'Secure', label: 'Data stays in your environment', icon: Award }
]

const values = [
  {
    icon: Shield,
    title: 'Security & Privacy First',
    description: 'Your data never leaves your environment. We deploy AI on-premise, in your VPC, or private cloud — with access controls and full auditability.'
  },
  {
    icon: Target,
    title: 'Production-Grade Engineering',
    description: 'We build AI systems that run reliably in production — monitored, observable, and cost-optimized — not demos that break under real load.'
  },
  {
    icon: Brain,
    title: 'Infrastructure Expertise',
    description: 'Deep hands-on experience with Kubernetes, GPU infrastructure, GitOps, CI/CD, and DevOps automation applied to real AI workloads.'
  },
  {
    icon: Users,
    title: 'Outcome-Focused',
    description: 'We measure success in business outcomes: faster support, better knowledge access, and less manual work across your teams.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">About</span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Kaironovas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help enterprises adopt AI without giving up control of their data —
            deploying private, secure AI systems inside their own infrastructure.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Public AI tools are powerful, but sending sensitive data to third-party
                APIs isn't an option for banks, healthcare, insurance, and other
                regulated organizations.
              </p>
              <p>
                Kaironovas closes that gap. We deploy private LLMs and RAG on your own
                data, provision GPU infrastructure, and automate delivery with GitOps,
                CI/CD, and observability — all inside your environment.
              </p>
              <p>
                Built by engineers with hands-on experience in infrastructure
                automation, DevOps, Kubernetes, and AI deployment, we focus on systems
                that run reliably and securely in production.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}