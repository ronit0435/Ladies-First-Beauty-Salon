import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface AppointmentCtaProps {
  onOpenBooking: () => void;
}

export const AppointmentCta: React.FC<AppointmentCtaProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="appointment-cta"
      aria-label="Book your appointment at Ladies First Beauty Salon"
      className="py-20 lg:py-28 bg-[#181615] text-[#FAF7F2] relative overflow-hidden"
    >
      {/* Background imagery with dark luxury mood */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80"
          alt="Ladies First Beauty Salon Atmosphere DIFC"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-[#181615]/80 to-[#181615]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Subtle Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#DFCAAA] text-xs font-medium tracking-[0.2em] uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Official Appointments on {BUSINESS_INFO.appointmentPlatform}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#FAF7F2]"
        >
          Make Time for You
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#FAF7F2]/80 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Ready for your next beauty appointment? Visit Ladies First Beauty Salon in DIFC and discover a complete beauty experience under one roof.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            id="cta-book-appointment-btn"
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-[#C5A880] text-[#1C1917] hover:bg-[#D4BC94] transition-all duration-300 shadow-xl shadow-[#C5A880]/20 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1C1917]" />
            <span>Book an Appointment</span>
          </button>

          <a
            id="cta-call-phone-btn"
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/20 hover:border-[#C5A880]/50 transition-all duration-300 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </motion.div>

        {/* Trust bullet markers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#FAF7F2]/70"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
            <span>Oasis Tower, DIFC</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
            <span>Financial Center Metro Station</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
            <span>Open until 10:00 PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
