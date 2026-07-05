import { siteConfig } from '../config/siteConfig'

const { businessInfo, theme } = siteConfig

export default function Hero() {
  return (
    <section id="top" className="bg-cream px-6 pb-20 pt-32 md:px-10 md:pt-40" aria-label="כותרת ראשית">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-burgundy" />
            <p className="whitespace-nowrap text-sm tracking-[0.25em] text-burgundy">{businessInfo.heroEyebrow}</p>
          </div>

          <h1 className="mb-6 font-display text-4xl font-light leading-tight tracking-wide text-charcoal sm:text-5xl lg:text-6xl">
            {businessInfo.shortName} {businessInfo.category}
          </h1>

          <p className="mb-10 max-w-md text-lg leading-relaxed text-stone">
            {businessInfo.heroSubtitle}
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#services"
              className="flex h-[54px] w-full items-center justify-center rounded-3xl bg-gold px-8 text-sm font-semibold tracking-wide text-charcoal transition-opacity hover:opacity-90 sm:w-auto"
            >
              קביעת תור
            </a>
            <a
              href="#services"
              className="flex h-[54px] w-full items-center justify-center rounded-3xl border-2 border-charcoal/25 px-8 text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-cream sm:w-auto"
            >
              מחירון שירותים
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={theme.heroImage}
            alt={theme.heroImageAlt}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
