import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const TrustProof: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const [ratingVal, setRatingVal] = useState(0);
  const [reviewsVal, setReviewsVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Animate Rating from 0 to 4.8
    const targetRating = 4.8;
    const duration = 1600;
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setRatingVal(Number((targetRating * ease).toFixed(1)));
      setReviewsVal(Math.floor(934 * ease));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setRatingVal(4.8);
        setReviewsVal(934);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isInView]);

  return (
    <section
      id="trust-proof"
      ref={containerRef}
      className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl bg-[#FAF7F2] border border-[#C5A880]/30 shadow-xl shadow-stone-900/5 p-6 sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Google Rating Stats */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left border-b md:border-b-0 md:border-r border-[#EBE4D8] pb-6 md:pb-0 md:pr-8">
            {/* Google G Emblem & Star Block */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F4EFE6] border border-[#C5A880]/20 min-w-[120px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                {/* Clean Google 'G' icon styling */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#645E59]">Google</span>
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
                {ratingVal.toFixed(1)}
              </span>
              <span className="text-[11px] text-[#645E59] font-medium mt-0.5">out of 5.0</span>
            </div>

            {/* Stars & Reviews description */}
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#EAB308] fill-[#EAB308]"
                  />
                ))}
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#1C1917]">
                  {reviewsVal.toLocaleString()} Google Reviews
                </p>
                <p className="text-sm font-serif italic text-[#8C7A65] mt-1">
                  “Trusted by clients in the heart of DIFC.”
                </p>
              </div>
            </div>
          </div>

          {/* Value Highlights */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F4EFE6]/60 border border-[#C5A880]/15">
              <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#C5A880] shadow-2xs mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#1C1917] uppercase tracking-wider">
                  DIFC Oasis Tower
                </h4>
                <p className="text-xs text-[#645E59] mt-0.5 leading-relaxed">
                  Few walking meters from Financial Center Metro Station.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F4EFE6]/60 border border-[#C5A880]/15">
              <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#C5A880] shadow-2xs mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#1C1917] uppercase tracking-wider">
                  Evening Hours
                </h4>
                <p className="text-xs text-[#645E59] mt-0.5 leading-relaxed">
                  Open until 10:00 PM to suit your busy executive lifestyle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F4EFE6]/60 border border-[#C5A880]/15 sm:col-span-2">
              <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#C5A880] shadow-2xs mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-[#1C1917] uppercase tracking-wider">
                  Verified DIFC Beauty Destination
                </h4>
                <p className="text-xs text-[#645E59] mt-0.5 leading-relaxed">
                  A full-service beauty lounge focused on enhancing natural beauty, relaxation, and wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
