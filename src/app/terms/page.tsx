import type { Metadata } from 'next'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Kaironovas',
  description: 'Terms governing the use of the Kaironovas website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080a12]">
      <Header />
      <main className="pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">
            These terms govern your use of this website.
          </p>

          <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Use of this website
              </h2>
              <p>
                This website is provided for informational purposes about Kaironovas
                and its services. Content may be updated or changed at any time
                without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                No warranties
              </h2>
              <p>
                The information on this site is provided &ldquo;as is&rdquo; without
                warranties of any kind. Any engagement for services is governed by a
                separate written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Contact
              </h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a
                  href="mailto:hello@kaironovas.com"
                  className="text-indigo-600 dark:text-indigo-300 hover:underline"
                >
                  hello@kaironovas.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
