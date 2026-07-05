'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const useCases = [
  {
    title: 'Internal Knowledge Assistant',
    category: 'Knowledge Access',
    content: 'Employees get instant, cited answers from company documents, wikis, and SOPs — without hunting through folders.',
    avatar: '🧠'
  },
  {
    title: 'Support Automation',
    category: 'Customer Support',
    content: 'Automate repetitive support tickets with AI grounded in your knowledge base, with human review before responses go out.',
    avatar: '🎧'
  },
  {
    title: 'Document Processing',
    category: 'Insurance & Finance',
    content: 'Extract, summarize, and flag key terms across contracts, claims, and forms — processed entirely within your environment.',
    avatar: '📄'
  },
  {
    title: 'Compliance Assistant',
    category: 'Regulated Industries',
    content: 'Answer policy and compliance questions strictly from approved internal sources, with traceable citations.',
    avatar: '🛡️'
  },
  {
    title: 'IT & HR Helpdesk',
    category: 'Operations',
    content: 'Resolve common IT and HR requests automatically, reducing manual work and routing edge cases to a human.',
    avatar: '💬'
  },
  {
    title: 'Engineering Knowledge Search',
    category: 'Manufacturing & Tech',
    content: 'Search manuals, runbooks, and maintenance logs across teams to get answers on the floor in seconds.',
    avatar: '🔍'
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
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
            <span className="text-gray-900">Where Private AI</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Delivers Value
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common ways teams put private AI to work — grounded in their own data,
            deployed securely inside their infrastructure.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-indigo-200 mb-4" />

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {useCase.content}
                  </p>

                  {/* Label */}
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{useCase.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{useCase.title}</div>
                      <div className="text-sm text-indigo-600 font-medium">{useCase.category}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: 'Private', label: 'Runs in your environment' },
            { number: 'Cited', label: 'Answers with sources' },
            { number: 'Secure', label: 'Access-controlled' },
            { number: '24/7', label: 'Observability' }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
