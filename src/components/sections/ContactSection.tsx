'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Cloud, ShieldCheck, Send, MessageSquare, ClipboardCheck } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  website: '',
  building: '',
  priority: '',
  environment: '',
  timeline: '',
  stack: '',
}

export function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
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
        alert(result.message || "Thank you! We'll get back to you within 24 hours.")
        setFormData(initialForm)
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@kaironovas.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Cloud,
      title: 'Deploy Anywhere',
      details: 'On-prem · VPC · Cloud',
      description: 'We deploy inside your environment',
    },
    {
      icon: ShieldCheck,
      title: 'Your Data Stays Yours',
      details: 'Private by design',
      description: 'No data sent to third-party APIs',
    },
  ]

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:placeholder:text-slate-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors'
  const labelClass =
    'block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2'

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#080a12]">
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
            <span className="text-gray-900 dark:text-white">Request an AI</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              Infrastructure Review
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Tell us what you&apos;re trying to build and where it needs to run.
            We&apos;ll assess your architecture, data, and deployment approach — and
            where it fits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-slate-400 mb-8">
                  Reach out to discuss a secure, private AI deployment for your team.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card
                    key={index}
                    className="p-6 border-0 dark:border dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-indigo-600 dark:text-indigo-300 font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-slate-400">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              <Card className="p-6 border-0 shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-violet-500/10 dark:border dark:border-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <ClipboardCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      What you&apos;ll get
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">
                    A technical assessment of your architecture, data requirements,
                    infrastructure, security considerations, and a recommended
                    deployment approach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 dark:border dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-300" />
                  Tell us about your project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Company Website</label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>What are you trying to build? *</label>
                    <textarea
                      name="building"
                      required
                      rows={4}
                      value={formData.building}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Briefly describe the AI system, data sources, and workflows you have in mind..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Main Priority</label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a priority</option>
                        <option value="private-ai-assistant">Private AI Assistant</option>
                        <option value="rag">RAG / Knowledge Search</option>
                        <option value="llm-deployment">LLM Deployment</option>
                        <option value="ai-infrastructure">AI Infrastructure</option>
                        <option value="workflow-automation">Workflow Automation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Where should the system run?</label>
                      <select
                        name="environment"
                        value={formData.environment}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select an environment</option>
                        <option value="public-cloud">Public Cloud</option>
                        <option value="private-cloud-vpc">Private Cloud / VPC</option>
                        <option value="on-prem">On-Prem</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a timeline</option>
                        <option value="exploring">Exploring</option>
                        <option value="lt-1-month">Less than 1 month</option>
                        <option value="1-3-months">1–3 months</option>
                        <option value="3-plus-months">3+ months</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Current AI stack{' '}
                        <span className="text-gray-400 dark:text-slate-500 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="stack"
                        value={formData.stack}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g. vLLM, Kubernetes, pgvector"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="xl"
                    variant="gradient"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Technical Review'}
                    {!isSubmitting && (
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
