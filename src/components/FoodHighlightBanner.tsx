import React from 'react';
import { MessageCircle, CheckCircle2, Utensils, Sparkles } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';

export const FoodHighlightBanner: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(PG_CONTACT.whatsappMessage)}`;

  return (
    <section id="food-highlight" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-2xl border border-slate-700/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Food Related Image on one side */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
                alt="Fresh Hygienic Meals at SMV PG Kharadi Pune"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60 hidden lg:block" />
              
              <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Fresh & Hygienic
              </div>
            </div>

            {/* Information on the other side */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider self-start">
                <Utensils className="w-3.5 h-3.5" />
                <span>Special Dining Feature</span>
              </div>

              {/* Exact Requested Heading */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Meals Available
              </h2>

              {/* Exact Requested Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Breakfast, Lunch and Dinner available with Veg & Non-Veg meal options.
              </p>

              {/* Exact Requested Highlight */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-400 text-slate-950 shadow-lg border border-amber-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-slate-800">
                      Zero Hidden Costs
                    </div>
                    <div className="text-xl sm:text-2xl font-black tracking-tight">
                      Food Charges Included in Rent
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick food bullet checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Breakfast, Lunch & Dinner Daily</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Veg & Non-Veg Meal Choices</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Refrigerator Facility Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>RO Purified Drinking Water</span>
                </div>
              </div>

              {/* Exact Requested CTA */}
              <div className="pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="food-highlight-cta-whatsapp"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 active:scale-98 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-amber-400" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
