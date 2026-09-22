import React from 'react';
import { MapPin, Navigation, Building2, ExternalLink, Compass } from 'lucide-react';
import { PG_CONTACT, NEARBY_LANDMARKS } from '../data/pgData';

export const LocationSection: React.FC = () => {
  const mapDirectionsUrl = PG_CONTACT.mapDirectionsUrl;

  return (
    <section id="location" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Strategic Location & Directions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Located in Kharadi, Pune
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently situated in Kharadi near Borate Basti and Rakshak Nagar with quick access to EON IT Park, WTC Pune, and Nagar Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Landmarks & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="font-heading font-extrabold text-xl text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span>Prime Hub Proximity</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Save hours on daily commute. SMV PG is ideal for tech professionals and students working at:
              </p>

              <div className="space-y-3 pt-2">
                {NEARBY_LANDMARKS.map((landmark) => (
                  <div
                    key={landmark.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-sm"
                  >
                    <div>
                      <div className="font-bold text-slate-800">{landmark.name}</div>
                      <div className="text-xs text-slate-500">{landmark.type}</div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900">
                      {landmark.distance}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-google-maps-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={`https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(
                    `Hi, please share Google Maps live location for SMV PG Kharadi (Map link: ${mapDirectionsUrl}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-600" />
                  <span>Request Live Location on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Visual Embed Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
              {/* Interactive Map Header Bar */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold">SMV Gents & Ladies PG • Kharadi</span>
                </div>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold transition-colors"
                >
                  <Navigation className="w-3 h-3 fill-slate-950" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                <iframe
                  title="SMV PG Kharadi Pune Location Map"
                  src="https://maps.google.com/maps?q=SMV+Gents+%26+Ladies+PG+Kharadi+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-extrabold text-amber-600">
                    Official Address
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">
                    {PG_CONTACT.address}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Gents & Ladies PG • Near Borate Basti & Rakshak Nagar, Kharadi, Pune
                  </div>
                </div>

                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs whitespace-nowrap transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
