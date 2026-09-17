import React from 'react';
import { motion } from 'motion/react';
import { Clock, Phone, Calendar, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface OpeningHoursSectionProps {
  onOpenBooking: () => void;
}

export const OpeningHoursSection: React.FC<OpeningHoursSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hours"
      aria-label="Opening Hours and Visit Information"
      className="py-16 sm:py-20 bg-[#F4EFE6]/70 border-t border-[#C5A880]/20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#FAF7F2] border border-[#C5A880]/30 shadow-xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#C5A880]/15 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-radial from-[#C5A880]/15 to-transparent rounded-tr-full pointer-events-none" />

          {/* Heading */}
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A3845B] block mb-2">
            Schedule &amp; Availability
          </span>
          <h2
            id="hours-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1917] tracking-tight"
          >
            Visit Us
          </h2>

          {/* Prominent Hours Display */}
          <div className="my-8 inline-flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] border border-[#C5A880]/30 shadow-xs max-w-md w-full">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1917] text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Evening Concierge Available</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#C5A880]" />
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider text-[#645E59] block font-medium">
                  Salon Operating Hours
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                  {BUSINESS_INFO.openingHours}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#645E59] mt-3 max-w-xs">
              Flexible evening appointments accommodated to match your schedule at Oasis Tower, DIFC.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="hours-book-appointment-btn"
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-all shadow-md cursor-pointer border border-[#C5A880]/30"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Book an Appointment</span>
            </button>

            <a
              id="hours-call-phone-btn"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#FAF7F2] text-[#1C1917] border border-[#C5A880]/50 hover:bg-[#EBE4D8] transition-all"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Location footnote */}
          <div className="pt-6 mt-6 border-t border-[#EBE4D8] flex items-center justify-center gap-2 text-xs text-[#645E59]">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Oasis Tower, Sheikh Zayed Rd, DIFC • Walking distance to Financial Center Metro</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
