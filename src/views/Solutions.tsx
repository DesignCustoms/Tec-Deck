import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { Button } from '../components/Button'

function Card({
  title,
  body,
  bullets,
}: {
  title: string
  body: string
  bullets: string[]
}) {
  return (
    <div className="td-card rounded-3xl p-7">
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>
      <ul className="mt-5 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Solutions() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Data center capacity for modern compute"
        lead="Tec-Deck supports training and inference deployments with power, cooling, and operations designed for high density environments. Our approach is engineering led, service forward, and built to reduce operational risk as you scale."
        primaryCta={{ label: 'Request a proposal', to: '/contact' }}
        secondaryCta={{ label: 'Biomimicry approach', to: '/biomimicry' }}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-white">Capabilities</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Practical building blocks that cover the full lifecycle from planning through
              operations. Each engagement starts with constraints and ends with a stable operating
              cadence.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-5 lg:grid-cols-3">
              <Card
                title="Power and cooling"
                body="Design patterns that hold up under density and variability so performance does not become a facilities incident."
                bullets={[
                  'Power planning aligned to utilization patterns',
                  'Airflow and containment oriented thermal strategy',
                  'Resilient distribution with clear failure domains',
                ]}
              />
              <Card
                title="Deployment and migration"
                body="A structured path from rack layout to cutover with clear acceptance criteria."
                bullets={[
                  'Staging plans, runbooks, escalation paths',
                  'Cross team coordination across change windows',
                  'Go live readiness checks that reduce surprises',
                ]}
              />
              <Card
                title="Operations"
                body="A human support model designed for speed, accountability, and transparent communication."
                bullets={[
                  'Named owners and practical response timelines',
                  'Incident communications written for clarity',
                  'Continuous improvement based on real events',
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div id="operations" className="td-card rounded-3xl p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <div className="text-xs font-semibold tracking-wide text-emerald-300/80">
                Operating model
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Operations designed to reduce risk
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Reliability is the product of disciplined maintenance, clear ownership, and calm
                execution during change and incident response. Tec-Deck prioritizes predictable
                processes and fast escalation to keep your teams focused.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Clear escalation paths',
                    body: 'Accountable owners and a defined response structure.',
                  },
                  {
                    title: 'Change management',
                    body: 'Planned work communicated early and executed consistently.',
                  },
                  {
                    title: 'Operational documentation',
                    body: 'Runbooks that match reality and evolve after lessons learned.',
                  },
                  {
                    title: 'Decision ready visibility',
                    body: 'Reporting and reviews designed for action, not noise.',
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                  >
                    <div className="text-sm font-semibold text-white">{x.title}</div>
                    <div className="mt-1 text-sm text-white/65">{x.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl bg-[rgb(var(--td-surface))]/40 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Engagement outputs</div>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {[
                    'Capacity plan with documented constraints and tradeoffs',
                    'Deployment plan with runbooks and readiness criteria',
                    'Operating cadence with reviews and reporting',
                    'Support model with defined escalation and communication',
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-300/70" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Button to="/contact">Request a proposal</Button>
                  <Button variant="secondary" to="/contact">
                    Speak with an engineer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}

