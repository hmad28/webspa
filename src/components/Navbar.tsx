import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'EXPERIENCES', href: '#experiences' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'PACKAGES', href: '#packages' },
    { label: 'OUR SPACE', href: '#space' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'STORIES', href: '#stories' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'pt-4 px-4 sm:px-10' : 'pt-6 sm:pt-8 px-6 sm:px-16'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? 'w-full max-w-6xl h-14 sm:h-16 px-6 sm:px-8 rounded-full bg-[#15130F]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]'
              : 'w-full max-w-[1440px] h-16 bg-transparent border-b border-white/10'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-[#F9F7F2] group cursor-pointer"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-light group-hover:text-[#B89558] transition-colors duration-300">
              SĀNTI
            </span>
            <span className="hidden sm:inline-block text-[9px] tracking-[0.25em] text-[#B89558] uppercase font-sans border-l border-[#B89558]/30 pl-2">
              Sanctuary
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-sans text-[11px] lg:text-[12px] tracking-[0.2em] text-[#F9F7F2]/80 hover:text-[#B89558] link-editorial transition-colors uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Book Appointment + Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="btn-luxury px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#B89558] text-[#F9F7F2] text-[11px] sm:text-xs tracking-[0.18em] uppercase font-semibold flex items-center gap-1.5 transition-all duration-300 hover:border-white/20 hover:text-[#15130F] shadow-sm cursor-pointer"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B89558] group-hover:text-[#15130F] transition-transform duration-300" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F9F7F2] hover:text-[#B89558] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#15130F]/95 backdrop-blur-2xl flex flex-col justify-between p-8 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-20">
          <p className="text-[10px] tracking-[0.3em] text-[#B89558] uppercase mb-8 font-mono">
            NAVIGATION
          </p>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-serif text-3xl text-[#F9F7F2] hover:text-[#B89558] transition-colors flex items-baseline justify-between border-b border-white/5 pb-3"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#B89558]/60">0{idx + 1}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex justify-between items-center text-xs text-[#E8DFD3]/60 font-mono">
            <span>UBUD, BALI</span>
            <span>10:00 — 22:00 DAILY</span>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 rounded-full bg-[#B89558] text-[#15130F] font-semibold text-xs tracking-[0.2em] uppercase text-center"
          >
            RESERVE SANCTUARY EXPERIENCE
          </button>
        </div>
      </div>
    </>
  );
};
