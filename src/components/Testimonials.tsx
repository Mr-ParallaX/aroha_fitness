import { Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="stories" className="relative overflow-hidden bg-sage-800 py-24 lg:py-32">
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-terracotta-300 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-sage-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta-300">
            <span className="h-px w-10 bg-terracotta-300" />
            Our community
            <span className="h-px w-10 bg-terracotta-300" />
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-sand-50 text-balance sm:text-5xl">
            Stories from the mat
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className={`flex flex-col rounded-3xl bg-sage-700/50 p-8 ring-1 ring-sage-600/50 backdrop-blur-sm transition-all duration-500 hover:bg-sage-700/70 reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <Quote className="h-8 w-8 flex-none text-terracotta-300" strokeWidth={1} />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-sand-100/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-sage-600/50 pt-5">
                <p className="font-display text-xl font-semibold text-sand-50">{t.author}</p>
                <p className="text-sm text-sage-200">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
