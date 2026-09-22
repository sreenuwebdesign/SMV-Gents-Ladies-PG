import React from 'react';
import { EVERYTHING_FACILITIES } from '../data/pgData';
import {
  User,
  Users,
  Bath,
  Archive,
  Bed,
  Flame,
  Wifi,
  Sparkles,
  ArrowUpDown,
  Snowflake,
  GlassWater,
  Droplets,
  Utensils,
  Coffee,
  CookingPot,
  Soup,
  Salad,
  CheckCircle2,
  Check,
  Building
} from 'lucide-react';

export const PropertyFeatures: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
        return <User className="w-5 h-5 text-amber-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-600" />;
      case 'Bath':
        return <Bath className="w-5 h-5 text-amber-600" />;
      case 'Archive':
        return <Archive className="w-5 h-5 text-amber-600" />;
      case 'Bed':
        return <Bed className="w-5 h-5 text-amber-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'ArrowUpDown':
        return <ArrowUpDown className="w-5 h-5 text-amber-600" />;
      case 'Refrigerator':
        return <Snowflake className="w-5 h-5 text-amber-600" />;
      case 'GlassWater':
        return <GlassWater className="w-5 h-5 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-amber-600" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'CookingPot':
        return <CookingPot className="w-5 h-5 text-amber-600" />;
      case 'Soup':
        return <Soup className="w-5 h-5 text-amber-600" />;
      case 'Salad':
        return <Salad className="w-5 h-5 text-amber-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-amber-600" />;
      default:
        return <Check className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="property-features" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5 text-amber-600" />
            <span>Complete Facility Checklist</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need for Comfortable Living
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A comprehensive list of verified, confirmed amenities provided at SMV Gents & Ladies PG in Kharadi, Pune.
          </p>
        </div>

        {/* Responsive Icon Grid of all 18 features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {EVERYTHING_FACILITIES.map((feat) => {
            const isHighlight = feat.isHighlight;
            return (
              <div
                key={feat.name}
                id={`property-feature-${feat.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col items-center text-center justify-between min-h-[120px] ${
                  isHighlight
                    ? 'bg-gradient-to-br from-amber-400 to-amber-500 border-amber-500 text-slate-950 font-bold shadow-md col-span-2 sm:col-span-3 lg:col-span-2'
                    : 'bg-white border-slate-200/90 hover:border-amber-300 hover:shadow-xs text-slate-800'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 ${
                    isHighlight
                      ? 'bg-white/80 shadow-xs'
                      : 'bg-amber-50 border border-amber-200/60'
                  }`}
                >
                  {getFeatureIcon(feat.icon)}
                </div>

                <div>
                  <div
                    className={`font-heading font-bold text-xs sm:text-sm leading-tight ${
                      isHighlight ? 'text-slate-950 font-extrabold text-sm sm:text-base' : 'text-slate-900'
                    }`}
                  >
                    {feat.name}
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider mt-1 block ${
                      isHighlight ? 'text-slate-800' : 'text-slate-400'
                    }`}
                  >
                    {feat.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
