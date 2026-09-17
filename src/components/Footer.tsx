import React from 'react';
import { MapPin, Phone, Clock, Calendar, Star, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#location' },
  ];

  const serviceCategories = [
    'Hair Services',
    'Hair Styling',
    'Hair Treatments',
    'Manicure & Pedicure',
    'Nail Services',
    'Waxing & Body Waxing',
    'Facial & Skincare',
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#141211] text-[#FAF7F2] pt-16 sm:pt-20 pb-12 border-t border-[#C5A880]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-3xl font-light tracking-wide text-[#FAF7F2] block">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold mt-1 block">
                Beauty • Wellness • DIFC
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              {BUSINESS_INFO.positioning}
            </p>

            {/* Google Rating Snippet */}
            <div className="p-4 rounded-2xl bg-white/5 border border-[#C5A880]/25 max-w-xs space-y-1">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]" />
                ))}
                <span className="text-xs font-bold text-white ml-1">4.8 / 5</span>
              </div>
              <p className="text-[11px] text-white/60">
                Based on 934 verified Google Reviews in DIFC
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/70 hover:text-[#C5A880] transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C5A880]/50 group-hover:text-[#C5A880] group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Service Menu
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {serviceCategories.map((cat, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-[#C5A880] transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Salon Information
            </h4>
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.full}
                  <br />
                  <span className="text-white/50">(Near Financial Center Metro)</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-[#C5A880] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="text-[#C5A880] font-medium">{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold bg-[#C5A880] text-[#1C1917] hover:bg-[#D4BC94] transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book on Shedul</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved. DIFC, Dubai, UAE.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Official Booking Platform: {BUSINESS_INFO.appointmentPlatform}</span>
            <span>•</span>
            <span>Oasis Tower Sheikh Zayed Road</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
