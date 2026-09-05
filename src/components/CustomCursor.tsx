import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop/pointing devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const render = () => {
      // Smooth lerp for follower circle
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Dynamic hover detection for links, buttons, and media cards
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const mediaHover = target.closest('[data-cursor-view]');
      const ctaHover = target.closest('button, a, [data-cursor-cta]');

      if (mediaHover) {
        setIsHovered(true);
        setIsCtaHovered(false);
        const customText = mediaHover.getAttribute('data-cursor-text') || 'VIEW';
        setCursorText(customText);
      } else if (ctaHover) {
        setIsHovered(false);
        setIsCtaHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setIsCtaHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Tiny precision center dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${
          isHovered ? 'opacity-0' : 'opacity-100 bg-[#B89558]'
        }`}
      />

      {/* Floating magnetic / follower circle */}
      <div
        ref={cursorFollowerRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ease-out border ${
          isHovered
            ? 'h-20 w-20 bg-[#15130F]/90 border-[#B89558] backdrop-blur-md scale-100'
            : isCtaHovered
            ? 'h-11 w-11 bg-[#B89558]/20 border-[#B89558] scale-110'
            : 'h-8 w-8 bg-transparent border-[#F9F7F2]/30 scale-100'
        }`}
      >
        {isHovered && (
          <span className="font-sans text-[10px] tracking-[0.25em] font-semibold text-[#B89558] uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
