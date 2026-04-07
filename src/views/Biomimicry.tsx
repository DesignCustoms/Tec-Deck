import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'

function Principle({
  title,
  body,
  example,
}: {
  title: string
  body: string
  example: string
}) {
  return (
    <div className="td-card rounded-3xl p-7">
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>
      <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="text-xs font-semibold tracking-wide text-white/70">
          How it shows up at Tec-Deck
        </div>
        <div className="mt-2 text-sm text-white/70">{example}</div>
      </div>
    </div>
  )
}

export function Approach() {
  return (
    <main>
      <PageHero
        eyebrow="Approach"
        title="Resilience informed by nature, applied to infrastructure"
        lead="This is a systems approach that emphasizes stability under stress, clear signals, and adaptation without cascading failure. Tec-Deck uses these principles to guide design decisions and operational practices."
        primaryCta={{ label: 'Request a proposal', to: '/contact' }}
        secondaryCta={{ label: 'View solutions', to: '/solutions' }}
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          <Principle
            title="Redundancy with clear boundaries"
            body="Healthy systems avoid single points of failure while keeping complexity manageable."
            example="Modular capacity blocks, defined failure domains, and operational drills that keep redundancy meaningful."
          />
          <Principle
            title="Flow oriented design"
            body="Efficient pathways reduce hotspots and improve stability across the system."
            example="Airflow aware layout, containment strategy, and monitoring that prioritizes patterns over noise."
          />
          <Principle
            title="Early signal, fast response"
            body="Strong systems respond to early indicators before minor issues become major incidents."
            example="Runbooks and escalation practices tuned for rapid, human accountable response."
          />
        </div>
      </Section>

      <Section variant="muted">
        <div className="td-card rounded-3xl p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Built for workload variability
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Dense and variable workloads demand infrastructure that stays stable as conditions
                change. Tec-Deck focuses on repeatable design patterns, disciplined operations, and
                clear escalation paths that maintain trust under load.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Graceful degradation',
                    body: 'The system remains stable enough to recover during partial failures.',
                  },
                  {
                    title: 'Modularity',
                    body: 'Capacity scales in repeatable units with consistent outcomes.',
                  },
                  {
                    title: 'Clear failure domains',
                    body: 'Boundaries limit blast radius and reduce cascading events.',
                  },
                  {
                    title: 'Human accountability',
                    body: 'Automation supports operators while ownership stays clear.',
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

            <div className="md:col-span-4 md:flex md:justify-end">
              <div className="w-full rounded-3xl bg-[rgb(var(--td-surface))]/40 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Apply the approach</div>
                <p className="mt-3 text-sm text-white/70">
                  Share density targets, timeline, and reliability requirements. Tec-Deck will map
                  constraints to an implementation plan.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button to="/contact">Contact Tec-Deck</Button>
                  <Button variant="secondary" to="/solutions">
                    View solutions
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

