import React from 'react';

export const HeroTransition: React.FC = () => {
  return (
    <div className="relative w-full z-20 pointer-events-none -mt-10 overflow-hidden">
      {/* Decorative smooth curved veil transitioning into Philosophy */}
      <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-transparent to-[#F3EEE6]" />
    </div>
  );
};
