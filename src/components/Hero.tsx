import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronDown, MapPin, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      aria-label="Welcome to Ladies First Beauty Salon"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#181615] pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Background Ambience & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
            alt="Ladies First Beauty Salon Interior in DIFC Dubai"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-none transition-transform duration-1000"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-[#181615]/75 to-[#181615]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#181615]/40 to-[#181615]/90" />
      </div>

      {/* Floating subtle ambient luxury rings */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-24 right-10 w-96 h-96 rounded-full border border-[#C5A880]/30 blur-xs"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute bottom-12 left-6 w-80 h-80 rounded-full border border-[#C5A880]/20 blur-xs"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Location Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#FAF7F2] text-xs font-medium tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span>DIFC • Dubai</span>
              <span className="text-[#C5A880]">•</span>
              <span className="text-white/80 font-normal">Oasis Tower</span>
            </motion.div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light text-[#FAF7F2] tracking-tight leading-[1.1]"
            >
              Your Beauty.{' '}
              <span className="italic font-normal text-[#E0CEB5] block sm:inline">
                Your Moment.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#FAF7F2]/85 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A premium beauty destination in the heart of DIFC, Dubai — where
              expert treatments, quality products and relaxation come together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                id="hero-primary-book-btn"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-[#C5A880] text-[#1C1917] hover:bg-[#D4BC94] transition-all duration-300 shadow-lg shadow-[#C5A880]/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#1C1917]" />
                <span>Book an Appointment</span>
              </motion.button>

              <motion.a
                id="hero-secondary-services-btn"
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-white/10 hover:bg-white/15 text-[#FAF7F2] border border-white/20 hover:border-[#C5A880]/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Explore Our Services</span>
                <ChevronDown className="w-4 h-4 text-[#C5A880]" />
              </motion.a>
            </div>

            {/* Quick Hero Badges */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#FAF7F2]/75 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="font-semibold text-white">4.8 / 5</span>
                <span>(934 Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span>Open until 10:00 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>Next to Financial Center Metro</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Composition Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Subtle Frame Accent */}
              <div className="absolute -inset-3 rounded-2xl border border-[#C5A880]/20 transform rotate-1 hidden sm:block" />

              {/* Main Luxury Composition Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A880]/30 bg-[#24201E]">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                  alt="Ladies First Beauty Salon DIFC Dubai Experience"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Glass Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1C1917]/85 backdrop-blur-md border border-[#C5A880]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#C5A880] font-medium">
                      Official Appointment Partner
                    </p>
                    <p className="text-sm font-serif text-[#FAF7F2]">
                      Instant Scheduling on {BUSINESS_INFO.appointmentPlatform}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#C5A880] text-[#1C1917] hover:bg-[#D4BC94] transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Floating Accents */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3 sm:p-4 rounded-xl bg-[#FAF7F2] text-[#1C1917] shadow-xl border border-[#C5A880]/30 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#C5A880]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-tight">Oasis Tower, DIFC</p>
                  <p className="text-[10px] text-[#645E59]">Steps from Metro</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#trust-proof"
        aria-label="Scroll to reviews and details"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#C5A880] transition-colors flex flex-col items-center gap-1 group"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-75">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#C5A880]" />
      </a>
    </section>
  );
};
