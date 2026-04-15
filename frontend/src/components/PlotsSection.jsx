import React from 'react';
import { MapPin, Ruler, IndianRupee, TrendingUp, CheckCircle2, Building2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { plotListings } from '../data/plots';

export const PlotsSection = ({ onContact }) => {
  return (
    <section className="py-20 bg-white" id="plots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-semibold">YEIDA Approved Plots</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Premium Plots Near Jewar Airport
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Invest in YEIDA approved residential and commercial plots in Noida, Ghaziabad, Greater Noida, and Jewar Airport area. Best ROI opportunity 2026 with same-day registry.
          </p>
        </div>

        {/* Why Invest Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">28% Growth</h3>
            <p className="text-sm text-gray-600">Expected appreciation in 2026</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">YEIDA Approved</h3>
            <p className="text-sm text-gray-600">All plots government verified</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center border border-orange-100">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">5 km Radius</h3>
            <p className="text-sm text-gray-600">From Jewar International Airport</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-100">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <IndianRupee className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">₹36,250/sqft</h3>
            <p className="text-sm text-gray-600">Competitive pricing onwards</p>
          </div>
        </div>

        {/* Plots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plotListings.map((plot) => (
            <Card key={plot.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-200">
              <div className="relative overflow-hidden">
                <img
                  src={plot.image}
                  alt={plot.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-emerald-600">
                    {plot.type === 'sale' ? 'For Sale' : 'For Rent'}
                  </Badge>
                  {plot.features[0] && (
                    <Badge className="bg-blue-600">{plot.features[0]}</Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {plot.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
                    <span>{plot.location}</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 pb-4 border-b border-gray-200">
                  <span className="text-3xl font-bold text-emerald-600">{plot.price}</span>
                  {plot.pricePerSqft && (
                    <span className="text-sm text-gray-500">({plot.pricePerSqft}/sqft)</span>
                  )}
                </div>

                {/* Plot Details */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{plot.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{plot.plotType}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Road:</span> {plot.roadWidth}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Facing:</span> {plot.facing}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {plot.highlights?.slice(0, 3).map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => onContact(plot)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  View Details & Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for Custom Plot Requirements?
          </h3>
          <p className="text-emerald-50 text-lg mb-6 max-w-2xl mx-auto">
            We have access to 500+ premium plots across NCR. Share your budget and requirements - we'll find the perfect match!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50"
              onClick={() => window.location.href = '#contact'}
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://wa.me/918287673037?text=I want custom plot requirements', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
