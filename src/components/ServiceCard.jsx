import { siteConfig } from '../config/siteConfig'

const { serviceCard } = siteConfig.content

const BADGE_STYLES = {
  women: 'border-accent/30 bg-accent/10 text-accent',
  men: 'border-ink/25 bg-ink/10 text-ink',
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" />
      <path d="M10 6v4l2.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ServiceCard({ service, onBook }) {
  const badgeLabel = serviceCard.badges[service.audience]
  const badgeStyle = BADGE_STYLES[service.audience]

  return (
    <li className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-2.5">
          <h3 className="font-display text-lg text-ink">{service.title}</h3>
          {badgeLabel && (
            <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${badgeStyle}`}>
              {badgeLabel}
            </span>
          )}
        </div>
        <p className="mt-1 max-w-md text-sm text-muted">{service.desc}</p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
          <ClockIcon />
          <span>{service.duration}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
        <span className="font-display text-xl text-ink">{service.price}</span>
        <button
          type="button"
          onClick={onBook}
          className="rounded-full border border-primary px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-ink"
        >
          {serviceCard.bookLabel}
        </button>
      </div>
    </li>
  )
}
