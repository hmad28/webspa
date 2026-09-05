import React, { useState, useEffect } from 'react';

import { TESTIMONIALS } from '../data/spaData';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="stories"
      className="relative w-full bg-[#F3EEE6] text-[#29251F] py-28 sm:py-36 px-6 sm:px-12 lg:px-16 overflow-hidden border-t border-[#E8DFD3]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#B89558]" />
              <span className="font-sans text-xs tracking-[0.25em] text-[#676957] uppercase font-semibold">
                06 / GUEST PERSPECTIVES
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#15130F] leading-[1.08]">
              Words From <br />
              <span className="italic text-[#B89558]">Our Guests</span>
            </h2>

            <p className="font-sans text-sm text-[#29251F]/70 mt-6 font-light leading-relaxed max-w-sm">
              Reflections on deep rest, nervous recovery, and sensory stillness from mindful
              travelers worldwide.
            </p>

            {/* Pagination controls */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                }
                className="w-11 h-11 rounded-full border border-[#29251F]/20 flex items-center justify-center hover:border-[#B89558] hover:text-[#B89558] transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="w-11 h-11 rounded-full border border-[#29251F]/20 flex items-center justify-center hover:border-[#B89558] hover:text-[#B89558] transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <span className="font-mono text-xs text-[#B89558] tracking-widest ml-4">
                0{activeIndex + 1} / 0{TESTIMONIALS.length}
              </span>
            </div>
          </div>

          {/* Right Review Card */}
          <div className="lg:col-span-8">
            <div className="relative p-8 sm:p-14 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl transition-all duration-700">
              {/* Large quote watermark */}
              <Quote className="w-16 h-16 text-[#B89558]/20 absolute top-8 right-8 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#B89558] mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B89558]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#15130F] font-light leading-snug tracking-tight mb-8">
                "{current.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8DFD3]">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#B89558]/40"
                />
                <div>
                  <h4 className="font-serif text-lg text-[#15130F] font-medium leading-tight">
                    {current.author}
                  </h4>
                  <p className="font-sans text-xs text-[#676957] font-mono mt-0.5">
                    {current.role} • {current.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
