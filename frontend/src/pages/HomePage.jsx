import React, { useState, useEffect, useCallback } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AISearchSection } from '../components/AISearchSection';
import { AIAgentDashboard } from '../components/AIAgentDashboard';
import { Categories } from '../components/Categories';
import { PlotsSection } from '../components/PlotsSection';
import { PropertyCard } from '../components/PropertyCard';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { mockProperties, propertyCategories } from '../mock';
import { plotListings } from '../data/plots';
import { Toaster } from '../components/ui/sonner';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState([...mockProperties, ...plotListings]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [allProperties] = useState([...mockProperties, ...plotListings]);

  useEffect(() => {
    filterProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const filterProperties = useCallback((searchParams = {}) => {
    let filtered = [...allProperties];

    if (selectedCategory) {
      filtered = filtered.filter(prop => prop.category === selectedCategory);
    }

    if (searchParams.keyword) {
      const keyword = searchParams.keyword.toLowerCase();
      filtered = filtered.filter(prop =>
        prop.title?.toLowerCase().includes(keyword) ||
        prop.description?.toLowerCase().includes(keyword) ||
        prop.location?.toLowerCase().includes(keyword) ||
        prop.features?.some(f => f.toLowerCase().includes(keyword))
      );
    }

    if (searchParams.location) {
      filtered = filtered.filter(prop =>
        prop.location.toLowerCase().includes(searchParams.location)
      );
    }

    if (searchParams.category) {
      filtered = filtered.filter(prop => prop.category === searchParams.category);
    }

    if (searchParams.type) {
      filtered = filtered.filter(prop => prop.type === searchParams.type);
    }

    setFilteredProperties(filtered);

    if (Object.keys(searchParams).length > 0) {
      toast.success(`Found ${filtered.length} properties matching your search`, {
        description: searchParams.keyword ? `Searching for: "${searchParams.keyword}"` : ''
      });
      
      setTimeout(() => {
        document.getElementById('all-properties')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [allProperties, selectedCategory]);

  useEffect(() => {
    filterProperties();
  }, [filterProperties, selectedCategory]);

  const handleSearch = (searchParams) => {
    filterProperties(searchParams);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleContactProperty = (property) => {
    setSelectedProperty(property);
    setContactDialogOpen(true);
  };

  const handleWhatsAppContact = () => {
    const message = `Hi, I'm interested in: ${selectedProperty.title} - ${selectedProperty.location} (${selectedProperty.price})`;
    window.open(`https://wa.me/918287673037?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneContact = () => {
    window.location.href = 'tel:+918287673037';
  };

  return (
    <div className="App">
      <SEOHead />
      <Toaster position="top-right" />
      
      <Header />
      
      <main>
        <Hero onSearch={handleSearch} />
        
        <AISearchSection onSearch={handleSearch} />
        
        <AIAgentDashboard />
        
        <Categories
          categories={propertyCategories}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        <PlotsSection onContact={handleContactProperty} />

        {/* All Properties Grid */}
        <section className="py-16 bg-gray-50" id="all-properties">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCategory
                    ? propertyCategories.find(cat => cat.id === selectedCategory)?.name
                    : 'All Properties'}
                </h2>
                <p className="text-gray-600 mt-2">
                  Showing {filteredProperties.length} properties
                </p>
              </div>
              {selectedCategory && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory('')}
                >
                  Clear Filter
                </Button>
              )}
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onContact={handleContactProperty}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl">
                <p className="text-gray-600 text-lg">No properties found matching your criteria</p>
                <Button
                  onClick={() => {
                    setSelectedCategory('');
                    setFilteredProperties(allProperties);
                  }}
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700"
                >
                  View All Properties
                </Button>
              </div>
            )}
          </div>
        </section>

        <ReviewsSection />
        
        <ContactSection />
      </main>

      <Footer />

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Owner</DialogTitle>
            <DialogDescription>
              {selectedProperty?.title}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Property Price</p>
              <p className="text-2xl font-bold text-emerald-600">{selectedProperty?.price}</p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-600 hover:bg-green-700 text-white h-12"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +91-8287673037
              </Button>

              <Button
                onClick={handlePhoneContact}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91-8287673037
              </Button>

              <a href="#contact" onClick={() => setContactDialogOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full h-12"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email Inquiry
                </Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
