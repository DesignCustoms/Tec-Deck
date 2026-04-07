import { Container } from '../components/Container'
import { Button } from '../components/Button'

function FlowDiagram() {
  return (
    <div className="td-card relative overflow-hidden rounded-3xl p-6 sm:p-7">
      <div className="absolute inset-0 opacity-60">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wide text-white/65">
              Delivery model
            </div>
            <div className="mt-1 text-base font-semibold text-white">
              From requirements to operations
            </div>
          </div>
          <div className="rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/12">
            accountable owners
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {[
            { k: '1', t: 'Requirements', d: 'Objectives, constraints, risk posture, timeline' },
            { k: '2', t: 'Design', d: 'Power, cooling, network, deployment plan' },
            { k: '3', t: 'Deploy', d: 'Repeatable capacity blocks and readiness criteria' },
            { k: '4', t: 'Operate', d: 'Runbooks, reporting cadence, escalation paths' },
          ].map((x) => (
            <div
              key={x.k}
              className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
            >
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-white/6 text-sm font-semibold text-white ring-1 ring-white/10">
                {x.k}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{x.t}</div>
                <div className="mt-1 text-sm text-white/65">{x.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-[rgb(var(--td-surface))]/40 p-4 ring-1 ring-white/10">
          <div className="text-xs font-semibold tracking-wide text-emerald-200/80">
            Outcome
          </div>
          <div className="mt-1 text-sm text-white/70">
            A stable environment under load and a support model designed for urgent moments.
          </div>
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="td-card rounded-2xl p-5">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/12">
      {children}
    </span>
  )
}

export function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 td-grid opacity-70" />
        <Container>
          <div className="py-14 sm:py-20">
            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <img
                    src="/tec-deck.svg"
                    alt="Tec-Deck"
                    className="h-10 w-10"
                    width={40}
                    height={40}
                  />
                  <div className="text-sm font-semibold tracking-wide text-white/80">
                    Tec-Deck
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Pill>Operations and accountability</Pill>
                  <Pill>High density power and cooling</Pill>
                  <Pill>Resilience informed by biomimicry</Pill>
                </div>

                <h1 className="mt-7 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Data center capacity for modern compute
                  <span className="td-gradient-text"> designed to reduce operational risk</span>
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  Tec-Deck delivers reliable capacity for teams running dense and variable workloads.
                  We start with constraints, design for predictable outcomes, and support deployments
                  with an operating model built around accountability and clarity.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button to="/contact">Request capacity</Button>
                  <Button variant="secondary" to="/solutions">
                    Explore solutions
                  </Button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <Metric label="Designed for availability" value="Resilient by design" />
                  <Metric label="Support model" value="Accountable owners" />
                  <Metric label="Dense workloads" value="Power and cooling" />
                </div>
              </div>

              <div className="lg:col-span-5">
                <FlowDiagram />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-6">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Reliability depends on operations
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Physical design matters, but operations decide outcomes. Clear ownership, predictable
                maintenance, and disciplined change management reduce risk and improve performance
                over time.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  {
                    title: 'Defined escalation and response',
                    body: 'A support model built for urgent moments with clear accountability.',
                  },
                  {
                    title: 'Change management discipline',
                    body: 'Planned work aligned to your change windows and risk posture.',
                  },
                  {
                    title: 'Engineering led planning',
                    body: 'Requirements translated into constraints, then constraints into a plan.',
                  },
                ].map((item) => (
                  <div key={item.title} className="td-card rounded-2xl p-5">
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-white/70">{item.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="td-card rounded-3xl p-7">
                <div className="text-xs font-semibold tracking-wide text-emerald-300/80">
                  Biomimicry principle
                </div>
                <div className="mt-2 text-xl font-semibold text-white">
                  “Resilience through redundancy, without waste.”
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Nature doesn’t rely on a single critical path. Tec-Deck’s approach favors graceful
                  failure modes, modularity, and operational patterns that reduce blast radius.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-white">Modular capacity</div>
                    <div className="mt-1 text-sm text-white/65">
                      Add power/cooling in predictable increments.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-white">Thermal awareness</div>
                    <div className="mt-1 text-sm text-white/65">
                      Hotspots are signals. Design around flow.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-white">Operational “immune system”</div>
                    <div className="mt-1 text-sm text-white/65">
                      Detection + response tuned for your risk profile.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-white">Energy discipline</div>
                    <div className="mt-1 text-sm text-white/65">
                      Efficiency where it matters. Stability everywhere.
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button variant="secondary" to="/biomimicry">
                    How biomimicry shapes Tec-Deck
                  </Button>
                  <Button to="/contact">Start a conversation</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="td-card rounded-3xl p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Built for training and inference at scale
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                  For training, inference, and hybrid workloads, you need a practical assessment of
                  density targets, thermal constraints, connectivity needs, and operational support.
                  Tec-Deck provides clear options, documented tradeoffs, and an execution plan.
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <Button to="/solutions" className="w-full sm:w-auto">
                  See solutions
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

