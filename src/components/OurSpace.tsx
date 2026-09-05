import React, { useRef, useState } from 'react';
import { GALLERY_ITEMS } from '../data/spaData';
import type { GalleryItem } from '../data/spaData';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export const OurSpace: React.FC = () => {
  const galleryRailRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const scrollBy = (offset: number) => {
    if (galleryRailRef.current) {
      galleryRailRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="space" className="relative w-full bg-[#15130F] text-[#F9F7F2] py-28 sm:py-36 overflow-hidden">
      {/* Top Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#B89558]" />
              <span className="font-sans text-xs tracking-[0.25em] text-[#B89558] uppercase font-semibold">
                03 / ARCHITECTURAL SANCTUARY
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F9F7F2]">
              OUR <span className="italic text-[#B89558]">SPACE</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#E8DFD3]/70 font-light leading-relaxed mb-6">
              A sanctuary meticulously built from volcanic basalt stone, aged Ulin timber, and
              unfiltered tropical sunlight. Every corner invites deep physiological downshift.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollBy(-450)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#F9F7F2] hover:border-[#B89558] hover:text-[#B89558] transition-colors cursor-pointer"
                aria-label="Previous gallery image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBy(450)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#F9F7F2] hover:border-[#B89558] hover:text-[#B89558] transition-colors cursor-pointer"
                aria-label="Next gallery image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-[#E8DFD3]/50 font-mono tracking-widest">
                DRAG OR SWIPE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Horizontal Gallery Rail with Mixed Ratios */}
      <div
        ref={galleryRailRef}
        className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-12 lg:px-16 pb-8 select-none"
      >
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            data-cursor-view
            data-cursor-text="EXPAND"
            onClick={() => setSelectedImage(item)}
            className={`flex-none group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#B89558]/60 transition-all duration-700 shadow-2xl ${
              item.ratio === 'tall'
                ? 'w-[75vw] sm:w-[320px] lg:w-[360px] aspect-[9/14]'
                : 'w-[85vw] sm:w-[500px] lg:w-[580px] aspect-[16/10]'
            }`}
          >
            {/* Gallery Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 ease-out filter brightness-[0.75] group-hover:brightness-[0.88]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#15130F] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

            {/* Top Tag */}
            <div className="absolute top-5 left-5 z-10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[#E8DFD3]">
                {item.tags}
              </span>
            </div>

            {/* Bottom Caption Reveal */}
            <div className="absolute bottom-5 left-5 right-5 z-10 transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F9F7F2] font-medium mb-1">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#E8DFD3]/75 font-light">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[88vh] flex flex-col items-center cursor-default"
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[72vh] w-auto rounded-xl object-contain border border-white/20 shadow-2xl mb-4"
            />
            <div className="text-center">
              <p className="font-mono text-xs tracking-widest text-[#B89558] uppercase mb-1">
                {selectedImage.tags}
              </p>
              <h3 className="font-serif text-2xl text-[#F9F7F2]">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#E8DFD3]/70 mt-1">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
