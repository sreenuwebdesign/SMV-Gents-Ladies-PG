import React, { useState, useEffect } from 'react';
import { getStoredImages, onPhotosUpdated } from '../utils/imageStore';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  slotKey?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc,
  alt,
  slotKey,
  className = '',
  ...props
}) => {
  const deriveSlot = (): string | null => {
    if (slotKey) return slotKey;
    const match = src.match(/\/images\/([^.]+)/);
    return match ? match[1] : null;
  };

  const getEffectiveSrc = (): string => {
    const key = deriveSlot();
    if (key) {
      const stored = getStoredImages();
      if (stored[key]) {
        return stored[key];
      }
    }
    return src;
  };

  const [imgSrc, setImgSrc] = useState<string>(getEffectiveSrc);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    const updateSrc = () => {
      const effective = getEffectiveSrc();
      setImgSrc(effective);
      setTriedFallback(false);
    };

    updateSrc();
    const unsubscribe = onPhotosUpdated(updateSrc);
    return unsubscribe;
  }, [src, slotKey]);

  const handleError = () => {
    if (!triedFallback && fallbackSrc && imgSrc !== fallbackSrc) {
      setTriedFallback(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
      loading="lazy"
      {...props}
    />
  );
};
