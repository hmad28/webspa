import React, { useState } from 'react';
import { PACKAGES } from '../data/spaData';
import { ArrowUpRight, Check } from 'lucide-react';


interface PackagesProps {
  onOpenBooking: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenBooking }) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="packages" className="relative w-full bg-[#15130F] text-[#F9F7F2] py-28 sm:py-36">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#B89558]" />
              <span className="font-sans text-xs tracking-[0.25em] text-[#B89558] uppercase font-semibold">
                05 / CURATED EXPERIENCES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F9F7F2] tracking-tight">
              PACKAGES & <br />
              <span className="italic text-[#B89558]">MEMBERSHIPS</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#E8DFD3]/70 font-light leading-relaxed">
              Wellness that integrates beautifully into your rhythm of life. Choose from complete
              sanctuary retreats to ongoing mindful care.
            </p>
          </div>
        </div>

        {/* 3 Interactive Cards with Sibling Opacity Reduction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => {
            const isHovered = hoveredCardId === pkg.id;
            const isAnyHovered = hoveredCardId !== null;
            const shouldDim = isAnyHovered && !isHovered;

            return (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCardId(pkg.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-700 flex flex-col justify-between p-8 sm:p-10 shadow-2xl ${
                  isHovered
                    ? 'border-[#B89558] scale-[1.02] shadow-[0_20px_50px_rgba(184,149,88,0.2)] bg-[#1a1713]'
                    : shouldDim
                    ? 'border-white/5 opacity-50 bg-[#15130F]'
                    : 'border-white/10 bg-[#181612]'
                }`}
              >
                {/* Background Photo Watermark */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className={`w-full h-full object-cover filter brightness-[0.25] transition-transform duration-1000 ${
                      isHovered ? 'scale-110 brightness-[0.35]' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#15130F]/90 via-[#15130F]/80 to-[#15130F]" />
                </div>

                {/* Card Top */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#B89558]/20 border border-[#B89558]/40 text-[#B89558] font-semibold">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-mono text-[#E8DFD3]/60">{pkg.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F9F7F2] font-light mb-3">
                    {pkg.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#E8DFD3]/75 font-light leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="pb-6 mb-6 border-b border-white/10">
                    <span className="font-serif text-2xl sm:text-3xl text-[#B89558] font-medium block">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[#E8DFD3]/90 font-light">
                        <div className="w-4 h-4 rounded-full bg-[#B89558]/20 text-[#B89558] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="relative z-10 pt-4">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-4 rounded-full font-sans text-xs tracking-[0.2em] font-semibold uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-[#B89558] text-[#15130F] shadow-lg'
                        : 'border border-white/20 text-[#F9F7F2] hover:border-[#B89558] hover:text-[#B89558]'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? '-rotate-45 text-[#15130F]' : 'rotate-0 text-[#B89558]'
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
