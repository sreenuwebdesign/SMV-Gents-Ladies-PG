import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomType = 'Single Occupancy'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState(initialRoomType);
  const [visitDate, setVisitDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I would like to schedule a visit to SMV Gents & Ladies PG in Kharadi, Pune. Name: ${name || 'Prospective Resident'}, Phone: ${phone}, Room Interest: ${roomType}${visitDate ? ', Preferred Date: ' + visitDate : ''}. Please confirm timing.`;
    const url = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
            SMV PG Kharadi
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 mt-2">
            Schedule a Visit
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Come inspect the rooms, dining area, and facilities in person.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Room Choice
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden bg-white"
            >
              <option value="Single Occupancy (₹18,000 / mo)">Single Occupancy (₹18,000 / mo • Deposit ₹7,000)</option>
              <option value="Double Sharing (₹9,000 / mo)">Double Sharing (₹9,000 / mo • Deposit ₹5,000)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Preferred Visit Date
            </label>
            <input
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-500 text-slate-950 flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
              <span>Confirm & Message on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
