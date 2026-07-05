'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Sparkles, Zap, Target, TrendingUp } from 'lucide-react'

const aiDemos = [
  {
    title: 'Private Knowledge Assistant',
    description: 'A RAG assistant that answers from your internal documents with citations',
    icon: Brain,
    placeholder: 'e.g., What is our refund policy for enterprise clients?',
    demoResults: [
      '📄 Answer grounded in your internal policy documents',
      '🔗 Cites source: Enterprise_Policy_v3.pdf, section 4.2',
      '🔒 Runs privately — no data sent to external APIs',
      '⚡ Sub-second retrieval across thousands of documents'
    ]
  },
  {
    title: 'Support Automation',
    description: 'Automate repetitive support queries using your SOPs and knowledge base',
    icon: Target,
    placeholder: 'e.g., Customer asking why their payment failed',
    demoResults: [
      '🤖 Drafts a response from your support knowledge base',
      '🔗 References: Billing_Troubleshooting_SOP.md',
      '👤 Human-in-the-loop review before sending',
      '📉 Reduces handle time on repetitive tickets'
    ]
  },
  {
    title: 'Document Intelligence',
    description: 'Extract and summarize key information from long internal documents',
    icon: TrendingUp,
    placeholder: 'e.g., Summarize this 40-page vendor contract',
    demoResults: [
      '📝 Concise summary of key terms and obligations',
      '⚠️ Flags renewal dates, penalties, and liabilities',
      '🔗 Links each point back to the source page',
      '🔒 Processed entirely within your environment'
    ]
  }
]

export function AIShowcaseSection() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = async () => {
    if (!userInput.trim()) return
    
    setIsAnalyzing(true)
    setShowResults(false)
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2000)
  }

  const currentDemo = aiDemos[activeDemo]
  const IconComponent = currentDemo.icon

  return (
    <section id="ai-solutions" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-indigo-500/30">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">See Private AI in Action</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Private AI
            </span>
            <br />
            <span className="text-white">Assistants</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Examples of AI grounded in your own data — deployed privately, with
            citations and full control. Live demonstrations available on request.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Demo Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {aiDemos.map((demo, index) => {
              const DemoIcon = demo.icon
              return (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 border-0 ${
                    activeDemo === index 
                      ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/50 shadow-lg shadow-indigo-500/25' 
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                  onClick={() => {
                    setActiveDemo(index)
                    setShowResults(false)
                    setUserInput('')
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeDemo === index 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
                          : 'bg-gray-700'
                      }`}>
                        <DemoIcon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">{demo.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm">{demo.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>

          {/* Active Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            key={activeDemo}
          >
            <Card className="bg-gray-800/50 border-gray-700 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{currentDemo.title}</CardTitle>
                </div>
                <p className="text-gray-300">{currentDemo.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ask a question:
                  </label>
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder={currentDemo.placeholder}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  />
                </div>

                {/* Analyze Button */}
                <Button 
                  onClick={handleAnalyze}
                  disabled={!userInput.trim() || isAnalyzing}
                  variant="gradient"
                  size="lg"
                  className="w-full group"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Run Query
                    </>
                  )}
                </Button>

                {/* Results */}
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-indigo-400" />
                      AI Response
                    </h4>
                    <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-4 border border-indigo-500/20">
                      {currentDemo.demoResults.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start space-x-2 mb-2 last:mb-0"
                        >
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-200 text-sm">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 italic">
                      * Illustrative example. Live demonstrations available on request.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}