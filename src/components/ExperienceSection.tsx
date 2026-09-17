import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';
import { EXPERIENCE_PILLARS, BUSINESS_INFO } from '../data/salonData';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'expert-care':
        return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
      case 'quality-products':
        return <ShieldCheck className="w-6 h-6 text-[#C5A880]" />;
      case 'relaxing-experience':
        return <HeartHandshake className="w-6 h-6 text-[#C5A880]" />;
      case 'difc-convenience':
        return <MapPin className="w-6 h-6 text-[#C5A880]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  return (
    <section
      id="experience"
      aria-label="Signature Ladies First Salon Experience"
      className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden"
    >
      {/* Decorative background subtle accent circle */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#C5A880]/15 blur-2xs" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-medium text-[#A3845B] block"
          >
            The Signature Experience
          </motion.span>
          <motion.h2
            id="experience-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1917] tracking-tight"
          >
            More Than a Beauty Appointment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#645E59] leading-relaxed"
          >
            Designed for the modern woman in Dubai — blending bespoke beauty care, 
            peaceful ambience, and everyday convenience in the heart of DIFC.
          </motion.p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {EXPERIENCE_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#F4EFE6]/70 border border-[#C5A880]/25 hover:border-[#C5A880]/60 hover:bg-[#F4EFE6] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Minimal Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/30 shadow-2xs flex items-center justify-center">
                  {getIcon(pillar.id)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-normal text-[#1C1917] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#645E59] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-[#EBE4D8] flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#A3845B]">
                  Ladies First • DIFC
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Quote / Experience Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 max-w-4xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-[#F4EFE6]/90 via-[#FAF7F2] to-[#F4EFE6]/90 border border-[#C5A880]/30"
        >
          <p className="font-serif text-xl sm:text-2xl text-[#1C1917] italic leading-relaxed">
            “A full-service beauty destination in the heart of DIFC offering beauty services and treatments focused on enhancing natural beauty, relaxation and wellbeing.”
          </p>
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-colors shadow-sm"
            >
              <span>Schedule on Shedul</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-5 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#FAF7F2] text-[#1C1917] border border-[#C5A880]/40 hover:bg-[#EBE4D8] transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
