import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'

export function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Engineering led, service forward"
        lead="Tec-Deck exists to deliver data center capacity with clear accountability and predictable operations. We design around real constraints and support teams with a communication model built for high stakes environments."
        primaryCta={{ label: 'Speak with an engineer', to: '/contact' }}
        secondaryCta={{ label: 'View solutions', to: '/solutions' }}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">How we work</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              We focus on repeatability and clarity. That means defining constraints early, setting
              acceptance criteria before deployment, and maintaining a steady operating cadence after
              go live.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Transparent constraints',
                  body: 'Plans aligned to physics, budgets, and timelines with documented tradeoffs.',
                },
                {
                  title: 'Operational discipline',
                  body: 'Maintenance and change management built to reduce risk over time.',
                },
                {
                  title: 'Resilience as a practice',
                  body: 'Runbooks, drills, and post incident improvements that stay current.',
                },
                {
                  title: 'Systems thinking',
                  body: 'Nature informed systems thinking helps us reason about stability, flow, and complexity.',
                },
              ].map((x) => (
                <div key={x.title} className="td-card rounded-3xl p-6">
                  <div className="text-sm font-semibold text-white">{x.title}</div>
                  <div className="mt-2 text-sm text-white/70">{x.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="td-card rounded-3xl p-7">
              <div className="text-sm font-semibold text-white">Human first support model</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                In urgent moments, speed and clarity matter. Tec-Deck is structured so customers can
                reach accountable owners and receive direct answers.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {[
                  'Escalation paths designed for operational urgency',
                  'Clear communication during incidents and change windows',
                  'Straight answers on risk, constraints, and timelines',
                  'A partnership model built around long term stability',
                ].map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/80" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3">
                <Button to="/contact">Contact Tec-Deck</Button>
                <Button variant="secondary" to="/biomimicry">
                  View our approach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}

