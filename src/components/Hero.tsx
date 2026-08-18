import { ArrowRight } from 'lucide-react';
import { heroImages } from '@/data/content';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImages.primary}
          alt="A person meditating outdoors in nature"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 via-sage-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-sand-50/60 via-transparent to-sage-900/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sand-100/80 animate-fade-in">
            <span className="h-px w-10 bg-terracotta-300" />
            Yoga · Breath · Stillness
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] text-sand-50 text-balance sm:text-6xl lg:text-7xl animate-fade-up">
            Find your way back to <span className="italic text-terracotta-200">balance</span>.
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100/90 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Sahaja is a neighborhood yoga studio rooted in the belief that everyone deserves a
            place to breathe, move, and come home to themselves — exactly as they are.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-8 py-4 text-sm font-medium text-sand-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-600 hover:shadow-xl"
            >
              Try your first class free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#classes"
              className="inline-flex items-center gap-2 rounded-full border border-sand-50/40 px-8 py-4 text-sm font-medium text-sand-50 backdrop-blur-sm transition-all duration-300 hover:bg-sand-50/10"
            >
              Explore classes
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sand-100/70 lg:flex">
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-12 w-px animate-pulse bg-sand-100/50" />
      </div>
    </section>
  );
}
