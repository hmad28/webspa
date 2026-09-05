import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles, Clock, ShieldCheck, Play } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  introDone: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, introDone }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // Subtle mouse parallax (max 10-15px)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Slide rotation for vertical indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-[700px] overflow-hidden flex items-center justify-center bg-[#15130F]"
    >
      {/* Cinematic Dark Exposure Media Background with Zoom and Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full will-change-transform overflow-hidden pointer-events-none"
        style={{
          transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0) scale(${
            introDone ? 1 : 1.08
          })`,
          transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2200&auto=format&fit=crop"
          alt="SĀNTI Wellness Sanctuary Ambience"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] saturate-[0.85]"
        />

        {/* Ambient moody cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15130F] via-transparent to-[#15130F]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15130F]/90 via-[#15130F]/40 to-[#15130F]/80" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-between pt-28 pb-12">
        {/* Top spacer */}
        <div />

        {/* Center Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto">
          {/* Left Column: Eyebrow + Masked Headings + CTAs */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 transition-all duration-700 delay-200 ${
                introDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#B89558]" />
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] text-[#E8DFD3] uppercase font-medium">
                A SPACE TO REST, RESTORE & RECONNECT
              </span>
            </div>

            {/* Masked Hero Title: 110–132px on Desktop */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[108px] xl:text-[124px] leading-[0.92] text-[#F9F7F2] font-light tracking-[-0.01em] mb-6 select-none">
              <span
                className={`inline-block overflow-hidden transition-all duration-700 delay-300 ${
                  introDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Rest.
              </span>{' '}
              <span
                className={`inline-block overflow-hidden transition-all duration-700 delay-450 ${
                  introDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Recover.
              </span>
              <br />
              <span
                className={`inline-block italic text-[#B89558] font-normal transition-all duration-700 delay-600 ${
                  introDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Reconnect.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`font-sans text-base sm:text-lg md:text-xl text-[#E8DFD3]/80 font-light max-w-xl leading-relaxed mb-8 sm:mb-10 transition-all duration-700 delay-750 ${
                introDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A modern sanctuary in Ubud for body, mind and soul in perfect harmony.
              Enter slowly, exhale deeply, and return to yourself.
            </p>

            {/* Call to Actions */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-900 ${
                introDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={onOpenBooking}
                className="btn-luxury px-8 py-4 rounded-full bg-[#B89558] text-[#15130F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center gap-2.5 shadow-[0_10px_30px_rgba(184,149,88,0.25)] hover:text-white transition-all cursor-pointer"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#experiences"
                className="px-6 py-4 rounded-full border border-white/20 text-[#F9F7F2] font-sans text-xs sm:text-sm tracking-[0.18em] uppercase hover:border-[#B89558] hover:text-[#B89558] transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#B89558] group-hover:scale-125 transition-transform" />
                <span>EXPLORE EXPERIENCES</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Glass Cards & Vertical Cinema Indicator */}
          <div
            className={`lg:col-span-4 flex flex-col lg:items-end gap-6 transition-all duration-1000 delay-1000 ${
              introDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Glass info card 1 */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl w-full max-w-xs shadow-2xl border border-white/10 hover:border-[#B89558]/40 transition-colors">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-[#B89558]">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
                    OPEN DAILY
                  </span>
                </div>
                <span className="text-xs text-[#F9F7F2] font-medium">10:00 — 22:00</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#E8DFD3]">
                  <ShieldCheck className="w-4 h-4 text-[#676957]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
                    PRIVATE SUITES
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-[#676957]/30 text-[#E8DFD3] border border-[#676957]/40 font-mono">
                  Available
                </span>
              </div>
            </div>

            {/* Video story teaser pill */}
            <a
              href="#space"
              className="glass-panel py-3 px-5 rounded-full flex items-center gap-3 text-xs tracking-widest uppercase text-[#F9F7F2] hover:text-[#B89558] hover:border-[#B89558]/50 transition-all group w-fit"
            >
              <div className="w-7 h-7 rounded-full bg-[#B89558]/20 border border-[#B89558] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 text-[#B89558] fill-[#B89558]" />
              </div>
              <span className="text-[11px] tracking-[0.2em]">WATCH OUR STORY</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator & Vertical Slide Dots */}
        <div className="flex items-end justify-between pt-8 border-t border-white/10">
          {/* Scroll explore */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-[#B89558] animate-bounce" />
            </div>
            <span className="text-[10px] tracking-[0.25em] text-[#E8DFD3]/60 uppercase font-mono">
              SCROLL TO SLOW DOWN
            </span>
          </div>

          {/* Right vertical/horizontal pagination */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#B89558] tracking-widest">
              0{activeSlide + 1}
            </span>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`transition-all duration-500 rounded-full ${
                    activeSlide === idx
                      ? 'w-6 h-1.5 bg-[#B89558]'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
