import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: "Nirupam's Coaching — Next Generation PCM for Classes 9–12",
  description:
    'Expert-led concept-driven learning for CBSE boards and competitive exam preparation. Interactive courses, live classes, and personalized mentoring.',
  keywords: [
    'PCM coaching',
    'Physics',
    'Chemistry',
    'Mathematics',
    'Classes 9-12',
    'CBSE',
    'NEET',
    'JEE',
    'Online coaching',
  ],
  authors: [{ name: "Nirupam's Coaching" }],
  openGraph: {
    title: "Nirupam's Coaching — Next Generation PCM",
    description: 'Expert-led concept-driven learning platform',
    type: 'website',
    url: 'https://nirupams-coaching.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-white dark:bg-slate-950 transition-colors`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
