import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Classes from '@/components/Classes';
import Schedule from '@/components/Schedule';
import Instructors from '@/components/Instructors';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Classes />
        <Schedule />
        <Instructors />
        <Pricing />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
