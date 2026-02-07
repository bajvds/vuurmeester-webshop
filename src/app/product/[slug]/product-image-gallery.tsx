'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Truck } from 'lucide-react';

interface ProductImage {
  id: number;
  src: string;
  thumbnail?: string;
  alt: string;
}

interface ProductImageGalleryProps {
  images: ProductImage[];
  name: string;
  isOnSale: boolean;
  isHaardhout?: boolean;
}

const DELIVERY_IMAGE = {
  id: -1,
  src: '/images/levering-storten.jpg',
  alt: 'Haardhout wordt los gestort bij levering',
};

export function ProductImageGallery({ images, name, isOnSale, isHaardhout = false }: ProductImageGalleryProps) {
  const allImages = isHaardhout ? [...images, DELIVERY_IMAGE] : images;
  const deliveryIndex = isHaardhout ? allImages.length - 1 : -1;
  const [selectedIndex, setSelectedIndex] = useState(isHaardhout ? deliveryIndex : 0);
  const selected = allImages[selectedIndex];
  const isDeliveryPhoto = selected?.id === -1;

  return (
    <div className="space-y-3 lg:space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden bg-stone-100">
        {selected ? (
          <Image
            src={selected.src}
            alt={selected.alt || name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-6xl">🪵</span>
          </div>
        )}

        {isOnSale && !isDeliveryPhoto && (
          <span className="absolute left-4 top-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Aanbieding
          </span>
        )}

        {isDeliveryPhoto && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/60 text-white text-sm font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Los gestort aan huis
            </span>
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {allImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-[72px] h-[72px] flex-shrink-0 rounded-lg overflow-hidden bg-stone-100 border-2 transition-colors cursor-pointer ${
                selectedIndex === index
                  ? 'border-orange-500'
                  : 'border-transparent hover:border-orange-300'
              }`}
            >
              <Image
                src={image.id === -1 ? image.src : ((image as ProductImage).thumbnail || image.src)}
                alt={image.alt || `${name} - Afbeelding ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
              {image.id === -1 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Truck className="h-5 w-5 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
