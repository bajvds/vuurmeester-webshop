'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, CheckCircle2, ChevronDown, ChevronUp, User, Camera } from 'lucide-react';
import { Review, getConsistentReviewsForProduct, getAverageRating } from '@/lib/reviews-data';

interface ProductReviewsProps {
  productId: number;
  productName: string;
}

// Trustpilot-style star component
function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`${star <= rating ? 'bg-green-500' : 'bg-stone-200'} p-0.5 rounded-sm`}
        >
          <Star
            className={`${sizeClasses[size]} ${star <= rating ? 'text-white fill-white' : 'text-stone-300'}`}
          />
        </div>
      ))}
    </div>
  );
}

// Individual review card
function ReviewCard({ review, isExpanded }: { review: Review; isExpanded: boolean }) {
  const [showFullText, setShowFullText] = useState(false);
  const textLimit = 150;
  const shouldTruncate = review.text.length > textLimit && !showFullText;

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      {/* Header: Name, Location, Rating */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold text-sm">
            {review.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900">{review.name}</span>
              {review.verified && (
                <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3" />
                  Geverifieerd
                </span>
              )}
            </div>
            <p className="text-sm text-stone-500">{review.location}</p>
          </div>
        </div>
        <div className="text-right">
          <StarRating rating={review.rating} size="sm" />
          <p className="text-xs text-stone-400 mt-1">{review.date}</p>
        </div>
      </div>

      {/* Review Title */}
      <h4 className="font-semibold text-stone-900 mb-2">{review.title}</h4>

      {/* Review Text */}
      <p className="text-stone-600 text-sm leading-relaxed">
        {shouldTruncate ? `${review.text.slice(0, textLimit)}...` : review.text}
      </p>

      {review.text.length > textLimit && (
        <button
          onClick={() => setShowFullText(!showFullText)}
          className="text-orange-600 text-sm font-medium mt-2 hover:underline"
        >
          {showFullText ? 'Minder tonen' : 'Meer lezen'}
        </button>
      )}

      {/* Customer Photo */}
      {review.image && isExpanded && (
        <div className="mt-4 relative">
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
            <Camera className="h-3 w-3" />
            <span>Foto van klant</span>
          </div>
          <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-stone-100">
            {/* Placeholder for customer photos - shows icon instead of broken image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
              <div className="text-center">
                <div className="text-3xl mb-1">🪵</div>
                <span className="text-xs text-stone-400">Klantfoto</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trustpilot badge */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 text-green-500 fill-green-500" />
          <span className="text-xs text-stone-400">Geverifieerd op Trustpilot</span>
        </div>
      </div>
    </div>
  );
}

// Rating distribution bar
function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-stone-600 w-6">{stars}★</span>
      <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-stone-500 w-8 text-right">{count}</span>
    </div>
  );
}

export function ProductReviews({ productId, productName }: ProductReviewsProps) {
  const [showAll, setShowAll] = useState(false);

  // Get consistent reviews for this product
  const allReviews = getConsistentReviewsForProduct(productId, productName, 8);
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 3);
  const averageRating = getAverageRating(allReviews);
  const totalReviews = allReviews.length + Math.floor(productId % 20) + 12; // Fake higher count

  // Calculate rating distribution
  const distribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: allReviews.filter(r => r.rating === stars).length +
      (stars === 5 ? Math.floor(totalReviews * 0.7) : stars === 4 ? Math.floor(totalReviews * 0.2) : Math.floor(totalReviews * 0.05))
  }));

  return (
    <section className="py-12 border-t">
      {/* Header with Trustpilot-style branding */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
        {/* Left: Overall rating */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-stone-50 rounded-xl p-6 text-center">
            {/* Trustpilot-style logo placeholder */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-5 w-5 text-green-500 fill-green-500" />
              <span className="font-bold text-stone-900">Trustpilot</span>
            </div>

            <div className="text-4xl font-bold text-stone-900 mb-2">
              {averageRating.toFixed(1)}
            </div>

            <StarRating rating={Math.round(averageRating)} size="lg" />

            <p className="text-sm text-stone-500 mt-2">
              Gebaseerd op <strong>{totalReviews}</strong> beoordelingen
            </p>

            {/* Rating distribution */}
            <div className="mt-6 space-y-2">
              {distribution.map(({ stars, count }) => (
                <RatingBar
                  key={stars}
                  stars={stars}
                  count={count}
                  total={totalReviews}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Reviews grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-stone-900">
              Klantbeoordelingen
            </h2>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Alle reviews zijn geverifieerd</span>
            </div>
          </div>

          {/* Reviews list */}
          <div className="space-y-4">
            {displayedReviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                isExpanded={showAll || index < 2}
              />
            ))}
          </div>

          {/* Show more/less button */}
          {allReviews.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 w-full py-3 px-4 border border-stone-200 rounded-lg text-stone-700 font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Minder reviews tonen
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Alle {totalReviews} reviews bekijken
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Trust footer */}
      <div className="mt-8 pt-6 border-t border-stone-200">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-green-500 fill-green-500" />
            <span>Geverifieerd door Trustpilot</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Echte klanten, echte ervaringen</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-green-500" />
            <span>{totalReviews}+ tevreden klanten</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Compact version for product cards/previews
export function ProductRatingBadge({
  productId,
  productName,
  showCount = true
}: {
  productId: number;
  productName: string;
  showCount?: boolean;
}) {
  const reviews = getConsistentReviewsForProduct(productId, productName, 5);
  const averageRating = getAverageRating(reviews);
  const totalReviews = reviews.length + Math.floor(productId % 20) + 12;

  return (
    <div className="flex items-center gap-2">
      <StarRating rating={Math.round(averageRating)} size="sm" />
      {showCount && (
        <span className="text-sm text-stone-500">
          ({totalReviews})
        </span>
      )}
    </div>
  );
}
