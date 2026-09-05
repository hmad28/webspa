import React from 'react';
import { ArrowUpRight } from 'lucide-react';


export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#110f0c] text-[#F9F7F2] pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Massive Typographic Watermark */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div>
              <span className="font-serif text-6xl sm:text-8xl lg:text-[120px] font-light tracking-[0.18em] text-[#F9F7F2]/90 block leading-none">
                SĀNTI
              </span>
              <span className="font-sans text-xs tracking-[0.4em] text-[#B89558] uppercase font-mono mt-4 block">
                BALI WELLNESS SANCTUARY
              </span>
            </div>

            <div className="max-w-md">
              <p className="font-serif italic text-xl text-[#E8DFD3]/80 font-light mb-4">
                "In stillness, the body remembers how to heal."
              </p>
              <p className="font-mono text-xs text-[#E8DFD3]/50">
                Jl. Bisma, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-20 border-b border-white/10">
          {/* Col 1 */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#B89558] uppercase font-semibold mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-3 font-sans text-xs text-[#E8DFD3]/80 font-light">
              <li>
                <a href="#experiences" className="hover:text-[#B89558] transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#B89558] transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#space" className="hover:text-[#B89558] transition-colors">
                  Our Space
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#B89558] transition-colors">
                  Wellness Journey
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-[#B89558] transition-colors">
                  Guest Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#B89558] uppercase font-semibold mb-6">
              ABOUT SĀNTI
            </h4>
            <ul className="space-y-3 font-sans text-xs text-[#E8DFD3]/80 font-light">
              <li>
                <a href="#philosophy" className="hover:text-[#B89558] transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B89558] transition-colors">
                  Master Therapists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B89558] transition-colors">
                  Organic Apothecary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B89558] transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#B89558] uppercase font-semibold mb-6">
              HOURS & ACCESS
            </h4>
            <ul className="space-y-3 font-sans text-xs text-[#E8DFD3]/80 font-light">
              <li className="text-[#F9F7F2]">Open Daily</li>
              <li className="text-[#B89558] font-mono">10:00 AM — 10:00 PM</li>
              <li className="pt-2">Private suites by appointment</li>
              <li>Valet & sanctuary parking</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#B89558] uppercase font-semibold mb-6">
              CONNECT
            </h4>
            <ul className="space-y-3 font-sans text-xs text-[#E8DFD3]/80 font-light">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#B89558] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@santi.sanctuary</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#B89558] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>SĀNTI Bali</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B89558] transition-colors font-mono"
                >
                  +62 812 3456 7890
                </a>
              </li>
              <li>
                <span className="text-[#E8DFD3]/50">concierge@santi-wellness.com</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#B89558] uppercase font-semibold mb-6">
              THE JOURNAL
            </h4>
            <p className="text-xs text-[#E8DFD3]/70 font-light mb-4 leading-relaxed">
              Seasonal moon rituals, herbal wisdom, and invitation-only wellness retreats.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for joining our sanctuary journal.');
              }}
              className="flex items-center border-b border-white/20 pb-2"
            >
              <input
                type="email"
                placeholder="Enter email..."
                required
                className="bg-transparent text-xs text-white placeholder:text-white/30 focus:outline-none w-full"
              />
              <button type="submit" className="text-[#B89558] hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-[#E8DFD3]/40 font-mono">
          <p>© 2026 SĀNTI WELLNESS SANCTUARY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#E8DFD3] transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-[#E8DFD3] transition-colors">
              TERMS OF RITUAL
            </a>
            <a href="#" className="hover:text-[#E8DFD3] transition-colors">
              ACCESSIBILITY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
