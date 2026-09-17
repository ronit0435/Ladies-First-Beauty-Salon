import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Train, Compass, Clock, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      aria-label="Location of Ladies First Beauty Salon in DIFC"
      className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-medium text-[#A3845B] block"
          >
            Prime DIFC Address
          </motion.span>
          <motion.h2
            id="location-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1917] tracking-tight"
          >
            Find Us in the Heart of DIFC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#645E59] leading-relaxed"
          >
            Conveniently situated along Sheikh Zayed Road at Oasis Tower, 
            just steps away from Financial Center Metro Station.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Address & Direction Card Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F4EFE6] border border-[#C5A880]/30 shadow-md space-y-6">
              {/* Business Name Badge */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#A3845B] font-semibold">
                  {BUSINESS_INFO.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917]">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Exact Address Block */}
              <div className="space-y-3 pt-2 border-t border-[#EBE4D8]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#FAF7F2] text-[#C5A880] shadow-2xs mt-1 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm sm:text-base text-[#1C1917] leading-relaxed">
                    <p className="font-medium">{BUSINESS_INFO.address.line1}</p>
                    <p className="text-[#645E59]">{BUSINESS_INFO.address.district}</p>
                    <p className="text-[#645E59]">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.country}</p>
                  </div>
                </div>

                {/* Metro Proximity Highlight */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/20">
                  <div className="w-8 h-8 rounded-full bg-[#1C1917] flex items-center justify-center text-[#C5A880] shrink-0">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#1C1917] block">
                      Near Financial Center Metro Station
                    </span>
                    <span className="text-[11px] text-[#645E59]">
                      A few walking meters from exit
                    </span>
                  </div>
                </div>

                {/* Hours & Phone quick rows */}
                <div className="space-y-2 pt-2 text-xs text-[#645E59]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C5A880]" />
                    <span className="font-medium text-[#1C1917]">{BUSINESS_INFO.openingHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C5A880]" />
                    <span>Call: {BUSINESS_INFO.phone}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#EBE4D8]">
                <a
                  id="location-get-directions-btn"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="location-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#FAF7F2] text-[#1C1917] border border-[#C5A880]/40 hover:bg-[#EBE4D8] transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Embed Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#C5A880]/30 bg-[#24201E] h-[400px] sm:h-[480px]">
              <iframe
                title="Ladies First Beauty Salon Oasis Tower DIFC Map"
                src="https://maps.google.com/maps?q=Oasis+Tower,+Sheikh+Zayed+Rd,+Trade+Centre+Second,+DIFC,+Dubai,+United+Arab+Emirates&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-90 contrast-105"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Floating Location Pill */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C5A880]/30 shadow-md flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C5A880] animate-ping" />
                <span className="text-xs font-semibold text-[#1C1917]">
                  Oasis Tower • DIFC, Dubai
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
