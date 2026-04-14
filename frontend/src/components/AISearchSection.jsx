import React, { useState } from 'react';
import { Search, Sparkles, TrendingUp, MapPin, Home, IndianRupee, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { focusLocations, propertyTypeFocus } from '../data/locations';

export const AISearchSection = ({ onSearch }) => {
  const [aiQuery, setAiQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const aiSuggestions = [
    '3 BHK flat near metro in Noida under 1 crore',
    'Residential plot near Jewar Airport for investment',
    'Farmhouse with 1 acre near Yamuna Expressway',
    'Commercial office space in Sector 62 Noida',
    'Luxury villa in Greater Noida West under 2.5 crore',
    'YEIDA approved plot in Sector 18',
    'Builder floor in Ghaziabad Indirapuram',
    'Affordable plot in Noida Extension under 50 lakhs'
  ];

  const handleAISearch = () => {
    if (aiQuery.trim()) {
      // Parse AI query and extract filters
      const parsedQuery = parseAIQuery(aiQuery);
      onSearch(parsedQuery);
      setShowSuggestions(false);
    }
  };

  const parseAIQuery = (query) => {
    const lowerQuery = query.toLowerCase();
    const parsed = {
      keyword: query,
      location: '',
      category: '',
      type: '',
      budget: ''
    };

    // Extract location
    Object.keys(focusLocations).forEach(location => {
      if (lowerQuery.includes(location.toLowerCase())) {
        parsed.location = location.toLowerCase();
      }
    });

    // Extract property type
    if (lowerQuery.includes('plot')) parsed.category = 'residential-plots';
    if (lowerQuery.includes('villa')) parsed.category = 'villas';
    if (lowerQuery.includes('farmhouse')) parsed.category = 'farmhouses';
    if (lowerQuery.includes('flat') || lowerQuery.includes('bhk')) parsed.category = 'flats';
    if (lowerQuery.includes('office')) parsed.category = 'commercial-offices';
    if (lowerQuery.includes('commercial')) parsed.category = 'commercial-buildings';

    // Extract type (sale/rent)
    if (lowerQuery.includes('rent')) parsed.type = 'rent';
    else parsed.type = 'sale';

    return parsed;
  };

  const handleSuggestionClick = (suggestion) => {
    setAiQuery(suggestion);
    setShowSuggestions(false);
    const parsed = parseAIQuery(suggestion);
    onSearch(parsed);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">AI-Powered Property Search</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Property with AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Describe what you're looking for in natural language, and let our AI find the best matches
          </p>
        </div>

        {/* AI Search Box */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200 shadow-xl">
            <CardContent className="p-6">
              <div className="relative">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-500" />
                    <Input
                      placeholder='Try: "3 BHK flat near metro in Noida under 1 crore" or "Plot near Jewar Airport"'
                      value={aiQuery}
                      onChange={(e) => {
                        setAiQuery(e.target.value);
                        setShowSuggestions(e.target.value.length > 2);
                      }}
                      onFocus={() => setShowSuggestions(aiQuery.length > 2)}
                      className="pl-12 h-14 text-base border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <Button
                    onClick={handleAISearch}
                    className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>

                {/* AI Suggestions Dropdown */}
                {showSuggestions && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-purple-200 z-50 max-h-96 overflow-y-auto">
                    <div className="p-3 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        Popular AI Searches
                      </p>
                    </div>
                    {aiSuggestions
                      .filter(s => !aiQuery || s.toLowerCase().includes(aiQuery.toLowerCase()))
                      .map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors border-b border-gray-100 last:border-0 group"
                        >
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                            <span className="text-gray-700 group-hover:text-purple-600">
                              {suggestion}
                            </span>
                          </div>
                        </button>
                      ))}
                  </div>
                )}
              </div>

              {/* Quick Filter Tags */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Quick Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {propertyTypeFocus.filter(p => p.popular).map((prop, index) => (
                    <Badge
                      key={index}
                      className="cursor-pointer bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 text-sm"
                      onClick={() => {
                        setAiQuery(prop.type + ' in ' + prop.locations[0]);
                        handleAISearch();
                      }}
                    >
                      <Home className="w-3 h-3 mr-1" />
                      {prop.type}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Locations */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {Object.keys(focusLocations).slice(0, 6).map((location, index) => (
              <button
                key={index}
                onClick={() => {
                  setAiQuery(`Properties in ${location}`);
                  const parsed = parseAIQuery(`Properties in ${location}`);
                  onSearch(parsed);
                }}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {location}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {focusLocations[location].length} areas
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-purple-600 transition-colors">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
