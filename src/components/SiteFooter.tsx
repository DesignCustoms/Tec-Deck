import Link from 'next/link'
import { Container } from './Container'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-lg font-semibold text-white">Tec-Deck</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Tec-Deck designs and operates data center capacity for modern compute with an
              engineering led, service forward operating model.
            </p>
          </div>

          <div className="md:col-span-7 md:flex md:justify-end">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-sm font-semibold text-white/90">Company</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>
                    <Link className="hover:text-white" href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white" href="/biomimicry">
                      Approach
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90">Solutions</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>
                    <Link className="hover:text-white" href="/solutions">
                      Capacity
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white" href="/solutions#operations">
                      Operations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90">Contact</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>
                    <Link className="hover:text-white" href="/contact">
                      Request a proposal
                    </Link>
                  </li>
                  <li>
                    <a className="hover:text-white" href="mailto:hello@tec-deck.com">
                      hello@tec-deck.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Tec-Deck. All rights reserved.</div>
          <div className="flex gap-4">
            <span className="text-white/45">Privacy</span>
            <span className="text-white/45">Security</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

