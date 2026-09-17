import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onOpenBooking: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
  onOpenBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <div
        id="gallery-lightbox-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors focus:outline-hidden"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-[#FAF7F2] border border-white/20 transition-all hover:scale-110"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6 text-[#C5A880]" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-[#FAF7F2] border border-white/20 transition-all hover:scale-110"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6 text-[#C5A880]" />
        </button>

        {/* Lightbox Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-[#181615] border border-[#C5A880]/30 shadow-2xl"
        >
          {/* Main Photo Display */}
          <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center max-h-[70vh]">
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-contain max-h-[68vh]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Caption Bar */}
          <div className="p-4 sm:p-6 bg-[#1C1917] border-t border-[#C5A880]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
                  {photo.category}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-white/70">Ladies First Beauty Salon DIFC</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F2]">
                {photo.title}
              </h3>
              <p className="text-xs text-white/75 mt-0.5 max-w-xl">
                {photo.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#C5A880] text-[#1C1917] hover:bg-[#D4BC94] transition-colors shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
