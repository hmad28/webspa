import React from 'react';

export const ImmersiveBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[580px] overflow-hidden flex items-center justify-center bg-black">
      {/* Semi-fixed atmospheric background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2000&auto=format&fit=crop"
          alt="Atmospheric Balinese Sanctuary Quietude"
          className="w-full h-full object-cover object-center filter brightness-[0.35] saturate-[0.8] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-[#15130F]/60" />
      </div>

      {/* Centered Oversized Editorial Quote */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-[#B89558] uppercase block mb-6">
          A MOMENT OF PAUSE
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F9F7F2] font-light leading-[1.15] tracking-tight">
          Sometimes the most <br />
          <span className="italic text-[#B89558]">productive thing</span> you can do <br />
          is slow down.
        </h2>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-[11px] tracking-[0.25em] text-[#E8DFD3]/60 uppercase font-mono">
            SĀNTI SANCTUARY • BALI
          </span>
          <div className="w-12 h-[1px] bg-white/20" />
        </div>
      </div>
    </section>
  );
};
