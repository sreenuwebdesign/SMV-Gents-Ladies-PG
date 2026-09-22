import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Upload,
  CheckCircle2,
  Trash2,
  Image as ImageIcon,
  FolderOpen,
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';
import {
  getStoredImages,
  saveStoredImages,
  clearStoredImages,
  getImageSlotFromFilename,
  StoredImageMap
} from '../utils/imageStore';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHOTO_SLOTS = [
  { key: 'double-sharing-beds', label: '1. Double Sharing Beds', desc: 'Twin beds with leatherette headboard & nightstand' },
  { key: 'cupboards-wardrobes', label: '2. Personal Cupboards', desc: 'Marble-finish wardrobes with mirrors & locks' },
  { key: 'room-overview', label: '3. Bedroom Overview', desc: 'Vitrified floor, windows with curtains & ventilation' },
  { key: 'bathroom-geyser', label: '4. Attached Bathroom & Geyser', desc: 'Tiles, Faber instant water geyser & shower' },
  { key: 'dining-hall', label: '5. Dining Area & Food Hall', desc: 'Granite dining table & false ceiling lighting' },
  { key: 'lift-elevator', label: '6. Stainless Steel Lift', desc: 'Elevator entrance & marble surround' },
  { key: 'lift-foyer', label: '7. Entrance Foyer & Chandelier', desc: 'Chandelier lighting & lift foyer' },
  { key: 'ro-water-wifi', label: '8. RO Water & Wi-Fi', desc: 'Aqua RO water station & Wi-Fi setup' },
  { key: 'building-exterior', label: '9. Building Exterior', desc: '5-floor residential building facade' },
  { key: 'entrance-gate', label: '10. Main Security Entrance Gate', desc: 'Ornamental steel gate & parking ramp' },
  { key: 'corridor-view', label: '11. Floor Corridor / Foyer 2', desc: 'Common residential floor corridor' },
  { key: 'bedroom-corner', label: '12. Bedroom Angle 2', desc: 'Bed corner view with storage' },
  { key: 'kitchen-facility', label: '13. Meal Serving / Kitchen Area', desc: 'Hygienic kitchen / dining setup' },
];

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({ isOpen, onClose }) => {
  const [storedMap, setStoredMap] = useState<StoredImageMap>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const singleSlotInputRef = useRef<HTMLInputElement>(null);
  const [activeSlotTarget, setActiveSlotTarget] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStoredMap(getStoredImages());
      setUploadSuccessMsg(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMultipleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setIsProcessing(true);
    const newMap: StoredImageMap = { ...getStoredImages() };
    let processedCount = 0;
    const fileArray = Array.from(files);

    fileArray.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        // Try matching by filename
        let slotKey = getImageSlotFromFilename(file.name);
        // If no match found by filename, assign to unfilled slot or by index
        if (!slotKey) {
          const unfilled = PHOTO_SLOTS.find((s) => !newMap[s.key]);
          slotKey = unfilled ? unfilled.key : PHOTO_SLOTS[index % PHOTO_SLOTS.length].key;
        }

        if (slotKey && dataUrl) {
          newMap[slotKey] = dataUrl;
        }

        processedCount++;
        if (processedCount === fileArray.length) {
          saveStoredImages(newMap);
          setStoredMap({ ...newMap });
          setIsProcessing(false);
          setUploadSuccessMsg(`Successfully uploaded ${processedCount} property photo(s)! Website is now using your real photos.`);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSingleSlotUpload = (file: File) => {
    if (!activeSlotTarget) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        const updated = { ...storedMap, [activeSlotTarget]: dataUrl };
        saveStoredImages(updated);
        setStoredMap(updated);
        setUploadSuccessMsg(`Updated photo for "${activeSlotTarget}"!`);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (slotKey: string) => {
    const updated = { ...storedMap };
    delete updated[slotKey];
    saveStoredImages(updated);
    setStoredMap(updated);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to reset all photos to the default view?')) {
      clearStoredImages();
      setStoredMap({});
      setUploadSuccessMsg('Reset all photos to default.');
    }
  };

  const totalLoaded = Object.keys(storedMap).length;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <ImageIcon className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  Real Property Photos Manager
                </h3>
                <span className="text-[11px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                  {totalLoaded} of 13 Loaded
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Drop your 13 shared photos here to replace all stock/AI placeholders with real PG photos.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close photo uploader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* Quick Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong className="font-bold">One-Click Multi-Upload:</strong> You can select or drag and drop all 13 photos (WhatsApp images / jfif files) simultaneously below. They are saved directly into your browser storage and instantly applied across the Hero, Rooms, and Photo Gallery!
            </div>
          </div>

          {uploadSuccessMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{uploadSuccessMsg}</span>
            </div>
          )}

          {/* Drag & Drop Hero Box */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleMultipleFiles(e.dataTransfer.files);
            }}
            className="border-2 border-dashed border-amber-400 hover:border-amber-500 bg-amber-50/50 hover:bg-amber-50 rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all group"
          >
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleMultipleFiles(e.target.files)}
            />
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6 text-amber-700" />
            </div>
            <div className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
              Click to Select or Drag & Drop All 13 Photos
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Supports JPEG, JPG, PNG, and JFIF files from your device or WhatsApp
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Auto-Matches WhatsApp & Property Filenames</span>
            </div>
          </div>

          {/* Hidden single file input for slot click */}
          <input
            type="file"
            ref={singleSlotInputRef}
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleSingleSlotUpload(e.target.files[0]);
              }
            }}
          />

          {/* Photo Slots Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">
                Photo Slots & Assignments ({totalLoaded} / {PHOTO_SLOTS.length} Active)
              </h4>
              {totalLoaded > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {PHOTO_SLOTS.map((slot) => {
                const photoSrc = storedMap[slot.key];
                return (
                  <div
                    key={slot.key}
                    className={`p-3 rounded-2xl border transition-all flex flex-col justify-between ${
                      photoSrc
                        ? 'border-emerald-300 bg-emerald-50/40'
                        : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-xs text-slate-900 line-clamp-1">
                          {slot.label}
                        </span>
                        {photoSrc ? (
                          <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                            Loaded
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Empty</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mb-2">
                        {slot.desc}
                      </p>

                      {photoSrc ? (
                        <div className="relative h-28 rounded-xl overflow-hidden border border-emerald-200 mb-2">
                          <img
                            src={photoSrc}
                            alt={slot.label}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemovePhoto(slot.key)}
                            className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/70 text-white hover:bg-rose-600 transition-colors"
                            title="Remove photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setActiveSlotTarget(slot.key);
                            singleSlotInputRef.current?.click();
                          }}
                          className="h-28 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:text-slate-600 hover:border-amber-400 cursor-pointer bg-white mb-2 transition-colors"
                        >
                          <Upload className="w-5 h-5 mb-1" />
                          <span className="text-[11px] font-semibold">Upload Photo</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveSlotTarget(slot.key);
                        singleSlotInputRef.current?.click();
                      }}
                      className="w-full py-1.5 text-[11px] font-bold rounded-lg border border-slate-300 hover:border-amber-400 hover:bg-white text-slate-700 transition-colors"
                    >
                      {photoSrc ? 'Replace Photo' : 'Choose File'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-600">
            {totalLoaded > 0 ? (
              <span className="font-semibold text-emerald-700">
                ✓ {totalLoaded} Real photo(s) currently active on the site
              </span>
            ) : (
              <span>No custom photos uploaded yet. Using fallback previews.</span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 font-bold text-xs sm:text-sm text-slate-950 shadow-sm"
          >
            Done & View Website
          </button>
        </div>
      </div>
    </div>
  );
};
