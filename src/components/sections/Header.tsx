'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LogoIcon } from '@/components/ui/logo-icon'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'How We Work', href: '/#process' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-[#080a12]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <LogoIcon size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              Kaironovas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button variant="gradient" size="lg" asChild>
              <Link href="/#contact">Get Infrastructure Review</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-slate-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="gradient" size="lg" asChild className="self-start">
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Get Infrastructure Review
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
