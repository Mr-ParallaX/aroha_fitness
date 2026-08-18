import { instructors } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Instructors() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="teachers" className="bg-sage-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta-500">
            <span className="h-px w-10 bg-terracotta-400" />
            Your guides
            <span className="h-px w-10 bg-terracotta-400" />
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-sage-800 text-balance sm:text-5xl">
            Teachers who hold space for you
          </h2>
          <p className="mt-5 text-lg text-sage-700/75">
            Each of our teachers brings years of practice, deep training, and a genuine love for
            helping you find your own way.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((t, i) => (
            <article
              key={t.id}
              className={`group reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-md">
                <img
                  src={t.image}
                  alt={t.name}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-sand-100">{t.bio}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-display text-2xl font-semibold text-sage-800">{t.name}</h3>
                <p className="text-sm font-medium text-terracotta-500">{t.role}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-sage-100 px-2.5 py-0.5 text-xs text-sage-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
