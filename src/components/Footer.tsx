import React from 'react';
import { Building2, Phone, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(PG_CONTACT.whatsappMessage)}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <Building2 className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  SMV PG
                </span>
                <span className="ml-2 bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                  Gents & Ladies
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Quality PG accommodation in Kharadi, Pune for working professionals and students. Single and double sharing rooms with daily food included in rent, attached washroom with geyser, lift, and Wi-Fi.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${PG_CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PG_CONTACT.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About SMV PG</a></li>
              <li><a href="#rooms-pricing" className="hover:text-amber-400 transition-colors">Rooms & Pricing</a></li>
              <li><a href="#amenities" className="hover:text-amber-400 transition-colors">Common Areas & Amenities</a></li>
              <li><a href="#food-kitchen" className="hover:text-amber-400 transition-colors">Food & Kitchen</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Location & Landmarks</a></li>
              <li><a href={PG_CONTACT.mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline transition-colors flex items-center gap-1 font-bold"><span>Google Maps Directions</span> &rarr;</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Enquiries</a></li>
            </ul>
          </div>

          {/* Confirmed Amenities Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Confirmed Facilities
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Single Occupancy</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Double Sharing</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Attached Bathroom</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Geyser (Hot Water)</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Cupboard & Bedding</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Reliable Wi-Fi</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Room Cleaning</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Lift Facility</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Refrigerator</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Water Cooler & RO</div>
              <div className="flex items-center gap-1.5 col-span-2 text-amber-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Food Charges Included in Rent</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SMV Gents & Ladies PG. All rights reserved. Kharadi, Pune.</p>
          <p className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Kharadi, Pune, Maharashtra 411014</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
