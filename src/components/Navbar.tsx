import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Opening Hours', href: '#hours' },
  ];

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#C5A880]/20 py-3.5'
          : 'bg-gradient-to-b from-[#1C1917]/50 via-[#1C1917]/20 to-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="group flex flex-col items-start focus:outline-hidden"
          >
            <span
              className={`font-serif text-2xl sm:text-3xl tracking-wide font-normal transition-colors duration-300 ${
                isScrolled ? 'text-[#1C1917]' : 'text-[#FAF7F2]'
              }`}
            >
              Ladies First
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase transition-colors duration-300 -mt-1 font-medium ${
                isScrolled ? 'text-[#8C7A65]' : 'text-[#DFCAAA]'
              }`}
            >
              Beauty Salon • DIFC
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs tracking-wider uppercase font-medium transition-colors duration-200 relative py-1 hover:text-[#C5A880] ${
                  isScrolled ? 'text-[#44403C]' : 'text-[#FAF7F2]/90'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="nav-phone-call-btn"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className={`flex items-center gap-2 text-xs tracking-wider font-medium px-3.5 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-[#1C1917] hover:text-[#C5A880] bg-[#F4EFE6]/80 hover:bg-[#EBE4D8]'
                  : 'text-[#FAF7F2] hover:text-[#DFCAAA] bg-black/20 hover:bg-black/40 border border-white/10'
              }`}
              title="Call Ladies First Beauty Salon"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="nav-book-appointment-btn"
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] hover:shadow-md cursor-pointer border border-[#C5A880]/30 hover:border-[#C5A880]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-nav-book-icon-btn"
              type="button"
              onClick={onOpenBooking}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'bg-[#1C1917] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2]/90 text-[#1C1917]'
              }`}
              aria-label="Book Appointment"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-hidden ${
                isScrolled ? 'text-[#1C1917]' : 'text-[#FAF7F2]'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FAF7F2] border-b border-[#C5A880]/20 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBE4D8]">
                <div className="flex items-center gap-2 text-xs text-[#645E59]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>DIFC, Oasis Tower</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#645E59]">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{BUSINESS_INFO.openingHours}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2.5 text-sm uppercase tracking-widest text-[#1C1917] hover:text-[#C5A880] font-medium border-b border-[#EBE4D8]/60"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold bg-[#F4EFE6] text-[#1C1917] border border-[#C5A880]/30"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold bg-[#1C1917] text-[#FAF7F2] shadow-sm hover:bg-[#2C2724]"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Book Appointment on Shedul</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
