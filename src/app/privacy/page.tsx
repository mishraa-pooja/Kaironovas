import type { Metadata } from 'next'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kaironovas',
  description:
    'How Kaironovas handles information submitted through this website, including contact form data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080a12]">
      <Header />
      <main className="pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">
            This policy explains what information we collect through this website and
            how we use it.
          </p>

          <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Information we collect
              </h2>
              <p>
                When you submit the contact form, we collect the information you
                provide — such as your name, work email, company, company website,
                project description, priorities, target environment, timeline, and any
                current AI stack details you choose to share.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                How we use it
              </h2>
              <p>
                We use this information solely to respond to your inquiry and to
                understand how we may be able to help. We do not sell your
                information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Storage
              </h2>
              <p>
                Submissions are stored in our database and may trigger an internal
                email notification so we can follow up with you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Contact
              </h2>
              <p>
                For any privacy questions or to request deletion of your submission,
                email{' '}
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
