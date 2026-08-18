import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { schedule } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Schedule() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeDay, setActiveDay] = useState(0);

  const day = schedule[activeDay];

  return (
    <section id="schedule" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta-500">
            <span className="h-px w-10 bg-terracotta-400" />
            Weekly schedule
            <span className="h-px w-10 bg-terracotta-400" />
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-sage-800 text-balance sm:text-5xl">
            Find your time on the mat
          </h2>
        </div>

        {/* Day tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {schedule.map((s, i) => (
            <button
              key={s.day}
              onClick={() => setActiveDay(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                i === activeDay
                  ? 'bg-sage-700 text-sand-50 shadow-md'
                  : 'bg-sand-50 text-sage-700 hover:bg-sage-100'
              }`}
            >
              {s.day}
            </button>
          ))}
        </div>

        {/* Sessions */}
        <div
          key={day.day}
          className="mt-10 grid gap-4 animate-fade-in sm:grid-cols-2"
        >
          {day.sessions.length === 0 ? (
            <p className="col-span-full text-center text-sage-700/60">No classes scheduled — enjoy the rest.</p>
          ) : (
            day.sessions.map((s) => (
              <div
                key={`${s.time}-${s.name}`}
                className="flex items-center gap-5 rounded-2xl bg-sand-50 p-5 shadow-sm ring-1 ring-sand-200 transition-all duration-300 hover:ring-terracotta-300"
              >
                <div className="flex h-16 w-16 flex-none flex-col items-center justify-center rounded-xl bg-terracotta-50 text-terracotta-600">
                  <CalendarDays className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold text-sage-800">{s.name}</h3>
                    <span className="flex-none font-medium text-terracotta-600">{s.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-sage-700/70">
                    with {s.instructor} · {s.level}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
