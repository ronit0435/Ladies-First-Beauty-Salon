import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/salonData';
import { GalleryPhoto } from '../types';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Interiors', 'Hair Styling', 'Nails', 'Beauty Treatments', 'Ambience'];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === 'All') return true;
    return photo.category === activeCategory;
  });

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section
      id="gallery"
      aria-label="Gallery of Ladies First Beauty Salon"
      className="py-20 lg:py-28 bg-[#F4EFE6]/60 border-y border-[#C5A880]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-medium text-[#A3845B] block"
          >
            Visual Sanctuary
          </motion.span>
          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1917] tracking-tight"
          >
            Step Inside Ladies First
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#645E59] leading-relaxed"
          >
            Explore our tranquil salon interiors, expert styling stations, nail care lounge, 
            and refined beauty details at Oasis Tower, DIFC.
          </motion.p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1C1917] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#645E59] hover:text-[#1C1917] hover:bg-[#EBE4D8] border border-[#C5A880]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-[#24201E] border border-[#C5A880]/25 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-80"
              >
                <img
                  src={photo.image}
                  alt={`${photo.title} - Ladies First Beauty Salon DIFC`}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Expand icon pill */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                  <Maximize2 className="w-4 h-4 text-[#C5A880]" />
                </div>

                {/* Bottom Title & Tag */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#FAF7F2] font-normal leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-white/70 line-clamp-1 group-hover:line-clamp-none transition-all">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={currentPhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
