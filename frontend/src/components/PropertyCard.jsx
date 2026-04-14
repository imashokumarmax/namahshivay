import React from 'react';
import { MapPin, Bed, Bath, Maximize, IndianRupee, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

export const PropertyCard = ({ property, onContact }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={property.type === 'sale' ? 'bg-emerald-600' : 'bg-blue-600'}>
            For {property.type === 'sale' ? 'Sale' : 'Rent'}
          </Badge>
        </div>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <CardContent className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-emerald-600">{property.price}</span>
          {property.pricePerSqft && (
            <span className="text-sm text-gray-500">({property.pricePerSqft}/sqft)</span>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 pb-4 border-b border-gray-200">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.area}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {property.features?.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <Button
          onClick={() => onContact(property)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Contact Owner
        </Button>
      </CardContent>
    </Card>
  );
};
