import { siteConfig } from '../config/siteConfig'

const { staffData, content } = siteConfig
const { team } = content

export default function Team({ activeId, onSelect }) {
  return (
    <section id="team" className="bg-surface px-6 pb-4 pt-4 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-accent">{team.eyebrow}</span>
        <h2 className="mx-auto mt-4 font-display text-3xl text-ink sm:text-4xl">{team.title}</h2>

        <div role="tablist" aria-label={team.ariaLabel} className="mt-8 flex flex-wrap justify-center gap-3">
          {staffData.map((b) => {
            const active = b.id === activeId
            return (
              <button
                key={b.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onSelect(b.id)}
                className={`flex items-center gap-3 rounded-3xl border px-4 py-3 text-right transition-colors ${
                  active ? 'border-ink bg-ink text-surface' : 'border-ink/15 bg-white text-ink/80 hover:border-primary/60'
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm ${
                    active ? 'bg-primary text-ink' : 'bg-ink text-primary'
                  }`}
                >
                  {b.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{b.name}</span>
                  <span className={`block text-xs ${active ? 'text-surface-dim' : 'text-muted'}`}>{b.role}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
