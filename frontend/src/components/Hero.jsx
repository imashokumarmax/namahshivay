import React, { useState } from 'react';
import { Search, MapPin, Home, IndianRupee } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { locations, propertyCategories } from '../mock';

export const Hero = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    location: '',
    category: '',
    type: ''
  });

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your Dream
                <span className="block text-emerald-600">Property in NCR</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Discover premium plots, villas, farmhouses, and commercial properties across Noida, Delhi, Greater Noida, Gurugram & Faridabad
              </p>
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search properties..."
                    className="pl-10 h-12"
                    value={searchParams.keyword}
                    onChange={(e) => setSearchParams({ ...searchParams, keyword: e.target.value })}
                  />
                </div>

                <Select value={searchParams.location} onValueChange={(value) => setSearchParams({ ...searchParams, location: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc.toLowerCase()}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Select value={searchParams.category} onValueChange={(value) => setSearchParams({ ...searchParams, category: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyCategories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={searchParams.type} onValueChange={(value) => setSearchParams({ ...searchParams, type: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Buy or Rent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSearch}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">1200+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">6</div>
                <div className="text-sm text-gray-600 mt-1">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1564834552305-aea63611ff08"
                alt="Premium Property"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Featured Property</p>
                    <h3 className="text-lg font-bold text-gray-900">Luxury Villa in Noida</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600">₹2.5 Cr</p>
                    <p className="text-sm text-gray-600">4 BHK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
