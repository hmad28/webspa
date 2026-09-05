import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Calendar, Coffee, Wind } from 'lucide-react';

export const WellnessJourney: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height * 0.7)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Choose Your Ritual',
      description: 'Select the treatment or package that aligns with what your physical body or mind calls for.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: 'Book Your Session',
      description: 'Pick your preferred date, hour, and personalized therapist notes with instantaneous confirmation.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Arrive & Breathe',
      description: 'Leave your shoes and devices behind. Sip chilled pandan infused tea and let the sanctuary receive you.',
      icon: Coffee,
    },
    {
      step: '04',
      title: 'Unwind & Reconnect',
      description: 'Emerge profoundly grounded, radiant, and deeply aligned with your most centered self.',
      icon: Wind,
    },
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative w-full bg-[#F3EEE6] text-[#29251F] py-28 sm:py-36 px-6 sm:px-12 lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#B89558]" />
            <span className="font-sans text-xs tracking-[0.25em] text-[#676957] uppercase font-semibold">
              04 / THE SĀNTI PATHWAY
            </span>
            <div className="w-8 h-[1px] bg-[#B89558]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#15130F] leading-tight">
            Your Wellness <span className="italic text-[#B89558]">Journey</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#29251F]/70 mt-4 font-light">
            Every step is curated to slowly strip away tension until pure clarity remains.
          </p>
        </div>

        {/* 4 Steps with Connecting Horizontal Progress Bar */}
        <div className="relative">
          {/* Progress bar line across desktop */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-[#E8DFD3]">
            <div
              className="h-full bg-[#B89558] transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const IconCmp = item.icon;
              const isPast = scrollProgress >= (idx + 0.2) / 4;

              return (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#E8DFD3]/30 border border-[#E8DFD3] hover:border-[#B89558]/40 hover:bg-white/60 transition-all duration-500"
                >
                  {/* Step circle node */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-500 shadow-sm ${
                      isPast
                        ? 'bg-[#B89558] text-white scale-105 shadow-[0_4px_20px_rgba(184,149,88,0.3)]'
                        : 'bg-white text-[#B89558] border border-[#B89558]/30'
                    }`}
                  >
                    <IconCmp className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-xs text-[#B89558] tracking-widest font-bold mb-2">
                    STEP {item.step}
                  </span>

                  <h3 className="font-serif text-xl text-[#15130F] font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#29251F]/70 font-light leading-relaxed">
                    {item.description}
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
