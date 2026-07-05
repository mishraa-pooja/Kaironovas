'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Settings, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Brain,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const services = [
  {
    title: 'Private LLM Deployment',
    description: 'Self-hosted open-source LLMs running securely inside your own infrastructure.',
    features: [
      'On-prem, VPC or private cloud',
      'Open-source models (Llama, Mistral, Qwen)',
      'No data sent to third-party APIs',
      'Access-controlled model serving'
    ],
    icon: Brain,
    gradient: 'from-blue-500 to-indigo-600',
    priceRange: 'Deployed in your environment',
    aiCapabilities: 'vLLM / Ollama serving with GPU acceleration'
  },
  {
    title: 'RAG on Company Data',
    description: 'Answer questions from your documents, SOPs, and internal systems with source citations.',
    features: [
      'Document ingestion & chunking',
      'Vector database integration',
      'Grounded, cited responses',
      'Connects to internal knowledge sources'
    ],
    icon: BarChart3,
    gradient: 'from-green-500 to-teal-600',
    priceRange: 'Grounded in your data',
    aiCapabilities: 'Retrieval-augmented generation over private data'
  },
  {
    title: 'GPU Cluster Deployment',
    description: 'Provision and operate GPU infrastructure for inference and fine-tuning at scale.',
    features: [
      'GPU scheduling & autoscaling',
      'Cost-optimized utilization',
      'Multi-node inference',
      'On-prem or cloud GPUs'
    ],
    icon: Zap,
    gradient: 'from-purple-500 to-pink-600',
    priceRange: 'Scales with your workload',
    aiCapabilities: 'Kubernetes-based GPU orchestration'
  },
  {
    title: 'GitOps & CI/CD',
    description: 'Versioned, automated deployment pipelines for AI models and infrastructure.',
    features: [
      'Infrastructure as code (Terraform)',
      'Declarative GitOps workflows',
      'Automated model rollout & rollback',
      'Reproducible environments'
    ],
    icon: Settings,
    gradient: 'from-orange-500 to-red-600',
    priceRange: 'Fully automated delivery',
    aiCapabilities: 'GitOps pipelines for AI workloads'
  },
  {
    title: 'Observability & Monitoring',
    description: 'Full visibility into AI systems — performance, cost, usage, and reliability.',
    features: [
      'Latency & throughput metrics',
      'Token & GPU cost tracking',
      'Logging and tracing',
      'Alerting on anomalies'
    ],
    icon: TrendingUp,
    gradient: 'from-cyan-500 to-blue-600',
    priceRange: 'Production-grade monitoring',
    aiCapabilities: 'End-to-end AI observability stack'
  },
  {
    title: 'Enterprise Workflow Automation',
    description: 'Automate repetitive operations with AI agents connected to your business systems.',
    features: [
      'Support & back-office automation',
      'Integration with internal APIs',
      'Human-in-the-loop controls',
      'Secure, auditable actions'
    ],
    icon: Users,
    gradient: 'from-yellow-500 to-orange-600',
    priceRange: 'Less manual work',
    aiCapabilities: 'AI agents grounded in your data and tools'
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Brain className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-800">What We Build</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Private AI Systems
            </span>
            <br />
            <span className="text-gray-900">Built on Your Infrastructure</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure private LLMs, RAG on your data, GPU infrastructure, and
            automation — deployed and operated entirely inside your environment.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="relative overflow-hidden">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* AI Capabilities */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Sparkles className="h-4 w-4 text-indigo-600" />
                        <span className="text-xs font-medium text-indigo-800">AI Technology</span>
                      </div>
                      <p className="text-xs text-gray-600">{service.aiCapabilities}</p>
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-xs text-gray-500">Outcome</span>
                        <div className="font-semibold text-gray-900">{service.priceRange}</div>
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="xl" variant="gradient" className="group">
            Discuss Your Private AI Deployment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}