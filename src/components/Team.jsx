import { siteConfig } from '../config/siteConfig'

const { staffData } = siteConfig

export default function Team({ activeId, onSelect }) {
  return (
    <section id="team" className="bg-cream px-6 pb-4 pt-4 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-burgundy">הצוות שלנו</span>
        <h2 className="mx-auto mt-4 font-display text-3xl text-charcoal sm:text-4xl">מי מטפל/ת בך</h2>

        <div role="tablist" aria-label="בחירת מטפל/ת" className="mt-8 flex flex-wrap justify-center gap-3">
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
                  active ? 'border-charcoal bg-charcoal text-cream' : 'border-charcoal/15 bg-white text-charcoal/80 hover:border-gold/60'
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm ${
                    active ? 'bg-gold text-charcoal' : 'bg-charcoal text-gold'
                  }`}
                >
                  {b.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{b.name}</span>
                  <span className={`block text-xs ${active ? 'text-cream-dim' : 'text-stone'}`}>{b.role}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
