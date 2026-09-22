// Client-side image registry and persistence for real PG property photos
export interface StoredImageMap {
  [key: string]: string; // key -> base64 data URL or relative URL
}

const STORAGE_KEY = 'smv_pg_shared_photos_v1';

// Custom event to notify components when photos are updated
const UPDATE_EVENT = 'smv_photos_updated';

export const getImageSlotFromFilename = (filename: string): string | null => {
  const name = filename.toLowerCase();
  if (name.includes('bdb55f24') || name.includes('building')) return 'building-exterior';
  if (name.includes('24e10d71') || name.includes('entrance') || name.includes('gate')) return 'entrance-gate';
  if (name.includes('9.44.33 pm (2)') || name.includes('double') || name.includes('beds')) return 'double-sharing-beds';
  if (name.includes('9.44.34 pm.') || name.includes('cupboard') || name.includes('wardrobe')) return 'cupboards-wardrobes';
  if (name.includes('9.44.33 pm (1)') || name.includes('bathroom') || name.includes('geyser')) return 'bathroom-geyser';
  if (name.includes('10.09.05 am') || name.includes('dining')) return 'dining-hall';
  if (name.includes('9.44.31 pm') || name.includes('lift') || name.includes('elevator')) return 'lift-elevator';
  if (name.includes('9.44.32 pm.') || name.includes('foyer') || name.includes('chandelier')) return 'lift-foyer';
  if (name.includes('9.44.33 pm.') || name.includes('ro') || name.includes('wifi')) return 'ro-water-wifi';
  if (name.includes('9.44.34 pm (1)') || name.includes('room-overview') || name.includes('single')) return 'room-overview';
  if (name.includes('9.44.32 pm (1)')) return 'corridor-view';
  if (name.includes('9.44.34 pm (2)')) return 'bedroom-corner';
  if (name.includes('10.09.01 am')) return 'kitchen-facility';
  return null;
};

export const getStoredImages = (): StoredImageMap => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
};

export const saveStoredImages = (images: StoredImageMap) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    window.dispatchEvent(new Event(UPDATE_EVENT));
  } catch (e) {
    console.warn('Could not persist photos to localStorage:', e);
  }
};

export const saveSingleImage = (slotKey: string, dataUrl: string) => {
  const current = getStoredImages();
  current[slotKey] = dataUrl;
  saveStoredImages(current);
};

export const clearStoredImages = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(UPDATE_EVENT));
};

export const onPhotosUpdated = (callback: () => void): (() => void) => {
  window.addEventListener(UPDATE_EVENT, callback);
  return () => window.removeEventListener(UPDATE_EVENT, callback);
};
