import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/pgData';
import { GalleryItem } from '../types';
import { SmartImage } from './SmartImage';
import { Image as ImageIcon, X, ZoomIn, Eye, Sparkles, Upload, CheckCircle2 } from 'lucide-react';
import { getStoredImages, onPhotosUpdated } from '../utils/imageStore';

interface GallerySectionProps {
  onOpenPhotoUploader?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenPhotoUploader }) => {
  const [filter, setFilter] = useState<'all' | 'rooms' | 'washrooms' | 'dining' | 'facilities'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [customPhotosCount, setCustomPhotosCount] = useState<number>(() => Object.keys(getStoredImages()).length);

  useEffect(() => {
    const updateCount = () => {
      setCustomPhotosCount(Object.keys(getStoredImages()).length);
    };
    const unsubscribe = onPhotosUpdated(updateCount);
    return unsubscribe;
  }, []);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Property Tour</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Photo Gallery
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real photos showcasing our bedrooms, individual storage cupboards, attached washrooms with geyser, dining facilities, lift, and building exterior in Kharadi, Pune.
          </p>

          {/* Real Photo Upload / Status Strip */}
          {onOpenPhotoUploader && (
            <div className="mt-5 inline-flex items-center gap-3 p-2 px-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
              {customPhotosCount > 0 ? (
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{customPhotosCount} Real Property Photo(s) Active</span>
                </span>
              ) : (
                <span className="text-amber-800">
                  Have the 13 WhatsApp / shared PG photos?
                </span>
              )}
              <button
                type="button"
                onClick={onOpenPhotoUploader}
                id="gallery-open-uploader-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold transition-all shadow-xs"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{customPhotosCount > 0 ? 'Manage / Replace Photos' : 'Upload Your 13 Photos'}</span>
              </button>
            </div>
          )}

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {[
              { id: 'all', label: `All Photos (${GALLERY_ITEMS.length})` },
              { id: 'rooms', label: 'Rooms & Wardrobes' },
              { id: 'washrooms', label: 'Bathrooms & Geyser' },
              { id: 'dining', label: 'Food & Dining' },
              { id: 'facilities', label: 'Lift & Building' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                id={`gallery-filter-${tab.id}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              id={`gallery-item-${item.id}`}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs hover:shadow-md transition-all"
            >
              <div className="aspect-4/3 overflow-hidden">
                <SmartImage
                  src={item.image}
                  fallbackSrc={item.fallbackImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Tag / Category Badge */}
              {item.tag && (
                <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-amber-300/30">
                  {item.tag}
                </div>
              )}

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-heading font-bold text-base leading-tight drop-shadow-xs">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <SmartImage
                  src={selectedImage.image}
                  fallbackSrc={selectedImage.fallbackImage}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  {selectedImage.tag && (
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      {selectedImage.tag}
                    </span>
                  )}
                  <h3 className="font-heading font-extrabold text-xl">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
