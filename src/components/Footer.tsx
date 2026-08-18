import { Flower2, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-sand-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-display text-2xl font-semibold text-sand-50">
              <Flower2 className="h-6 w-6 text-terracotta-300" strokeWidth={1.5} />
              Sahaja
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/70">
              A neighborhood yoga studio rooted in breath, movement, and the quiet joy of coming
              home to yourself.
            </p>
            <a
              href="#book"
              className="mt-6 inline-flex rounded-full bg-terracotta-500 px-6 py-3 text-sm font-medium text-sand-50 transition-colors hover:bg-terracotta-600"
            >
              Try a free class
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-100/60">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#classes" className="text-sand-100/85 transition-colors hover:text-terracotta-300">Classes</a></li>
              <li><a href="#schedule" className="text-sand-100/85 transition-colors hover:text-terracotta-300">Schedule</a></li>
              <li><a href="#teachers" className="text-sand-100/85 transition-colors hover:text-terracotta-300">Teachers</a></li>
              <li><a href="#pricing" className="text-sand-100/85 transition-colors hover:text-terracotta-300">Pricing</a></li>
              <li><a href="#stories" className="text-sand-100/85 transition-colors hover:text-terracotta-300">Stories</a></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-100/60">
              Visit the studio
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-sand-100/85">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-none text-terracotta-300" strokeWidth={1.5} />
                <span>218 Willow Lane<br />Asheville, NC 28801</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-none text-terracotta-300" strokeWidth={1.5} />
                <span>(828) 555&ndash;0142</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-none text-terracotta-300" strokeWidth={1.5} />
                <span>hello@sahajayoga.com</span>
              </li>
            </ul>
          </div>

          {/* Hours + social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-100/60">
              Studio hours
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-sand-100/85">
              <li className="flex justify-between"><span>Mon – Fri</span><span>6am – 9pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>8am – 6pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>9am – 5pm</span></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-700/60 text-sand-100 transition-colors hover:bg-terracotta-500 hover:text-sand-50"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-700/60 text-sand-100 transition-colors hover:bg-terracotta-500 hover:text-sand-50"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sage-700/50 pt-8 text-xs text-sand-100/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sahaja Yoga Studio. Made with care.</p>
          <p>Breathe in. Breathe out. Repeat.</p>
        </div>
      </div>
    </footer>
  );
}
