import Link from 'next/link'
import { Container } from '../components/Container'
import { Button } from '../components/Button'

export function NotFound() {
  return (
    <main className="py-14 sm:py-20">
      <Container>
        <div className="td-card rounded-3xl p-10 text-center">
          <div className="text-sm font-semibold text-white/80">404</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            The page may have moved, or the link may be outdated. Return to the homepage or contact
            Tec-Deck for assistance.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/">Go home</Button>
            <Button variant="secondary" to="/contact">
              Contact Tec-Deck
            </Button>
          </div>
          <div className="mt-6 text-xs text-white/50">
            Or try{' '}
            <Link className="text-emerald-200 hover:text-emerald-100" href="/solutions">
              Solutions
            </Link>
            .
          </div>
        </div>
      </Container>
    </main>
  )
}

