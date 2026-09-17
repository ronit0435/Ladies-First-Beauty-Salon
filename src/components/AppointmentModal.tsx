import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Hair Services');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync if preselected changes
  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setDate('');
    setTime('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="appointment-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl border border-[#C5A880]/40 shadow-2xl overflow-hidden p-6 sm:p-8 my-8 text-[#1C1917]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#F4EFE6] text-[#645E59] hover:text-[#1C1917] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#A3845B] font-semibold">
                    Ladies First Beauty Salon • DIFC
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1C1917]">
                  Book an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#645E59] mt-1 leading-relaxed">
                  Book online via our official scheduling platform <strong>{BUSINESS_INFO.appointmentPlatform}</strong> or contact our DIFC concierge directly.
                </p>
              </div>

              {/* Primary Direct Platforms Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border border-[#C5A880]/30 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
                      Instant Booking on {BUSINESS_INFO.appointmentPlatform}
                    </span>
                    <span className="text-xs text-[#645E59]">
                      Choose your preferred specialist and time slot immediately.
                    </span>
                  </div>
                  <a
                    id="modal-shedul-link"
                    href={BUSINESS_INFO.shedulBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-colors shrink-0 shadow-sm"
                  >
                    <span>Launch {BUSINESS_INFO.appointmentPlatform}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
                  </a>
                </div>

                <div className="pt-3 border-t border-[#EBE4D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
                      Telephone Reservations
                    </span>
                    <span className="text-xs text-[#645E59]">
                      Speak with our reception desk at Oasis Tower.
                    </span>
                  </div>
                  <a
                    id="modal-phone-link"
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#FAF7F2] text-[#1C1917] border border-[#C5A880]/40 hover:bg-[#EBE4D8] transition-colors shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C5A880]" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                    Or Request a Concierge Callback
                  </h4>
                </div>

                <form onSubmit={handleSubmitInquiry} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#645E59] uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Miller"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C5A880]/30 text-xs text-[#1C1917] focus:outline-hidden focus:border-[#C5A880]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#645E59] uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C5A880]/30 text-xs text-[#1C1917] focus:outline-hidden focus:border-[#C5A880]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#645E59] uppercase tracking-wider mb-1">
                      Service Category
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C5A880]/30 text-xs text-[#1C1917] focus:outline-hidden focus:border-[#C5A880]"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#645E59] uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C5A880]/30 text-xs text-[#1C1917] focus:outline-hidden focus:border-[#C5A880]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#645E59] uppercase tracking-wider mb-1">
                        Preferred Time (Open until 10 PM)
                      </label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C5A880]/30 text-xs text-[#1C1917] focus:outline-hidden focus:border-[#C5A880]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-all shadow-sm cursor-pointer mt-2"
                  >
                    Submit Booking Request
                  </button>
                </form>
              </div>

              {/* Location and Hours Notice */}
              <div className="pt-2 border-t border-[#EBE4D8] flex items-center justify-between text-[11px] text-[#645E59]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Oasis Tower, DIFC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Open until 10:00 PM</span>
                </div>
              </div>
            </div>
          ) : (
            /* Submission Confirmation Screen */
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#F4EFE6] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#A3845B]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-[#1C1917]">
                  Thank You, {name || 'Valued Guest'}
                </h3>
                <p className="text-sm text-[#645E59] max-w-md mx-auto leading-relaxed">
                  Your appointment inquiry for <strong className="text-[#1C1917] font-medium">{service}</strong> has been received. Our DIFC team will reach out to you shortly at <strong className="text-[#1C1917]">{phone}</strong> to confirm your slot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4EFE6] text-xs text-[#645E59] max-w-sm mx-auto space-y-1">
                <p className="font-semibold text-[#1C1917]">Need instant booking right now?</p>
                <p>You can also complete your reservation immediately on Shedul:</p>
                <a
                  href={BUSINESS_INFO.shedulBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-medium text-[#1C1917] underline decoration-[#C5A880]"
                >
                  Continue to {BUSINESS_INFO.appointmentPlatform} &rarr;
                </a>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#1C1917] text-[#FAF7F2] hover:bg-[#2C2724] transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
