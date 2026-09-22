import React from 'react';
import { MessageCircle, Phone, ArrowDown, MapPin, Sparkles, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';
import { SmartImage } from './SmartImage';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(PG_CONTACT.whatsappMessage)}`;

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-slate-50">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-12 right-0 -mr-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Gents & Ladies PG • Kharadi, Pune</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Comfortable PG Living in{' '}
              <span className="text-amber-600 underline decoration-amber-300 decoration-wavy decoration-2 underline-offset-4">
                Kharadi, Pune
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-slate-900 font-bold">SMV Gents & Ladies PG</strong>, situated conveniently in Kharadi near prime IT hubs. Enjoy peaceful accommodation with private and sharing rooms, daily hygienic meals, high-speed Wi-Fi, and essential amenities designed for your daily comfort.
            </p>

            {/* Crucial USP Highlight */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500 text-slate-950 font-bold shadow-md border border-amber-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍲</span>
                <div>
                  <div className="text-xs uppercase tracking-wider font-extrabold text-slate-900">
                    Important Feature
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold">
                    Food Charges Included in Rent!
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm bg-slate-950 text-amber-300 px-3 py-1.5 rounded-xl font-bold whitespace-nowrap">
                Breakfast, Lunch & Dinner
              </div>
            </div>

            {/* Key Quick Bullet Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Single & Double Sharing</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Attached Bath & Geyser</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Lift & Wi-Fi Facility</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-amber-400" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#rooms-pricing"
                id="hero-cta-view-rooms"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base shadow-xs hover:border-slate-400 transition-all"
              >
                <span>View Rooms & Pricing</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href={`tel:${PG_CONTACT.phoneRaw}`}
                id="hero-cta-call"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 hover:text-slate-900 font-semibold text-sm hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call {PG_CONTACT.phone}</span>
              </a>

              <a
                href={PG_CONTACT.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-directions"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 hover:text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Kharadi, Pune • Near EON Free Zone & WTC</span>
              <a
                href={PG_CONTACT.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Open Google Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <SmartImage
                src="/images/double-sharing-beds.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80"
                alt="SMV PG Kharadi Pune Comfortable Room"
                className="w-full h-80 sm:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              {/* In-image Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Starting ₹9,000 / mo
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  Gents & Ladies Wings
                </span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                    All-Inclusive Living
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Food Included
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-slate-100">
                  <div className="p-1.5 rounded-lg bg-slate-50">
                    <div className="text-[11px] text-slate-500">Occupancy</div>
                    <div className="text-xs font-bold text-slate-800">1 & 2 Sharing</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-50">
                    <div className="text-[11px] text-slate-500">Meals</div>
                    <div className="text-xs font-bold text-slate-800">Veg & Non-Veg</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-50">
                    <div className="text-[11px] text-slate-500">Deposit</div>
                    <div className="text-xs font-bold text-slate-800">From ₹5,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
