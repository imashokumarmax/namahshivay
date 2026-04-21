import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NCRHeader } from '../components/NCRHeader';
import { SEOKeywordFooter } from '../components/SEOKeywordFooter';
import {
  Home, ChevronRight, Sparkles, Star, BadgeCheck, Phone, MessageCircle,
  MapPin, Quote, Filter, TrendingUp, Users, Heart
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/ncr-dreamhomes-info';
import { reviewsData, reviewsStats, reviewsFilterOptions } from '../data/reviews-data';

const PAGE_SIZE = 12;

const NCRReviewsPage = () => {
  const [cityFilter, setCityFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    document.title = 'Reviews & Testimonials | NCR Dream Homes — 1500+ Happy Families';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Read 120+ genuine 5-star reviews from NCR Dream Homes customers across Noida, Greater Noida, Ghaziabad & Jewar Airport. Plots, flats, villas & farmhouses.');
    }
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    return reviewsData.filter((r) => {
      const cityOk = cityFilter === 'All' || r.city === cityFilter;
      const typeOk = typeFilter === 'All' || r.propertyType === typeFilter;
      return cityOk && typeOk;
    });
  }, [cityFilter, typeFilter]);

  const visibleReviews = filtered.slice(0, visible);

  const ratingBreakdown = [
    { stars: 5, count: reviewsStats.fiveStar, pct: Math.round((reviewsStats.fiveStar / reviewsStats.total) * 100) },
    { stars: 4, count: reviewsStats.fourStar, pct: Math.round((reviewsStats.fourStar / reviewsStats.total) * 100) },
    { stars: 3, count: 0, pct: 0 },
    { stars: 2, count: 0, pct: 0 },
    { stars: 1, count: 0, pct: 0 }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="reviews-page">
      <NCRHeader />

      {/* HERO BANNER */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden" data-testid="reviews-hero">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/92 via-emerald-900/80 to-green-800/65" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <nav className="flex items-center space-x-2 text-sm text-green-100 mb-8">
            <Link to="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" /> Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Reviews & Ratings</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 text-white">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-300/30 rounded-full text-green-100 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-green-300" />
                {reviewsStats.total}+ Authentic Reviews • Verified Buyers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                Loved by{' '}
                <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                  1500+ Families
                </span>{' '}
                Across NCR
              </h1>
              <p className="text-lg sm:text-xl text-green-50/90 leading-relaxed mb-8">
                Real stories from real customers who bought their dream plots, flats, villas
                and farmhouses with NCR Dream Homes across Noida, Greater Noida, Ghaziabad
                and Jewar Airport.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#reviews" className="inline-flex items-center px-7 py-4 bg-white text-emerald-700 rounded-xl hover:bg-green-50 transition-all font-semibold shadow-xl hover:-translate-y-0.5">
                  Read All Reviews <ChevronRight className="w-5 h-5 ml-1" />
                </a>
                <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center px-7 py-4 bg-green-500 text-white rounded-xl hover:bg-green-400 transition-all font-semibold shadow-xl hover:-translate-y-0.5 border border-green-400/50">
                  <MessageCircle className="w-5 h-5 mr-2" /> Share Your Story
                </a>
              </div>
            </div>

            {/* Rating card */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-2">
                    {reviewsStats.average}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[1,2,3,4,5].map((i) => <Star key={`banner-star-${i}`} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <div className="text-sm text-green-100">Based on {reviewsStats.total}+ verified reviews</div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 space-y-2">
                  {ratingBreakdown.slice(0, 3).map((r) => (
                    <div key={r.stars} className="flex items-center gap-3 text-sm">
                      <span className="w-8">{r.stars}★</span>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-xs text-green-100">{r.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,48 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* TRUST METRICS */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, value: `${reviewsStats.average}/5`, label: 'Average Rating' },
              { icon: Users, value: '1500+', label: 'Happy Families' },
              { icon: BadgeCheck, value: '100%', label: 'Verified Buyers' },
              { icon: Heart, value: '95%+', label: 'Would Refer Friends' }
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 text-center">
                  <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">{t.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{t.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section id="reviews" className="py-16 bg-gradient-to-br from-emerald-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
              Customer Stories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Happy Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {reviewsStats.total} genuine reviews from verified property buyers.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-8" data-testid="review-filters">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <Filter className="w-4 h-4 text-emerald-600" /> Filter:
              </div>

              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-semibold">By City</div>
                <div className="flex flex-wrap gap-2">
                  {reviewsFilterOptions.cities.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCityFilter(c); setVisible(PAGE_SIZE); }}
                      data-testid={`city-filter-${c.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        cityFilter === c
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-semibold">Property Type</div>
                <div className="flex flex-wrap gap-2">
                  {reviewsFilterOptions.types.map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTypeFilter(t); setVisible(PAGE_SIZE); }}
                      data-testid={`type-filter-${t.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        typeFilter === t
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              Showing <span className="font-semibold text-emerald-700">{visibleReviews.length}</span> of{' '}
              <span className="font-semibold text-emerald-700">{filtered.length}</span> reviews
            </div>
          </div>

          {/* Grid */}
          {visibleReviews.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No reviews match these filters. Try clearing them.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="reviews-grid">
              {visibleReviews.map((r) => (
                <article
                  key={r.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100 p-6 flex flex-col relative overflow-hidden"
                  data-testid={`review-card-${r.id}`}
                >
                  <Quote className="absolute -top-2 -right-2 w-20 h-20 text-emerald-50 group-hover:text-emerald-100 transition-colors" />
                  <div className="relative z-10 flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${r.avatarGradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}>
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
                        <span className="truncate">{r.area}, {r.city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={`s-${r.id}-${i}`} className={`w-4 h-4 ${i <= r.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed relative z-10 flex-1">
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
          )}

          {/* Load more */}
          {visible < filtered.length && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setVisible(visible + PAGE_SIZE)}
                data-testid="load-more-reviews"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-10 py-6 text-base font-bold shadow-lg"
              >
                Load More Reviews <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <TrendingUp className="w-14 h-14 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join 1500+ Happy Customers
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Book your free property consultation with NCR Dream Homes — your next 5-star review could be the one we show off!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 rounded-xl hover:bg-green-50 transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5">
              <Phone className="w-5 h-5 mr-2" /> {companyInfo.contact.mobile}
            </a>
            <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5 border border-green-300/40">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <SEOKeywordFooter />
    </div>
  );
};

export default NCRReviewsPage;
