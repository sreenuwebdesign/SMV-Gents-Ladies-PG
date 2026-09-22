import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(PG_CONTACT.whatsappMessage)}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      <div className="hidden sm:block bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 pointer-events-none transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        Enquire on WhatsApp
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Chat on WhatsApp with SMV PG"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </aside>
  );
};
