import Link from 'next/link'

type CommonProps = {
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

type ButtonLinkProps = CommonProps & {
  to: NonNullable<React.ComponentProps<typeof Link>['href']>
  href?: never
  target?: never
  rel?: never
}

type ButtonAnchorProps = CommonProps & {
  href: string
  to?: never
  target?: string
  rel?: string
}

export function Button(props: ButtonLinkProps | ButtonAnchorProps) {
  const variant = props.variant ?? 'primary'
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-0'

  const styles =
    variant === 'primary'
      ? 'bg-emerald-400/90 text-slate-950 hover:bg-emerald-300'
      : 'bg-white/6 text-white hover:bg-white/10 ring-1 ring-white/12'

  const className = [base, styles, props.className].filter(Boolean).join(' ')

  if ('href' in props) {
    return (
      <a
        href={props.href}
        className={className}
        target={props.target}
        rel={props.rel ?? (props.target === '_blank' ? 'noreferrer' : undefined)}
      >
        {props.children}
      </a>
    )
  }

  return (
    <Link href={props.to} className={className}>
      {props.children}
    </Link>
  )
}

