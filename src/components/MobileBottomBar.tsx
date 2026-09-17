import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#C5A880]/30 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          id="mobile-bar-call-btn"
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold bg-[#F4EFE6] text-[#1C1917] border border-[#C5A880]/30 hover:bg-[#EBE4D8] active:scale-98 transition-all"
        >
          <Phone className="w-4 h-4 text-[#C5A880]" />
          <span>Call Salon</span>
        </a>

        <button
          id="mobile-bar-book-btn"
          type="button"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] active:scale-98 transition-all shadow-sm"
        >
          <Calendar className="w-4 h-4 text-[#C5A880]" />
          <span>Book on Shedul</span>
        </button>
      </div>
    </aside>
  );
};
