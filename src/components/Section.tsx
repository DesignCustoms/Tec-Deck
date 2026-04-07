import type { PropsWithChildren } from 'react'
import { Container } from './Container'

export function Section({
  children,
  variant = 'default',
}: PropsWithChildren<{ variant?: 'default' | 'muted' }>) {
  const bg =
    variant === 'muted'
      ? 'bg-[rgb(var(--td-surface))]/20'
      : 'bg-transparent'

  return (
    <section className={`${bg} py-12 sm:py-16`}>
      <Container>{children}</Container>
    </section>
  )
}

