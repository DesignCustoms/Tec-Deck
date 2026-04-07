import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { SiteHeader } from '../src/components/SiteHeader'
import { SiteFooter } from '../src/components/SiteFooter'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tec-Deck | Data center capacity for modern compute',
  description:
    'Tec-Deck delivers data center capacity for modern compute with an engineering led, service forward operating model.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-dvh">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

