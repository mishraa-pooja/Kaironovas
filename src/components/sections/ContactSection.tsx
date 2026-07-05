'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Send, Mail } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        alert(result.message || "Thank you! We'll be in touch shortly.")
        setFormData({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        alert(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to send message. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-6">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 text-balance">
              Discuss Your Private AI Deployment
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              Tell us about your data, use case, and infrastructure. We&apos;ll show
              you how private AI can run securely inside your environment.
            </p>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4 text-zinc-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Email</p>
                <a
                  href="mailto:hello@kaironovas.com"
                  className="text-white hover:text-zinc-300 transition-colors"
                >
                  hello@kaironovas.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl border border-white/10 bg-white/[0.02] space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/20 transition-colors text-white placeholder-zinc-600"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/20 transition-colors text-white placeholder-zinc-600"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/20 transition-colors text-white placeholder-zinc-600"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    What do you need?
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/20 transition-colors text-white"
                  >
                    <option value="">Select an option</option>
                    <option value="production-ai-pilot">Production AI Pilot</option>
                    <option value="rag">Production RAG Systems</option>
                    <option value="private-llm">Private LLM Deployment</option>
                    <option value="mlops">MLOps & CI/CD</option>
                    <option value="gpu-k8s">GPU / Kubernetes Infrastructure</option>
                    <option value="workflow-automation">AI Workflow Automation</option>
                    <option value="observability">AI Observability</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/20 transition-colors text-white placeholder-zinc-600 resize-none"
                  placeholder="What have you built so far? What's blocking production deployment?"
                />
              </div>

              <Button
                type="submit"
                size="xl"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? 'Sending...' : 'Book a Private AI Demo'}
                {!isSubmitting && (
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
