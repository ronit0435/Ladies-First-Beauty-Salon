import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scissors,
  Sparkles,
  Droplets,
  Gem,
  Sparkle,
  Feather,
  ShieldCheck,
  Flower2,
  Sun,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  X
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/salonData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onSelectServiceForBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'nails' | 'waxing' | 'treatments'>('all');
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'nails', label: 'Nails & Care' },
    { id: 'waxing', label: 'Waxing & Body' },
    { id: 'treatments', label: 'Beauty & Skincare' },
  ] as const;

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeTab === 'all') return true;
    return service.categoryGroup === activeTab;
  });

  const getIcon = (iconName: string) => {
    const iconClasses = 'w-5 h-5 text-[#C5A880]';
    switch (iconName) {
      case 'Scissors':
        return <Scissors className={iconClasses} />;
      case 'Sparkles':
        return <Sparkles className={iconClasses} />;
      case 'Droplets':
        return <Droplets className={iconClasses} />;
      case 'Gem':
        return <Gem className={iconClasses} />;
      case 'Sparkle':
        return <Sparkle className={iconClasses} />;
      case 'Feather':
        return <Feather className={iconClasses} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClasses} />;
      case 'Flower2':
        return <Flower2 className={iconClasses} />;
      case 'Sun':
        return <Sun className={iconClasses} />;
      default:
        return <CheckCircle2 className={iconClasses} />;
    }
  };

  const handleServiceClick = (service: ServiceCategory) => {
    setSelectedService(service);
  };

  const handleBookFromModal = () => {
    if (selectedService && onSelectServiceForBooking) {
      onSelectServiceForBooking(selectedService.title);
    }
    setSelectedService(null);
    onOpenBooking();
  };

  return (
    <section
      id="services"
      aria-label="Services offered at Ladies First Beauty Salon"
      className="py-20 lg:py-28 bg-[#F4EFE6]/60 border-y border-[#C5A880]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-medium text-[#A3845B] block"
          >
            Our Service Menu
          </motion.span>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1917] tracking-tight"
          >
            Beauty, From Head to Toe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#645E59] leading-relaxed"
          >
            A full-service beauty destination in DIFC offering professional beauty services and treatments 
            focused on enhancing natural beauty, relaxation, and wellbeing.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1C1917] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#645E59] hover:text-[#1C1917] hover:bg-[#EBE4D8] border border-[#C5A880]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/25 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Thumbnail with subtle zoom */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#24201E]">
                  <img
                    src={service.image}
                    alt={`${service.title} at Ladies First Beauty Salon DIFC`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/20 to-transparent" />

                  {/* Top Minimal Line Icon Pill */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-md border border-[#C5A880]/30 shadow-xs">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Gold Accent Line */}
                    <div className="w-8 h-0.5 bg-[#C5A880] mb-3 group-hover:w-12 transition-all duration-300" />
                    
                    <h3 className="font-serif text-2xl font-normal text-[#1C1917] tracking-tight group-hover:text-[#A3845B] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#645E59] mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#645E59] border border-[#C5A880]/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 border-t border-[#EBE4D8] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleServiceClick(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] group-hover:text-[#A3845B] transition-colors"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectServiceForBooking) onSelectServiceForBooking(service.title);
                        onOpenBooking();
                      }}
                      className="text-[11px] font-semibold text-[#8C7A65] hover:text-[#1C1917] underline underline-offset-4 decoration-[#C5A880]/50"
                    >
                      Book on Shedul
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Booking Notice */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl text-[#1C1917]">
              Looking for a tailored beauty experience?
            </h4>
            <p className="text-xs sm:text-sm text-[#645E59]">
              Appointments are available on Shedul or direct phone reservation at Oasis Tower, DIFC.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-5 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#F4EFE6] text-[#1C1917] border border-[#C5A880]/30 hover:bg-[#EBE4D8] transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-colors shadow-sm"
            >
              Book via Shedul
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-[#C5A880]/40 shadow-2xl overflow-hidden p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F4EFE6] text-[#645E59] hover:text-[#1C1917] transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#F4EFE6] border border-[#C5A880]/30">
                    {getIcon(selectedService.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#A3845B] font-semibold">
                      Ladies First Beauty Salon
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917]">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-44 bg-[#24201E]">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <p className="text-sm text-[#645E59] leading-relaxed">
                  {selectedService.detailedDesc}
                </p>

                <div className="p-4 rounded-xl bg-[#F4EFE6]/80 border border-[#C5A880]/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#1C1917] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Oasis Tower, DIFC • Next to Financial Center Metro</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1C1917] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Open until 10:00 PM</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleBookFromModal}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-[#C5A880]" />
                    <span>Book on Shedul</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#FAF7F2] text-[#1C1917] border border-[#C5A880]/50 hover:bg-[#EBE4D8] transition-colors text-center"
                  >
                    <span>Call +971 55 150 4004</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
