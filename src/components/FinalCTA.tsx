import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-32 sm:py-44 overflow-hidden bg-[#15130F]">
      {/* Cinematic Dark Image Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop"
          alt="SĀNTI Wellness Sanctuary Final Call"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15130F] via-[#15130F]/70 to-[#15130F]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#B89558] uppercase mb-6">
          RESERVATION & CONCIERGE
        </span>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#F9F7F2] leading-[1.02] tracking-tight mb-8">
          You deserve <br />
          <span className="italic text-[#B89558]">this moment.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#E8DFD3]/80 font-light max-w-xl mx-auto leading-relaxed mb-12">
          Step away from relentless momentum. Allow our master therapists and botanical baths to
          restore your calm, vitality, and inner presence.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onOpenBooking}
            className="btn-luxury px-9 py-4 rounded-full bg-[#B89558] text-[#15130F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center gap-2.5 shadow-[0_10px_35px_rgba(184,149,88,0.3)] hover:text-white transition-all cursor-pointer"
          >
            <span>BOOK APPOINTMENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/6281234567890?text=Hello%20SĀNTI%20Sanctuary,%20I%20would%20like%20to%20inquire%20about%20a%20private%20wellness%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 text-[#F9F7F2] font-sans text-xs sm:text-sm tracking-[0.18em] uppercase hover:border-[#B89558] hover:text-[#B89558] transition-all flex items-center gap-2.5 backdrop-blur-md"
          >
            <MessageCircle className="w-4 h-4 text-[#B89558]" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
