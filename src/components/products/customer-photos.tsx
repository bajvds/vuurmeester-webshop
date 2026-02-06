'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { getPhotosByProductName, CustomerPhoto } from '@/lib/customer-photos';

interface CustomerPhotosProps {
  productSlug: string;
  productName: string;
}

// Lightbox voor foto's
function PhotoLightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext
}: {
  photos: CustomerPhoto[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Main image */}
      <div className="max-w-4xl max-h-[80vh] relative">
        <div className="relative w-full h-[70vh] flex items-center justify-center">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1200}
            height={900}
            className="max-w-full max-h-[70vh] object-contain rounded-xl"
          />
        </div>

        {/* Caption */}
        {(photo.caption || photo.reviewerName) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            {photo.caption && (
              <p className="text-white text-lg mb-1">"{photo.caption}"</p>
            )}
            {photo.reviewerName && (
              <p className="text-white/70 text-sm flex items-center gap-2">
                <User className="h-4 w-4" />
                {photo.reviewerName}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                // Navigate to this photo
                const diff = idx - currentIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext();
                } else {
                  for (let i = 0; i < Math.abs(diff); i++) onPrev();
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Photo thumbnail card
function PhotoCard({
  photo,
  onClick,
  onError
}: {
  photo: CustomerPhoto;
  onClick: () => void;
  onError: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) return null;

  return (
    <button
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden bg-stone-100 hover:ring-2 hover:ring-orange-500 transition-all"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        onError={() => {
          setImageError(true);
          onError();
        }}
      />

      {/* Hover overlay with caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-2 left-2 right-2">
          {photo.reviewerName && (
            <p className="text-white text-xs font-medium truncate">
              {photo.reviewerName}
            </p>
          )}
        </div>
      </div>

      {/* Camera icon */}
      <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <Camera className="h-3 w-3 text-white" />
      </div>
    </button>
  );
}

export function CustomerPhotos({ productSlug, productName }: CustomerPhotosProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [erroredIndices, setErroredIndices] = useState<Set<number>>(new Set());

  // Gebruik productnaam voor nauwkeurigere categorie-detectie
  const allPhotos = getPhotosByProductName(productName, 12);
  const visiblePhotos = allPhotos.filter((_, i) => !erroredIndices.has(i));

  if (visiblePhotos.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? visiblePhotos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) =>
      prev === visiblePhotos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-8 border-t">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Camera className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-stone-900">Klantfoto&apos;s</h3>
            <p className="text-sm text-stone-500">
              Bekijk hoe anderen dit product gebruiken
            </p>
          </div>
        </div>
        <span className="text-sm text-stone-400">
          {visiblePhotos.length} foto&apos;s
        </span>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {allPhotos.map((photo, index) => (
          <PhotoCard
            key={index}
            photo={photo}
            onError={() => setErroredIndices(prev => new Set(prev).add(index))}
            onClick={() => {
              const visibleIndex = visiblePhotos.indexOf(photo);
              setCurrentPhotoIndex(visibleIndex >= 0 ? visibleIndex : 0);
              setLightboxOpen(true);
            }}
          />
        ))}
      </div>

      {/* Call to action */}
      <p className="mt-4 text-sm text-stone-500 text-center">
        Heb je ook een mooie foto? Stuur hem naar ons via{' '}
        <a
          href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20foto%20van%20mijn%20haardhout!"
          className="text-orange-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        !
      </p>

      {/* Lightbox */}
      {lightboxOpen && (
        <PhotoLightbox
          photos={visiblePhotos}
          currentIndex={currentPhotoIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
