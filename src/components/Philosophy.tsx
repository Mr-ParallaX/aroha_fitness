import { Check } from 'lucide-react';
import { philosophyImage } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const pillars = [
  { title: 'Move', text: 'Honoring your body as it is today — not yesterday, not next week.' },
  { title: 'Breathe', text: 'The breath is the bridge. Every class begins and ends with it.' },
  { title: 'Rest', text: 'Stillness is not the reward for practice. It is the practice.' },
];

export default function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="philosophy" className="relative bg-sand-50 py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={philosophyImage}
              alt="A woman practicing yoga on rocks by a serene river"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-sage-700 px-8 py-6 text-sand-50 shadow-2xl sm:block">
            <p className="font-display text-4xl font-semibold">15+</p>
            <p className="text-sm text-sage-200">years guiding practice</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta-500">
            <span className="h-px w-10 bg-terracotta-400" />
            Our philosophy
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-sage-800 text-balance sm:text-5xl">
            Yoga is not about touching your toes. It is about what you learn on the way down.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-sage-700/80">
            We teach yoga the way it was taught to us — as a lifelong companionship with your own
            breath and body. No perfect poses, no performance. Just an honest practice that meets
            you every morning, exactly where you are.
          </p>

          <div className="mt-10 space-y-5">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-sage-800">{p.title}</h3>
                  <p className="text-sage-700/75">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
