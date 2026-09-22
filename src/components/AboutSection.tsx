import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, Sparkles, Building, Utensils } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5 text-amber-600" />
            <span>About SMV PG</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Ideal Home Away From Home in Kharadi, Pune
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            SMV Gents & Ladies PG is established to provide clean, comfortable, and budget-friendly paying guest accommodation in the heart of Kharadi, Pune. Whether you are an IT professional working at EON IT Park or WTC Pune, or a student nearby, we ensure a safe, peaceful, and well-managed living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
              Hygienic Home-Style Food
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide Breakfast, Lunch, and Dinner every single day with wholesome Veg & Non-Veg meal options. Best of all, food charges are completely included in your monthly rent with zero hidden fees.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
              Prime Kharadi IT Hub Location
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Centrally situated in Kharadi, Pune, just minutes from EON Free Zone, World Trade Center, Zensar, and Nagar Road. Enjoy easy commuting, nearby conveniences, and transport connectivity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
              Comfort & Essential Facilities
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Designed with everything essential: personal cupboards, attached bathroom with instant hot water geysers, lift facility, regular cleaning, RO purified drinking water, and Wi-Fi.
            </p>
          </div>
        </div>

        {/* Accommodation Wings Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Dedicated Provisions for Gents & Ladies
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Safe and organized accommodation environment with separate rooms and wings for male and female residents.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(PG_CONTACT.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 px-4 py-2 rounded-xl whitespace-nowrap shadow-xs transition-colors"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
};
