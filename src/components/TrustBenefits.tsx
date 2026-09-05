import React from 'react';
import { Award, Shield, Leaf, MessageCircleHeart } from 'lucide-react';

export const TrustBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Therapists',
      subtitle: 'Master practitioners trained extensively in Balinese bodywork & anatomy.',
    },
    {
      icon: Shield,
      title: 'Private Sanctuary',
      subtitle: 'Discrete private pavilions with en-suite soaking baths and peaceful koi pools.',
    },
    {
      icon: Leaf,
      title: 'Botanical Purity',
      subtitle: 'Wild-harvested organic oils, cold-pressed herbs, and no synthetic additives.',
    },
    {
      icon: MessageCircleHeart,
      title: 'Intuitive Reservation',
      subtitle: 'Seamless digital confirmation or direct bespoke concierge via WhatsApp.',
    },
  ];

  return (
    <section className="relative w-full bg-[#F3EEE6] text-[#29251F] py-16 sm:py-20 border-y border-[#E8DFD3]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((b) => {
            const IconCmp = b.icon;

            return (
              <div
                key={b.title}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-[#B89558]/40 bg-white/70 flex items-center justify-center text-[#B89558]">
                  <IconCmp className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#15130F] font-semibold mb-1">
                    {b.title}
                  </h3>
                  <p className="font-sans text-xs text-[#29251F]/70 leading-relaxed font-light">
                    {b.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
