import React, { useState } from 'react';
import { Star, Quote, BadgeCheck, MapPin, Users, Heart, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { reviewsData, reviewsStats } from '../data/reviews-data';

const INITIAL_COUNT = 6;
const INCREMENT = 6;

export const NCRReviewsSection = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const visibleReviews = reviewsData.slice(0, visible);

  return (
    <section
      className="py-20 bg-gradient-to-br from-emerald-50/60 via-white to-green-50/40 relative overflow-hidden"
      data-testid="ncr-reviews-section"
    >
      {/* Background accents */}
      <div className="absolute top-10 -right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            {reviewsStats.total}+ Verified Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              1500+ Families
            </span>{' '}
            Across NCR
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from verified buyers of plots, flats, villas and farmhouses in
            Noida, Greater Noida, Ghaziabad & Jewar Airport.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={`hdr-star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                {reviewsStats.average}/5
              </div>
              <div className="text-xs text-gray-500 mt-0.5">Average Rating</div>
            </div>
            <div className="h-14 w-px bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <Users className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">1500+</div>
              <div className="text-xs text-gray-500 mt-0.5">Happy Families</div>
            </div>
            <div className="h-14 w-px bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <BadgeCheck className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">100%</div>
              <div className="text-xs text-gray-500 mt-0.5">Verified Buyers</div>
            </div>
            <div className="h-14 w-px bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <Heart className="w-6 h-6 text-rose-500 mx-auto mb-1" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">95%+</div>
              <div className="text-xs text-gray-500 mt-0.5">Refer Friends</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="reviews-grid">
          {visibleReviews.map((r) => (
            <article
              key={r.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100 p-6 flex flex-col relative overflow-hidden"
              data-testid={`review-card-${r.id}`}
            >
              <Quote className="absolute -top-2 -right-2 w-20 h-20 text-emerald-50 group-hover:text-emerald-100 transition-colors" />
              <div className="relative z-10 flex items-start gap-3 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${r.avatarGradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}
                >
                  {r.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-gray-900 truncate">{r.name}</h3>
                    {r.verified && (
                      <span title="Verified Buyer" className="flex-shrink-0">
                        <BadgeCheck className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">
                      {r.area}, {r.city}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={`s-${r.id}-${i}`}
                      className={`w-4 h-4 ${
                        i <= r.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{r.date}</span>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed relative z-10 flex-1 line-clamp-5">
                {r.feedback}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between relative z-10">
                <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  {r.propertyType}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <BadgeCheck className="w-3 h-3" /> Verified
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {visible < reviewsData.length && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setVisible((v) => v + INCREMENT)}
              data-testid="load-more-reviews"
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-10 py-6 text-base font-bold shadow-lg"
            >
              Show More Reviews <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <div className="mt-3 text-sm text-gray-500">
              Showing{' '}
              <span className="font-semibold text-emerald-700">{visibleReviews.length}</span>{' '}
              of <span className="font-semibold text-emerald-700">{reviewsData.length}</span>{' '}
              reviews
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NCRReviewsSection;
