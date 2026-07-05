import { useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import ServiceCard from './ServiceCard'

const { servicesData } = siteConfig

export default function Services({ onBook, activeId }) {
  const [viewMode, setViewMode] = useState('all')

  const filtered =
    viewMode === 'men'
      ? servicesData.filter((s) => s.audience === 'men')
      : servicesData.filter((s) => s.barberId === activeId)

  return (
    <section id="services" className="bg-cream px-6 py-16 md:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-burgundy">מה אנחנו מציעים</span>
          <h2 className="mx-auto mt-4 font-display text-4xl text-charcoal sm:text-5xl">
            מחירון שירותים
          </h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-gold" />
        </div>

        <div role="tablist" aria-label="סינון לפי קהל יעד" className="mt-10 flex justify-center gap-2">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'all'}
            onClick={() => setViewMode('all')}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              viewMode === 'all' ? 'border-charcoal bg-charcoal text-cream' : 'border-charcoal/15 bg-white text-charcoal/70 hover:border-gold/60'
            }`}
          >
            כל הטיפולים
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'men'}
            onClick={() => setViewMode('men')}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              viewMode === 'men' ? 'border-gold bg-gold text-charcoal' : 'border-charcoal/15 bg-white text-charcoal/70 hover:border-gold/60'
            }`}
          >
            טיפולים לגברים
          </button>
        </div>

        <ul className="mt-8 divide-y divide-charcoal/10">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} onBook={() => onBook(s.id, s.barberId)} />
          ))}
        </ul>
      </div>
    </section>
  )
}
