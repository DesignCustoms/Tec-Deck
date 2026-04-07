 'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from './Container'
import { Button } from './Button'

const nav = [
  { to: '/solutions', label: 'Solutions' },
  { to: '/biomimicry', label: 'Biomimicry' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgb(var(--td-bg))]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-xl p-0.5">
              <img
                src="/tec-deck.svg"
                alt="Tec-Deck"
                className="h-8 w-8 opacity-95"
                width={28}
                height={28}
              />
            </span>
            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm font-semibold tracking-wide text-white">
                Tec<span className="text-white/60">-</span>Deck
              </div>
              <div className="hidden truncate text-xs text-white/60 sm:block">
                Data center capacity for modern compute
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className={[
                  'rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/6 transition',
                  pathname === item.to ? 'bg-white/8 text-white ring-1 ring-white/12' : '',
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button variant="secondary" to="/contact" className="hidden sm:inline-flex">
              Talk to an engineer
            </Button>
            <Button to="/contact">Get a proposal</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

