import { Check, Star } from 'lucide-react';
import { plans } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Pricing() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta-500">
            <span className="h-px w-10 bg-terracotta-400" />
            Membership
            <span className="h-px w-10 bg-terracotta-400" />
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-sage-800 text-balance sm:text-5xl">
            Simple plans, no contracts
          </h2>
          <p className="mt-5 text-lg text-sage-700/75">
            Your first class is always on us. After that, choose what fits — change or pause
            whenever life shifts.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.id}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 reveal ${
                visible ? 'is-visible' : ''
              } ${
                p.featured
                  ? 'bg-sage-700 text-sand-50 shadow-2xl ring-1 ring-sage-600 lg:scale-105'
                  : 'bg-sand-50 text-sage-800 shadow-sm ring-1 ring-sand-200'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta-500 px-4 py-1 text-xs font-medium tracking-wide text-sand-50 shadow-lg">
                  Most loved
                </div>
              )}
              <h3 className="font-display text-3xl font-semibold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.featured ? 'text-sage-200' : 'text-sage-700/70'}`}>
                {p.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold">${p.price}</span>
                <span className={`text-sm ${p.featured ? 'text-sage-200' : 'text-sage-700/60'}`}>
                  {p.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-none ${
                        p.featured ? 'text-terracotta-300' : 'text-terracotta-500'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span className={p.featured ? 'text-sand-100' : 'text-sage-700/85'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  p.featured
                    ? 'bg-terracotta-500 text-sand-50 hover:bg-terracotta-600 hover:shadow-lg'
                    : 'bg-sage-700 text-sand-50 hover:bg-sage-800 hover:shadow-lg'
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-sage-700/60">
          <Star className="h-4 w-4 fill-terracotta-400 text-terracotta-400" />
          No setup fees. Cancel anytime. First class always free.
        </p>
      </div>
    </section>
  );
}
