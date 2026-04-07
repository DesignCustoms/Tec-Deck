 'use client'

import { useMemo, useState } from 'react'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'

type ContactState =
  | { status: 'idle' }
  | { status: 'sending' }
  | { status: 'sent' }
  | { status: 'error'; message: string }

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold tracking-wide text-white/70">{label}</div>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 ring-1 ring-white/12 focus:outline-none focus:ring-2 focus:ring-emerald-300/60"
      />
    </label>
  )
}

export function Contact() {
  const [state, setState] = useState<ContactState>({ status: 'idle' })

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Tec-Deck capacity request')
    const body = encodeURIComponent(
      [
        'Hi Tec-Deck,',
        '',
        'Here’s what we’re looking for:',
        '- Timeline:',
        '- Location preferences:',
        '- Power / density targets:',
        '- Cooling constraints:',
        '- Network requirements:',
        '- Any compliance / security needs:',
        '',
        'Best,',
      ].join('\n'),
    )
    return `mailto:hello@tec-deck.com?subject=${subject}&body=${body}`
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState({ status: 'sending' })

    try {
      const form = e.currentTarget
      const fd = new FormData(form)
      const payload = Object.fromEntries(fd.entries())

      await new Promise((r) => setTimeout(r, 700))
      void payload

      form.reset()
      setState({ status: 'sent' })
    } catch {
      setState({
        status: 'error',
        message: 'Something went wrong. Email us and we’ll respond quickly.',
      })
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Request capacity or speak with an engineer"
        lead="Share your requirements and timeline. Tec-Deck will respond with a clear assessment of constraints, options, and next steps."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="td-card rounded-3xl p-7">
              <div className="text-sm font-semibold text-white">Contact options</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Use the form to request a proposal, or email the team directly. We typically respond
                within one business day.
              </p>
              <div className="mt-5 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-wide text-white/70">Email</div>
                <div className="mt-2">
                  <a
                    className="text-sm font-semibold text-emerald-200 hover:text-emerald-100"
                    href="mailto:hello@tec-deck.com"
                  >
                    hello@tec-deck.com
                  </a>
                </div>
                <div className="mt-4">
                  <Button variant="secondary" href={mailto}>
                    Open email template
                  </Button>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[rgb(var(--td-surface))]/40 p-5 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">What to include</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {[
                    'Target go live date and timeline',
                    'Power density and expected growth',
                    'Cooling constraints and thermal targets',
                    'Network requirements and connectivity needs',
                    'Geography, compliance, and security requirements',
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-300/70" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={onSubmit} className="td-card rounded-3xl p-7 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-white">Request a proposal</div>
                  <p className="mt-2 text-sm text-white/70">
                    Provide a short summary. We will respond with an initial assessment and next
                    steps.
                  </p>
                </div>
                <div className="text-xs text-white/60">
                  {state.status === 'sent' && (
                    <span className="text-emerald-200">Request received.</span>
                  )}
                  {state.status === 'error' && (
                    <span className="text-rose-200">{state.message}</span>
                  )}
                  {state.status === 'idle' && <span>Response within 1 business day.</span>}
                  {state.status === 'sending' && <span>Sending</span>}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Alex Morgan" required />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  required
                />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Company" name="company" placeholder="Company Inc." />
                <Field label="Timeline" name="timeline" placeholder="30 to 90 days" />
              </div>
              <label className="mt-4 block">
                <div className="text-xs font-semibold tracking-wide text-white/70">
                  Requirements
                </div>
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Include workload type, target density, locations, network requirements, and any compliance needs."
                  className="mt-2 w-full resize-y rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 ring-1 ring-white/12 focus:outline-none focus:ring-2 focus:ring-emerald-300/60"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  type="submit"
                  disabled={state.status === 'sending'}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-400/90 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-300 disabled:opacity-60"
                >
                  Submit request
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </main>
  )
}

