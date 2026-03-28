import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'Iron & Oak Gym | Built to Push Limits',
  description: 'Chicago\'s most serious training facility. No excuses. Just results. Join Iron & Oak Gym for strength training, HIIT, boxing, and recovery classes.',
  keywords: ['gym', 'fitness', 'Chicago', 'strength training', 'HIIT', 'boxing', 'yoga'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebasNeue.variable} ${inter.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
