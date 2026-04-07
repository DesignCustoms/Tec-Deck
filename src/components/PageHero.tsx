import { Container } from './Container'
import { Button } from './Button'

export function PageHero({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string
  title: string
  lead: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 td-grid opacity-50" />
      <Container>
        <div className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wide text-emerald-300/80">
              {eyebrow}
            </div>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              {lead}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta && <Button to={primaryCta.to}>{primaryCta.label}</Button>}
                {secondaryCta && (
                  <Button variant="secondary" to={secondaryCta.to}>
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

