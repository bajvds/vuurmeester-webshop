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
          {/* Placeholder - in productie zou dit een echte afbeelding zijn */}
          <div className="bg-stone-800 rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">🪵</div>
            <p className="text-white/60 text-sm mb-2">Klantfoto placeholder</p>
            <p className="text-white font-medium">{photo.alt}</p>
          </div>
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
  onClick
}: {
  photo: CustomerPhoto;
  onClick: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden bg-stone-100 hover:ring-2 hover:ring-orange-500 transition-all"
    >
      {!imageError ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
      ) : (
        // Placeholder when image doesn't exist
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100">
          <div className="text-3xl mb-1">🪵</div>
          <span className="text-xs text-stone-500">Klantfoto</span>
        </div>
      )}

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

  // Gebruik productnaam voor nauwkeurigere categorie-detectie
  const photos = getPhotosByProductName(productName, 6);

  if (photos.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
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
            <h3 className="font-semibold text-stone-900">Klantfoto's</h3>
            <p className="text-sm text-stone-500">
              Bekijk hoe anderen dit product gebruiken
            </p>
          </div>
        </div>
        <span className="text-sm text-stone-400">
          {photos.length} foto's
        </span>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            photo={photo}
            onClick={() => {
              setCurrentPhotoIndex(index);
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
          photos={photos}
          currentIndex={currentPhotoIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
