interface Props {
  name: string
  title?: string
  label?: string
  className?: string
}

export default function Icon({ name, title, label, className }: Props) {
  return (
    <svg className={className} aria-label={label}>
      {title && <title>{title}</title>}
      <use xlinkHref={`/icons.svg#${name}`} />
    </svg>
  )
}

Icon.displayName = 'Icon'
