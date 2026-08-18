import { useEffect, useState } from 'react';
import { Flower2, Menu, X } from 'lucide-react';

const links = [
  { label: 'Classes', href: '#classes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Stories', href: '#stories' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sand-50/90 backdrop-blur-md shadow-[0_1px_0_rgba(120,92,60,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className={`flex items-center gap-2 font-display text-2xl font-semibold tracking-wide transition-colors ${
            scrolled ? 'text-sage-700' : 'text-sand-50'
          }`}
        >
          <Flower2
            className={`h-6 w-6 ${scrolled ? 'text-terracotta-500' : 'text-terracotta-300'}`}
            strokeWidth={1.5}
          />
          Sahaja
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-terracotta-400 ${
                  scrolled ? 'text-sage-700' : 'text-sand-100/90'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className={`hidden rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex ${
            scrolled
              ? 'bg-terracotta-500 text-sand-50 hover:bg-terracotta-600'
              : 'bg-sand-50/15 text-sand-50 ring-1 ring-sand-50/40 backdrop-blur-sm hover:bg-sand-50/25'
          }`}
        >
          Book a class
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-sage-700' : 'text-sand-50'}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-sand-50/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 border-t border-sand-200' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sage-700 hover:bg-sand-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-terracotta-500 px-6 py-3 text-center text-sm font-medium text-sand-50"
            >
              Book a class
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
