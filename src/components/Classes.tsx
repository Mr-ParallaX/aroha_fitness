import { Clock, Flame } from 'lucide-react';
import { classes } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const levelColors: Record<string, string> = {
  Beginner: 'bg-sage-100 text-sage-700',
  'All Levels': 'bg-sand-200 text-sand-800',
  Intermediate: 'bg-terracotta-100 text-terracotta-700',
  Advanced: 'bg-terracotta-200 text-terracotta-800',
};

export default function Classes() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="classes" className="bg-sage-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta-500">
            <span className="h-px w-10 bg-terracotta-400" />
            Our classes
            <span className="h-px w-10 bg-terracotta-400" />
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-sage-800 text-balance sm:text-5xl">
            A practice for every body, every day
          </h2>
          <p className="mt-5 text-lg text-sage-700/75">
            From gentle first steps to sweaty, strength-building flows — find the class that fits
            the way you feel today.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={c.id}
                className={`group relative flex flex-col rounded-3xl bg-sand-50 p-8 shadow-sm ring-1 ring-sand-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:ring-terracotta-300 reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-terracotta-500 group-hover:text-sand-50">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide ${levelColors[c.level]}`}
                  >
                    {c.level}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-semibold text-sage-800">{c.name}</h3>
                <p className="mt-3 flex-1 text-sage-700/75 leading-relaxed">{c.description}</p>

                <div className="mt-6 flex items-center gap-5 border-t border-sand-200 pt-5 text-sm text-sage-700/70">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" strokeWidth={1.5} />
                    {c.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="h-4 w-4" strokeWidth={1.5} />
                    {c.intensity}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
