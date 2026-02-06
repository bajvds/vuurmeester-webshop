'use client';

import { useState } from 'react';
import { Star, CheckCircle2, ChevronDown, ChevronUp, User, ExternalLink } from 'lucide-react';
import { Review, getConsistentReviewsForProduct, getAverageRating } from '@/lib/reviews-data';

interface ProductReviewsProps {
  productId: number;
  productName: string;
}

// Star rating component
function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} van 5 sterren`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`${star <= rating ? 'bg-orange-500' : 'bg-stone-200'} p-0.5 rounded-sm`}
        >
          <Star
            className={`${sizeClasses[size]} ${star <= rating ? 'text-white fill-white' : 'text-stone-300'}`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

// Google Reviews banner
function GoogleReviewsBanner() {
  return (
    <a
      href="https://www.google.com/maps/place/De+Vuurmeester+Haardhout/@51.4732438,5.2516684,17z/data=!4m8!3m7!1s0x48a1fd8b37f42391:0x22e65a58f448263e!8m2!3d51.4732438!4d5.2516684!9m1!1b1!16s%2Fg%2F11w2h22nql"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-stone-200 rounded-xl p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 text-lg">4,9</span>
            <StarRating rating={5} size="sm" />
          </div>
          <p className="text-sm text-stone-500">62 Google Reviews</p>
        </div>
        <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
          <span>Bekijk op Google</span>
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </div>
      </div>
    </a>
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
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold text-sm" aria-hidden="true">
            {review.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900">{review.name}</span>
              {review.verified && (
                <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
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
          className="h-full bg-orange-500 rounded-full transition-all"
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
  const totalReviews = allReviews.length;

  // Calculate rating distribution
  const distribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: allReviews.filter(r => r.rating === stars).length
  }));

  return (
    <section className="py-12 border-t" aria-label="Klantervaringen">
      {/* Google Reviews Banner */}
      <div className="mb-8">
        <GoogleReviewsBanner />
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
        {/* Left: Overall rating */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-stone-50 rounded-xl p-6 text-center">
            <h2 className="font-bold text-stone-900 mb-4">Klantervaringen</h2>

            <div className="text-4xl font-bold text-stone-900 mb-2">
              {averageRating.toFixed(1)}
            </div>

            <StarRating rating={Math.round(averageRating)} size="lg" />

            <p className="text-sm text-stone-500 mt-2">
              Gebaseerd op <strong>{totalReviews}</strong> ervaringen
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
            <h3 className="text-2xl font-bold text-stone-900">
              Ervaringen van klanten
            </h3>
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
                  Minder ervaringen tonen
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Alle {totalReviews} ervaringen bekijken
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
            <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
            <span>Echte klanten, echte ervaringen</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-green-500" aria-hidden="true" />
            <span>62+ tevreden klanten op Google</span>
          </div>
          <a
            href="https://www.google.com/maps/place/De+Vuurmeester+Haardhout/@51.4732438,5.2516684,17z/data=!4m8!3m7!1s0x48a1fd8b37f42391:0x22e65a58f448263e!8m2!3d51.4732438!4d5.2516684!9m1!1b1!16s%2Fg%2F11w2h22nql"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <Star className="h-4 w-4 text-orange-500 fill-orange-500" aria-hidden="true" />
            <span>4,9 gemiddeld op Google</span>
          </a>
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

  return (
    <div className="flex items-center gap-2">
      <StarRating rating={Math.round(averageRating)} size="sm" />
      {showCount && (
        <span className="text-sm text-stone-500">
          (4,9 Google)
        </span>
      )}
    </div>
  );
}
