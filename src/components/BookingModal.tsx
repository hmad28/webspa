import React, { useState } from 'react';
import { X, User, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { TREATMENTS } from '../data/spaData';
import type { Treatment } from '../data/spaData';


interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatment?: Treatment | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedTreatment,
}) => {
  const [treatmentId, setTreatmentId] = useState<string>(
    selectedTreatment ? selectedTreatment.id : TREATMENTS[0].id
  );
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [guestsCount, setGuestsCount] = useState('1');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentTreatment =
    TREATMENTS.find((t) => t.id === treatmentId) || TREATMENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    // Prepare WhatsApp Message for seamless Balinese luxury booking
    const message = encodeURIComponent(
      `*SĀNTI SANCTUARY RESERVATION*\n\n` +
      `Guest Name: ${guestName}\n` +
      `Phone: ${guestPhone}\n` +
      `Treatment: ${currentTreatment.title} (${currentTreatment.duration})\n` +
      `Price: ${currentTreatment.price}\n` +
      `Date: ${selectedDate || 'Upcoming weekend'}\n` +
      `Preferred Time: ${selectedTime}\n` +
      `Party Size: ${guestsCount} Person(s)\n` +
      `Notes: ${specialRequests || 'Standard restorative pressure'}\n\n` +
      `Please confirm suite availability. Thank you.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#181512] border border-[#B89558]/40 shadow-2xl p-6 sm:p-10 my-auto text-[#F9F7F2]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[1px] bg-[#B89558]" />
              <span className="font-sans text-[11px] tracking-[0.25em] text-[#B89558] uppercase font-mono">
                BESPOKE APPOINTMENT
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#F9F7F2] font-light mb-2">
              Reserve Your Sanctuary Session
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#E8DFD3]/70 font-light mb-8">
              Fill in your preferences below. Our sanctuary host will confirm via WhatsApp or email
              within minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Treatment Selection */}
              <div>
                <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#B89558] mb-2">
                  SELECT RITUAL OR MASSAGE
                </label>
                <select
                  value={treatmentId}
                  onChange={(e) => setTreatmentId(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm text-[#F9F7F2] focus:outline-none focus:border-[#B89558] transition-colors"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id} className="bg-[#181512] text-white">
                      {t.title} — {t.duration} ({t.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#B89558] mb-2">
                    GUEST NAME
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sari"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-[#F9F7F2] placeholder:text-white/30 focus:outline-none focus:border-[#B89558]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#B89558] mb-2">
                    WHATSAPP / PHONE
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+62 812..."
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-[#F9F7F2] placeholder:text-white/30 focus:outline-none focus:border-[#B89558]"
                    />
                  </div>
                </div>
              </div>

              {/* Date, Time & Party Size */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#B89558] mb-2">
                    DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#F9F7F2] focus:outline-none focus:border-[#B89558]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#B89558] mb-2">
                    TIME
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#181512] border border-white/15 text-xs text-[#F9F7F2] focus:outline-none focus:border-[#B89558]"
                  >
                    <option value="10:00">10:00 AM (Morning Stillness)</option>
                    <option value="12:30">12:30 PM (Midday Rest)</option>
                    <option value="14:30">02:30 PM (Afternoon Glow)</option>
                    <option value="17:00">05:00 PM (Sunset Dusk)</option>
                    <option value="19:30">07:30 PM (Evening Twilight)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#B89558] mb-2">
                    GUESTS
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#181512] border border-white/15 text-xs text-[#F9F7F2] focus:outline-none focus:border-[#B89558]"
                  >
                    <option value="1">1 Guest (Single Suite)</option>
                    <option value="2">2 Guests (Couple Suite)</option>
                    <option value="3">3 Guests (Private Pavilion)</option>
                    <option value="4+">4+ Guests (Sanctuary Takeover)</option>
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#B89558] mb-2">
                  SPECIAL REQUESTS / FOCUS AREAS
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Focus on neck & shoulder stiffness, prefer firm pressure, allergic to eucalyptus..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-[#F9F7F2] placeholder:text-white/30 focus:outline-none focus:border-[#B89558]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#B89558] text-[#15130F] font-semibold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(184,149,88,0.3)] hover:brightness-110 transition-all cursor-pointer"
              >
                <span>CONFIRM & CONNECT TO CONCIERGE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#B89558]/20 text-[#B89558] border border-[#B89558] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#F9F7F2] font-light mb-3">
              Sanctuary Reserved
            </h3>

            <p className="font-sans text-sm text-[#E8DFD3]/80 max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <span className="text-[#B89558] font-medium">{guestName}</span>. Your request for{' '}
              <span className="text-white font-medium">{currentTreatment.title}</span> has been
              received. We are redirecting you to WhatsApp for immediate concierge assistance.
            </p>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full border border-white/30 text-xs font-mono uppercase tracking-widest hover:border-white transition-colors"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
