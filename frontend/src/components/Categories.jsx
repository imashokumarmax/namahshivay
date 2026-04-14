import React from 'react';
import { Home, Building, Trees, Building2, Briefcase, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const categoryIcons = {
  'MapPin': MapPin,
  'Home': Home,
  'Trees': Trees,
  'Building2': Building2,
  'Briefcase': Briefcase,
  'Building': Building
};

export const Categories = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <section className="py-16 bg-white" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Browse by Property Type
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of properties across NCR region
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.icon];
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(isSelected ? '' : category.id)}
                className={`group p-6 rounded-xl border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span
                    className={`text-sm font-semibold text-center transition-colors ${
                      isSelected ? 'text-emerald-600' : 'text-gray-700 group-hover:text-emerald-600'
                    }`}
                  >
                    {category.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
