import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { ctaImage } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'submitting' | 'success';

export default function Booking() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', classType: 'Hatha Foundations', date: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1100);
  };

  const fieldClass =
    'w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sage-800 placeholder:text-sage-700/40 transition-colors focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-200';

  return (
    <section id="book" className="relative bg-sand-50 py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] shadow-2xl reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative hidden lg:block">
            <img
              src={ctaImage}
              alt="A serene garden meditation space"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-sand-50">
              <p className="font-display text-3xl font-medium leading-tight">
                &ldquo;The journey of a thousand miles begins beneath one&rsquo;s feet.&rdquo;
              </p>
              <p className="mt-2 text-sm text-sand-100/80">— Lao Tzu</p>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-sage-50 p-8 sm:p-12">
            <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta-500">
              <span className="h-px w-10 bg-terracotta-400" />
              Book a class
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-sage-800 text-balance sm:text-4xl">
              Your first class is on us
            </h2>
            <p className="mt-4 text-sage-700/75">
              Reserve a spot in any class below. We&rsquo;ll send a confirmation with everything you
              need to know — just bring yourself.
            </p>

            {status === 'success' ? (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-sage-100 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-sage-600" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-2xl font-semibold text-sage-800">
                    You&rsquo;re on the list, {form.name || 'friend'}!
                  </h3>
                  <p className="mt-2 text-sm text-sage-700/75">
                    A confirmation is on its way to {form.email || 'your inbox'}. We can&rsquo;t wait
                    to share the mat with you.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setForm({ name: '', email: '', classType: 'Hatha Foundations', date: '' });
                  }}
                  className="mt-2 text-sm font-medium text-terracotta-500 hover:text-terracotta-600"
                >
                  Book another class
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-sage-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-sage-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-sage-700" htmlFor="classType">
                      Class
                    </label>
                    <select
                      id="classType"
                      value={form.classType}
                      onChange={(e) => setForm({ ...form, classType: e.target.value })}
                      className={fieldClass}
                    >
                      <option>Hatha Foundations</option>
                      <option>Vinyasa Flow</option>
                      <option>Yin &amp; Restore</option>
                      <option>Power Vinyasa</option>
                      <option>Mindful Meditation</option>
                      <option>Prenatal Glow</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-sage-700" htmlFor="date">
                      Preferred date
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta-500 px-8 py-4 text-sm font-medium text-sand-50 transition-all duration-300 hover:bg-terracotta-600 hover:shadow-lg disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Reserving your spot…
                    </>
                  ) : (
                    <>
                      Reserve my free class
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
