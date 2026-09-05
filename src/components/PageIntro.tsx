import React, { useEffect, useState } from 'react';

interface PageIntroProps {
  onComplete: () => void;
}

export const PageIntro: React.FC<PageIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast luxury counter 0 -> 100 within ~800ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 18) + 8;
        return Math.min(100, prev + jump);
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const openTimeout = setTimeout(() => {
        setIsOpening(true);
      }, 200);

      const doneTimeout = setTimeout(() => {
        setIsDone(true);
        onComplete();
      }, 1100);

      return () => {
        clearTimeout(openTimeout);
        clearTimeout(doneTimeout);
      };
    }
  }, [progress, onComplete]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none flex flex-col justify-between overflow-hidden">
      {/* Top Panel */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-[#15130F] transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] origin-top ${
          isOpening ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Bottom Panel */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#15130F] transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] origin-bottom ${
          isOpening ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Center Branding Content */}
      <div
        className={`relative z-10 m-auto flex flex-col items-center justify-center text-center px-6 transition-all duration-500 ${
          isOpening ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <p className="text-[11px] tracking-[0.35em] text-[#B89558] font-medium uppercase mb-4">
          BALI • SANCTUARY OF STILLNESS
        </p>

        <h1 className="font-serif text-5xl md:text-7xl tracking-[0.18em] text-[#F9F7F2] font-light mb-4">
          SĀNTI
        </h1>

        <p className="font-serif italic text-lg text-[#E8DFD3]/80 mb-8 font-light">
          A Space to Rest, Restore & Reconnect
        </p>

        {/* Minimal Progress indicator */}
        <div className="flex items-center gap-4">
          <div className="w-28 h-[1px] bg-white/15 overflow-hidden relative">
            <div
              className="h-full bg-[#B89558] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-sans text-xs tracking-widest text-[#B89558] font-mono w-8 text-right">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
