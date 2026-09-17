import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, MapPin, Award, Heart, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const highlights = [
    {
      title: 'Full-Service Beauty Destination',
      desc: 'All your hair, nails, skincare, and body care rituals gathered seamlessly under one roof in DIFC.',
    },
    {
      title: 'High-Quality Products',
      desc: 'Carefully curated premium beauty formulations that nurture your hair and skin with lasting radiance.',
    },
    {
      title: 'Professional Treatments',
      desc: 'Expertly delivered services that prioritize personalized care and natural beauty enhancement.',
    },
    {
      title: 'Competitive Pricing',
      desc: 'High-end Dubai salon ambience and five-star service standards paired with transparent, competitive value.',
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Ladies First Beauty Salon"
      className="py-20 lg:py-28 bg-[#FAF7F2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Split Layout: Luxury Imagery Side (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#C5A880]/30 hidden sm:block" />

              {/* Primary Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-[#24201E] border border-[#C5A880]/20">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85"
                  alt="Ladies First Beauty Salon Interior Oasis Tower DIFC"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Location Card inside image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C5A880]/30 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1C1917] flex items-center justify-center text-[#C5A880] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-[#1C1917]">
                        Oasis Tower, DIFC
                      </p>
                      <p className="text-xs text-[#645E59]">
                        Few walking meters from Financial Center Metro Station
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Aesthetic Detail Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-5 -right-3 sm:-right-6 bg-[#1C1917] text-[#FAF7F2] p-4 rounded-2xl shadow-xl border border-[#C5A880]/40 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
                    DIFC Elegance
                  </span>
                </div>
                <p className="text-xs font-serif text-[#FAF7F2] leading-snug">
                  Enhancing natural beauty &amp; personal wellbeing.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Split Layout: Editorial Content Side (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A3845B] block">
                About Ladies First
              </span>
              <h2
                id="about-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1917] tracking-tight leading-tight"
              >
                Beauty Designed Around You
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#645E59] leading-relaxed font-normal">
              Located in the heart of DIFC at <strong className="text-[#1C1917] font-semibold">Oasis Tower</strong>, 
              Ladies First Beauty Lounge offers a full range of beauty services and treatments 
              designed to enhance your natural beauty while creating a profound sense of relaxation and wellbeing.
            </p>

            <p className="text-sm sm:text-base text-[#645E59] leading-relaxed">
              Situated just a few walking meters from the <strong className="text-[#1C1917] font-medium">Financial Center Metro Station</strong> with 
              effortless access from Sheikh Zayed Road, our serene sanctuary provides an intimate escape from the city’s pulse. 
              Whether you are taking a midday pause or enjoying an evening ritual, every visit is thoughtfully tailored around your time and comfort.
            </p>

            {/* Core Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F4EFE6]/70 border border-[#C5A880]/20 hover:border-[#C5A880]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#1C1917] flex items-center justify-center text-[#C5A880] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <h3 className="text-xs font-semibold text-[#1C1917] uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#645E59] leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-all shadow-md cursor-pointer border border-[#C5A880]/30"
              >
                <span>Book on Shedul</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#EBE4D8]/80 text-[#1C1917] hover:bg-[#EBE4D8] transition-all"
              >
                <span>Explore Full Menu</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
