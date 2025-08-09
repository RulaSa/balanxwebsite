import type { Metadata } from 'next'
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
        <style>{`
html {
  font-family: 'Agrandir Wide', sans-serif;
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
