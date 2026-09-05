import React, { useEffect, useRef } from 'react';
import { ArrowRight, Compass, Heart, Sparkles, Feather } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll observer for smooth clip path reveal
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate progress within section 0 -> 1
        const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height * 0.5)));
        const insetY = Math.max(0, 10 - progress * 10);
        const insetX = Math.max(0, 20 - progress * 20);
        imageRef.current.style.clipPath = `inset(${insetY}% ${insetX}% round 16px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Compass,
      title: 'Mindful Presence',
      description: 'We slow the pace of life so every sensory perception returns to vibrant clarity.',
    },
    {
      icon: Heart,
      title: 'Holistic Wisdom',
      description: 'Ancient Balinese botanical secrets synchronized with contemporary anatomical science.',
    },
    {
      icon: Feather,
      title: 'Personalized Touch',
      description: 'Every therapy is calibrated to your current physical tensions and nervous state.',
    },
    {
      icon: Sparkles,
      title: 'Deep Renewal',
      description: 'You do not simply relax—you emerge restored, grounded, and profoundly renewed.',
    },
  ];

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full bg-[#F3EEE6] text-[#29251F] py-24 sm:py-36 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      {/* Subtle organic botanical watermarks */}
      <div className="absolute top-12 right-12 w-96 h-96 rounded-full bg-[#E8DFD3]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#B89558]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <div className="w-8 h-[1px] bg-[#B89558]" />
          <span className="font-sans text-xs tracking-[0.25em] text-[#676957] uppercase font-semibold">
            01 / SANCTUARY PHILOSOPHY
          </span>
        </div>

        {/* Asymmetrical 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading + Story + CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pr-0 lg:pr-6">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#15130F] leading-[1.08] tracking-[-0.01em] font-light mb-8">
                Wellness is <br />
                <span className="italic font-normal text-[#B89558]">a way of living.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#29251F]/80 leading-relaxed font-light mb-6">
                At SĀNTI, we believe true luxury begins the moment you give yourself permission to
                pause. In a world defined by constant speed, stillness is the most sacred rebellion.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#29251F]/70 leading-relaxed font-light">
                Our space was conceived as an architectural breath in Ubud—where raw stone, warm
                timber, and the quiet resonance of flowing water invite your nervous system to fully
                unwind.
              </p>
            </div>

            <a
              href="#experiences"
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#15130F] uppercase group w-fit link-editorial"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="w-4 h-4 text-[#B89558] group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          {/* Center Column: Large Architectural Wellness Image with Clip Reveal */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={imageRef}
              data-cursor-view
              data-cursor-text="EXPLORE"
              className="relative w-full aspect-[4/5] max-h-[620px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer group"
              style={{ clipPath: 'inset(4% 8% round 16px)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                alt="SĀNTI Botanical Architecture & Water Sanctuary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15130F]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Floating caption pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 flex justify-between items-center shadow-lg">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-[#676957] font-mono uppercase">
                    ARCHITECTURE • WATER
                  </p>
                  <p className="font-serif text-sm text-[#15130F] font-medium">
                    The Central Stone Pavilion
                  </p>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#B89558]" />
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Value List */}
          <div className="lg:col-span-3 flex flex-col space-y-8 pl-0 lg:pl-4">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  className="group p-5 rounded-2xl bg-[#E8DFD3]/40 border border-[#E8DFD3] hover:border-[#B89558]/50 hover:bg-[#E8DFD3]/80 transition-all duration-500 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#B89558] shadow-xs group-hover:bg-[#B89558] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-[#B89558]">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#15130F] font-medium mb-1">
                    {val.title}
                  </h3>
                  <p className="font-sans text-xs text-[#29251F]/70 leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
