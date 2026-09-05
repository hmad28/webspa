import React, { useRef, useState } from 'react';
import { TREATMENTS } from '../data/spaData';
import type { Treatment } from '../data/spaData';
import { ArrowUpRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';


interface SignatureExperiencesProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: () => void;
}

export const SignatureExperiences: React.FC<SignatureExperiencesProps> = ({
  onSelectTreatment,
  onOpenBooking,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
    }
  };

  return (
    <section
      id="experiences"
      className="relative w-full bg-[#15130F] text-[#F9F7F2] py-28 sm:py-36 overflow-hidden"
    >
      {/* Editorial Section Top Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#B89558]" />
              <span className="font-sans text-xs tracking-[0.25em] text-[#B89558] uppercase font-semibold">
                02 / RITUALS & RESTORATION
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F9F7F2] tracking-tight">
              SIGNATURE <br />
              <span className="italic text-[#B89558]">EXPERIENCES</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#E8DFD3]/70 font-light leading-relaxed mb-6">
              Curated Balinese rituals designed to restore your inner balance, ease nervous fatigue,
              and recalibrate the sensory self.
            </p>

            {/* Desktop Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#F9F7F2] hover:border-[#B89558] hover:text-[#B89558] transition-colors cursor-pointer"
                aria-label="Previous treatment"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#F9F7F2] hover:border-[#B89558] hover:text-[#B89558] transition-colors cursor-pointer"
                aria-label="Next treatment"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenBooking}
                className="ml-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#B89558] hover:text-white transition-colors link-editorial"
              >
                VIEW ALL TREATMENTS →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Rail (Horizontal scroll container) */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-12 lg:px-16 scroll-smooth pb-8 select-none"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {TREATMENTS.map((treatment) => (
          <div
            key={treatment.id}
            data-cursor-view
            data-cursor-text="DISCOVER"
            onClick={() => onSelectTreatment(treatment)}
            className="flex-none w-[82vw] sm:w-[380px] lg:w-[440px] aspect-[3/4.2] relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#B89558]/50 transition-all duration-700 shadow-2xl"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Background Image with Hover Scale */}
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.05] group-hover:scale-108 group-hover:brightness-[0.78] transition-all duration-1000 ease-out"
            />

            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#15130F] via-[#15130F]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

            {/* Top Number & Tag */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="font-mono text-sm tracking-widest text-[#B89558] font-bold">
                {treatment.number}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[#E8DFD3]">
                {treatment.category}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center gap-3 text-xs text-[#B89558] font-mono mb-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {treatment.duration}
                </span>
                <span>•</span>
                <span className="text-[#E8DFD3] font-semibold">{treatment.price}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F9F7F2] font-light leading-snug mb-2 group-hover:text-[#F3EEE6] transition-colors">
                {treatment.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#E8DFD3]/75 line-clamp-2 mb-4 font-light leading-relaxed">
                {treatment.subtitle}
              </p>

              {/* Action Pill with Gold fill on hover */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#E8DFD3]/70 group-hover:text-white transition-colors">
                  EXPLORE RITUAL
                </span>
                <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-[#F9F7F2] group-hover:border-[#B89558] group-hover:bg-[#B89558] group-hover:text-[#15130F] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual scroll bar indicator */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mt-6">
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className="h-full bg-[#B89558] transition-all duration-150 ease-out"
            style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
};
