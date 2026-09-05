import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { PageIntro } from './components/PageIntro';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroTransition } from './components/HeroTransition';
import { Philosophy } from './components/Philosophy';
import { SignatureExperiences } from './components/SignatureExperiences';
import { TrustBenefits } from './components/TrustBenefits';
import { OurSpace } from './components/OurSpace';
import { ImmersiveBreak } from './components/ImmersiveBreak';
import { WellnessJourney } from './components/WellnessJourney';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import type { Treatment } from './data/spaData';
import { MessageCircle, Calendar } from 'lucide-react';


export function App() {
  const [introDone, setIntroDone] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [showStickyMobileBooking, setShowStickyMobileBooking] = useState(false);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      // Show sticky booking button on mobile after leaving hero section
      if (window.scrollY > window.innerHeight * 0.75) {
        setShowStickyMobileBooking(true);
      } else {
        setShowStickyMobileBooking(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenBooking = (treatment?: Treatment) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    } else {
      setSelectedTreatment(null);
    }
    setBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#15130F] text-[#F9F7F2] font-sans selection:bg-[#B89558] selection:text-white custom-cursor-active overflow-x-hidden">
      {/* Luxury 1.2s Intro Panel Reveal */}
      <PageIntro onComplete={() => setIntroDone(true)} />

      {/* Desktop Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Floating Morphing Glass Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 01. Killer Hero Section with 100svh, Word-by-word mask, Parallax & Glass Card */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          introDone={introDone}
        />

        {/* Cinematic Curtain Transition into Warm Ivory */}
        <HeroTransition />

        {/* 02. Philosophy (Warm Ivory, Asymmetrical 3-col, Clip Path Reveal) */}
        <Philosophy />

        {/* 03. Signature Experiences (Dark, Horizontal Rail Scroll, Interactive Hover) */}
        <SignatureExperiences
          onSelectTreatment={(t) => handleOpenBooking(t)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 04. Trust Benefits (Refined Line Art Icons, 4 Pillars) */}
        <TrustBenefits />

        {/* 05. Our Space (Mixed Ratios, Drag/Swipe Inertial Gallery, Hover Captions) */}
        <OurSpace />

        {/* 06. Fullscreen Immersive Visual Break ("Sometimes the most productive thing...") */}
        <ImmersiveBreak />

        {/* 07. Wellness Journey (Horizontal Progress Line, 4-Step Ceremony) */}
        <WellnessJourney />

        {/* 08. Packages & Memberships (Interactive Cards with Sibling Opacity Reduction) */}
        <Packages onOpenBooking={() => handleOpenBooking()} />

        {/* 09. Testimonials (Quotes, Guest Portraits, Smooth Carousel) */}
        <Testimonials />

        {/* 10. Final Booking CTA (Cinematic Visual, Gold Italic, Dual Actions) */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 11. Large Editorial Typography Footer */}
      <Footer />

      {/* Mobile Sticky Floating Booking Bar */}
      <div
        className={`fixed bottom-6 left-6 right-6 z-40 md:hidden transition-all duration-500 transform ${
          showStickyMobileBooking
            ? 'translate-y-0 opacity-100'
            : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 p-2 rounded-full bg-[#15130F]/90 backdrop-blur-xl border border-white/15 shadow-2xl">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 px-4 rounded-full bg-white/10 text-center text-[11px] font-mono tracking-wider text-[#E8DFD3] flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#B89558]" />
            <span>WHATSAPP</span>
          </a>

          <button
            onClick={() => handleOpenBooking()}
            className="flex-1 py-3 px-4 rounded-full bg-[#B89558] text-[#15130F] font-semibold text-center text-[11px] tracking-[0.15em] uppercase flex items-center justify-center gap-1.5 shadow-lg"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK NOW</span>
          </button>
        </div>
      </div>

      {/* Interactive Booking / Concierge Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedTreatment={selectedTreatment}
      />
    </div>
  );
}

export default App;

