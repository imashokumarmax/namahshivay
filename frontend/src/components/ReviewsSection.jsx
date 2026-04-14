import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { customerReviews, reviewStats } from '../data/reviews';

export const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(customerReviews.length / reviewsPerPage);

  const displayedReviews = customerReviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Trusted by 1200+ Happy Customers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Real experiences from real people who found their dream properties with NCR Dream Homes
          </p>

          {/* Rating Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">{reviewStats.average.toFixed(1)}</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>

            <div className="h-16 w-px bg-gray-300"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{reviewStats.total}+</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>

            <div className="h-16 w-px bg-gray-300"></div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">{reviewStats.verified}</div>
              <div className="text-sm text-gray-600">Verified Buyers</div>
            </div>

            <div className="h-16 w-px bg-gray-300"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">100%</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="border-gray-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-emerald-600" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {review.verified && (
                    <div className="ml-2 flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                      <Shield className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="w-10 h-10 p-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2">
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageIndex = currentPage < 3 ? i : currentPage - 2 + i;
              if (pageIndex >= totalPages) return null;
              
              return (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentPage(pageIndex)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    currentPage === pageIndex
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {pageIndex + 1}
                </button>
              );
            })}
          </div>

          <Button
            variant="outline"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 p-0"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Showing info */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Showing {currentPage * reviewsPerPage + 1} - {Math.min((currentPage + 1) * reviewsPerPage, reviewStats.total)} of {reviewStats.total} reviews
        </div>
      </div>
    </section>
  );
};
