import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaironovas.com'),
  title: "Kaironovas | Private AI Infrastructure & Automation",
  description: "Kaironovas deploys private AI on your company data — secure private LLMs, RAG, GPU clusters, GitOps, observability, and workflow automation for banks, healthcare, insurance, and enterprises with sensitive data.",
  keywords: [
    "Private AI",
    "Private LLM deployment",
    "RAG on company data",
    "Enterprise AI infrastructure",
    "GPU cluster deployment",
    "Secure AI workflows",
    "AI workflow automation",
    "GitOps",
    "AI observability",
    "On-premise AI",
  ].join(", "),
  authors: [{ name: "Kaironovas" }],
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Kaironovas | Private AI Infrastructure & Automation",
    description: "Deploy private AI on your company data. Secure private LLMs, RAG, GPU clusters, GitOps, and observability — built for enterprises with sensitive data.",
    type: "website",
    url: "https://kaironovas.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kaironovas — Private AI Infrastructure & Automation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaironovas | Private AI Infrastructure & Automation",
    description: "Deploy private AI on your company data. Secure private LLMs, RAG, GPU clusters, GitOps, and observability for enterprises with sensitive data.",
    images: ["/logo.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
