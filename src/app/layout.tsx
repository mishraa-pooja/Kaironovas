import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaironovas.com'),
  title: "Kaironovas | Private AI Infrastructure, RAG & LLM Deployment",
  description: "Kaironovas builds and deploys private AI assistants, RAG systems, LLM infrastructure, and AI automation inside your cloud, VPC, or on-prem environment.",
  keywords: "Private AI, private LLM deployment, RAG on company data, enterprise AI infrastructure, GPU cluster deployment, secure AI workflows, AI workflow automation, GitOps, AI observability, on-premise AI",
  authors: [{ name: "Kaironovas" }],
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png', sizes: '152x152', type: 'image/png' },
      { url: '/logo.png', sizes: '120x120', type: 'image/png' }
    ],
    shortcut: '/logo.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Kaironovas | Private AI Infrastructure, RAG & LLM Deployment",
    description: "Kaironovas builds and deploys private AI assistants, RAG systems, LLM infrastructure, and AI automation inside your cloud, VPC, or on-prem environment.",
    type: "website",
    url: "https://kaironovas.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kaironovas - Private AI Infrastructure & Automation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaironovas | Private AI Infrastructure, RAG & LLM Deployment",
    description: "Kaironovas builds and deploys private AI assistants, RAG systems, LLM infrastructure, and AI automation inside your cloud, VPC, or on-prem environment.",
    images: ["/logo.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
