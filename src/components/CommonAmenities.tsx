import React from 'react';
import { COMMON_AREAS_AMENITIES } from '../data/pgData';
import {
  Wifi,
  Sparkles,
  ArrowUpDown,
  Snowflake,
  GlassWater,
  Droplets,
  Layers
} from 'lucide-react';

export const CommonAmenities: React.FC = () => {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-7 h-7 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-amber-600" />;
      case 'ArrowUpDown':
        return <ArrowUpDown className="w-7 h-7 text-amber-600" />;
      case 'Refrigerator':
        return <Snowflake className="w-7 h-7 text-amber-600" />;
      case 'GlassWater':
        return <GlassWater className="w-7 h-7 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-7 h-7 text-amber-600" />;
      default:
        return <Layers className="w-7 h-7 text-amber-600" />;
    }
  };

  return (
    <section id="amenities" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Shared Facilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Areas & Amenities
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Enjoy reliable daily facilities designed to make your stay effortless, comfortable, and hassle-free.
          </p>
        </div>

        {/* Clean Icon-Based Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMON_AREAS_AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              id={`common-amenity-${amenity.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 hover:bg-amber-50/20 transition-all duration-200 group flex items-start gap-4 shadow-2xs"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100/90 border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-amber-200/70 transition-transform">
                {getAmenityIcon(amenity.iconName)}
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-lg text-slate-900">
                  {amenity.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
