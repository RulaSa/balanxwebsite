import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import PageTransition from '@/components/page-transition'

export const metadata: Metadata = {
  title: 'BalanX - Join the Balance Community',
  description: 'Be the first to experience personalized wellness. Reserve your BalanX-D and join thousands on the journey toward natural balance.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
