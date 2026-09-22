import React from 'react';
import { FOOD_KITCHEN_FEATURES } from '../data/pgData';
import { UtensilsCrossed, Salad, Snowflake, BadgePercent, CheckCircle2, Sparkles, ChefHat } from 'lucide-react';

export const FoodKitchen: React.FC = () => {
  const getFoodIcon = (iconName: string, isProminent?: boolean) => {
    const iconClass = isProminent ? 'w-8 h-8 text-slate-950' : 'w-7 h-7 text-amber-600';
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className={iconClass} />;
      case 'Salad':
        return <Salad className={iconClass} />;
      case 'Refrigerator':
        return <Snowflake className={iconClass} />;
      case 'BadgePercent':
        return <BadgePercent className={iconClass} />;
      default:
        return <ChefHat className={iconClass} />;
    }
  };

  return (
    <section id="food-kitchen" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ChefHat className="w-3.5 h-3.5 text-amber-700" />
            <span>Daily Nourishment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Food & Kitchen
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Enjoy nutritious, delicious daily meals served fresh, with both vegetarian and non-vegetarian selections.
          </p>
        </div>

        {/* 4 Food & Kitchen Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {FOOD_KITCHEN_FEATURES.map((feature, idx) => {
            const isProminent = feature.isProminent;
            return (
              <div
                key={feature.id}
                id={`food-feature-${feature.id}`}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isProminent
                    ? 'bg-gradient-to-br from-amber-400 via-amber-400 to-amber-500 text-slate-950 border-2 border-amber-500 shadow-xl ring-4 ring-amber-400/20 sm:col-span-2 lg:col-span-1 transform lg:-translate-y-2'
                    : 'bg-white border border-slate-200/90 text-slate-900 shadow-xs hover:border-amber-300 hover:shadow-md'
                }`}
              >
                {/* Prominent Badge */}
                {isProminent && (
                  <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Key Highlight</span>
                  </div>
                )}

                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      isProminent
                        ? 'bg-white/80 shadow-xs'
                        : 'bg-amber-100/80 border border-amber-200/60'
                    }`}
                  >
                    {getFoodIcon(feature.iconName, isProminent)}
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400">0{idx + 1}.</span>
                    <h3
                      className={`font-heading font-extrabold text-xl ${
                        isProminent ? 'text-slate-950' : 'text-slate-900'
                      }`}
                    >
                      {feature.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-medium mt-1 leading-snug ${
                      isProminent ? 'text-slate-950 font-bold' : 'text-slate-600'
                    }`}
                  >
                    {feature.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/40 flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2
                    className={`w-4 h-4 ${
                      isProminent ? 'text-slate-950' : 'text-emerald-600'
                    }`}
                  />
                  <span className={isProminent ? 'text-slate-950 font-bold' : 'text-slate-500'}>
                    Confirmed Facility
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
