'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-16 md:mb-20 max-w-3xl ${alignClass}`}
    >
      {label && (
        <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  )
}
