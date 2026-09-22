import React from 'react';
import {
  ROOMS_DATA,
  COMMON_FACILITIES_LIST,
  AMENITIES_SUMMARY,
  PG_CONTACT
} from '../data/pgData';
import { SmartImage } from './SmartImage';
import { Check, CheckCircle2, MessageCircle, Phone, Sparkles, Building2, Bath, Flame, Archive, Bed, Eye } from 'lucide-react';

interface RoomsPricingProps {
  onOpenBooking: (roomType?: string) => void;
}

export const RoomsPricing: React.FC<RoomsPricingProps> = ({ onOpenBooking }) => {
  const getRoomAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Cupboard':
        return <Archive className="w-4 h-4 text-amber-600" />;
      case 'Attached Bathroom':
        return <Bath className="w-4 h-4 text-sky-600" />;
      case 'Geyser':
        return <Flame className="w-4 h-4 text-orange-600" />;
      case 'Bedding':
        return <Bed className="w-4 h-4 text-emerald-600" />;
      default:
        return <Check className="w-4 h-4 text-amber-600" />;
    }
  };

  const createWhatsAppUrl = (roomName: string, rent: number) => {
    const text = `Hi, I am interested in ${roomName} (₹${rent.toLocaleString('en-IN')}/month) at SMV Gents & Ladies PG in Kharadi, Pune. Please share room availability, food details and other facilities.`;
    return `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rooms-pricing" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Rooms & Transparent Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Preferred Room in Kharadi
          </h2>
          <p className="mt-3 text-base text-slate-600">
            All prices include daily meals (Breakfast, Lunch & Dinner), Wi-Fi, lift access, and essential amenities with no surprise fees.
          </p>
        </div>

        {/* Room Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {ROOMS_DATA.map((room) => {
            const isSingle = room.id === 'single-occupancy';
            return (
              <div
                key={room.id}
                id={`room-card-${room.id}`}
                className={`relative rounded-3xl bg-white border ${
                  isSingle ? 'border-amber-300 shadow-xl ring-2 ring-amber-400/30' : 'border-slate-200 shadow-md'
                } overflow-hidden flex flex-col transition-all hover:shadow-xl`}
              >
                {/* Popular / Recommended Tag */}
                {isSingle && (
                  <div className="bg-amber-500 text-slate-950 text-xs font-black px-4 py-1 text-center uppercase tracking-wider">
                    Most Popular for Privacy & Focus
                  </div>
                )}

                {/* Room Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <SmartImage
                    src={room.image}
                    fallbackSrc={room.fallbackImage}
                    alt={`${room.name} at SMV PG Kharadi Pune`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {room.type}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow-xs">
                    Food Included
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
                    Actual Setup
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-heading text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
                          {room.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {room.description}
                        </p>
                      </div>
                    </div>

                    {/* Price and Deposit Block */}
                    <div className="my-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900">
                          ₹{room.monthlyRent.toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm font-semibold text-slate-600">/ Month</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-slate-600 font-medium">Security Deposit:</span>
                        <span className="font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded-md border border-amber-200">
                          ₹{room.securityDeposit.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Room Specific Amenities */}
                    <div className="mb-6">
                      <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3">
                        Room Amenities:
                      </h4>
                      <div className="grid grid-cols-2 gap-2.5">
                        {room.amenities.map((amenity) => (
                          <div
                            key={amenity}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"
                          >
                            {getRoomAmenityIcon(amenity)}
                            <span className="text-sm font-semibold text-slate-800">
                              {amenity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={createWhatsAppUrl(room.name, room.monthlyRent)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`book-whatsapp-${room.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                      <span>Enquire for {room.name}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(room.name)}
                      id={`book-form-${room.id}`}
                      className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      Schedule a Visit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Below Room Cards: Common Facilities Available */}
        <div id="common-facilities-banner" className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                Included with Every Room
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                Common Facilities Available
              </h3>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 self-start sm:self-auto">
              100% Free Access
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-6">
            {COMMON_FACILITIES_LIST.map((facility) => {
              const isFoodIncluded = facility === 'Food Charges Included in Rent';
              return (
                <div
                  key={facility}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm font-medium transition-colors ${
                    isFoodIncluded
                      ? 'bg-amber-100/80 border-amber-300 text-amber-950 font-bold sm:col-span-2'
                      : 'bg-slate-50 border-slate-200/70 text-slate-700'
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 ${
                      isFoodIncluded ? 'text-amber-700' : 'text-emerald-600'
                    }`}
                  />
                  <span className="truncate">{facility}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* AMENITIES SUMMARY: Small Cards Grid */}
        <div id="amenities-summary" className="max-w-6xl mx-auto pt-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
              Amenities Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Quick overview of all facilities ready for you at SMV PG
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {AMENITIES_SUMMARY.map((item) => (
              <div
                key={item.id}
                id={`summary-card-${item.id}`}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  item.highlight
                    ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 border-amber-500 shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-amber-300 shadow-xs'
                }`}
              >
                <div className="text-2xl sm:text-3xl mb-2">{item.emoji}</div>
                <div
                  className={`font-heading font-extrabold text-sm sm:text-base leading-snug ${
                    item.highlight ? 'text-slate-950' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className={`text-xs sm:text-sm mt-0.5 ${
                    item.highlight ? 'text-slate-900 font-semibold' : 'text-slate-500'
                  }`}
                >
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
