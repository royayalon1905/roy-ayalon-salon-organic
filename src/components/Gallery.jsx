import { gallery } from '../data/gallery'
import RazorReveal from './RazorReveal'

const ASPECTS = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-square', 'aspect-[3/4]']

export default function Gallery() {
  return (
    <section id="gallery" className="border-y border-charcoal/10 bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <span className="text-xs font-semibold tracking-[0.3em] text-burgundy">תיק עבודות</span>
        <RazorReveal as="h2" className="mt-4 overflow-hidden font-display text-4xl text-charcoal sm:text-5xl">
          כל תמונה מדברת בעד עצמה
        </RazorReveal>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {gallery.map((g, i) => (
            <figure
              key={g.id}
              className={`relative mb-4 break-inside-avoid overflow-hidden rounded-lg border border-charcoal/10 ${ASPECTS[i % ASPECTS.length]}`}
            >
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[15%]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-3 text-sm text-cream-dim">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
