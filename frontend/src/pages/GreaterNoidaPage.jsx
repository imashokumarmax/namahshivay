import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header';
import { AISearchSection } from '../components/AISearchSection';
import { Categories } from '../components/Categories';
import { PlotsSection } from '../components/PlotsSection';
import { PropertyCard } from '../components/PropertyCard';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { propertyCategories } from '../mock';
import { plotListings } from '../data/plots';
import { locationProperties } from '../data/locations';
import { Toaster } from '../components/ui/sonner';
import { toast } from 'sonner';

export const GreaterNoidaPage = () => {
  const location = locationProperties['greater-noida'];
  const [filteredProperties, setFilteredProperties] = useState(
    plotListings.filter(p => p.location === 'Greater Noida' || p.location.includes('Greater Noida'))
  );

  const handleSearch = (searchParams) => {
    let filtered = plotListings.filter(p => p.location === 'Greater Noida' || p.location.includes('Greater Noida'));
    if (searchParams.keyword) {
      const keyword = searchParams.keyword.toLowerCase();
      filtered = filtered.filter(prop =>
        prop.title?.toLowerCase().includes(keyword) ||
        prop.description?.toLowerCase().includes(keyword)
      );
    }
    setFilteredProperties(filtered);
    toast.success(`Found ${filtered.length} properties in Greater Noida`);
  };

  return (
    <div className="App">
      <Helmet>
        <title>YEIDA Plots Greater Noida | Authority Land | NCR Dream Homes</title>
        <meta name="description" content="YEIDA approved plots & authority land in Greater Noida. Alpha, Beta, Pari Chowk sectors. Residential plots, farmhouses. Best investment. Call 8287873037" />
        <meta name="keywords" content="greater noida plots, yeida plots, authority plots greater noida, residential land greater noida, greater noida property, farmhouse greater noida" />
      </Helmet>
      
      <Toaster position="top-right" />
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-purple-600 to-pink-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{location.displayName}</h1>
            <p className="text-xl text-purple-50 mb-6">{location.description}</p>
            <div className="flex flex-wrap gap-3">
              {location.areas.map((area, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/20 rounded-full text-sm">{area}</span>
              ))}
            </div>
          </div>
        </section>

        <AISearchSection onSearch={handleSearch} />
        <Categories categories={propertyCategories} onCategorySelect={() => {}} selectedCategory="" />
        <PlotsSection onContact={() => {}} />
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Featured Properties in Greater Noida</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProperties.slice(0, 6).map(property => (
                <PropertyCard key={property.id} property={property} onContact={() => {}} />
              ))}
            </div>
          </div>
        </section>

        <ReviewsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default GreaterNoidaPage;
