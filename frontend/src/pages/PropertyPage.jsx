import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NCRHeader } from '../components/NCRHeader';
import { Home, MapPin, CheckCircle2, Phone, Mail, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/ncr-dreamhomes-info';
import { propertyPagesData } from '../data/property-pages-data';

const PropertyPage = () => {
  const { slug } = useParams();
  const pageData = propertyPagesData[slug] || {};

  useEffect(() => {
    document.title = pageData.title || 'NCR Dream Homes - Premium Properties';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageData.metaDescription || '');
    }
  }, [slug, pageData]);

  if (!pageData.title) {
    return (
      <div className="min-h-screen bg-white">
        <NCRHeader />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold">Page Not Found</h1>
        </div>
      </div>
    );
  }

  const propertyTypes = [
    { title: 'Residential Plots', icon: Home, desc: 'Authority approved plots' },
    { title: 'Residential Flats', icon: Home, desc: 'Modern 2/3/4 BHK flats' },
    { title: 'Farmhouses', icon: Home, desc: 'Luxury farmhouse land' },
    { title: 'Commercial Property', icon: Home, desc: 'Prime commercial spaces' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NCRHeader />

      {/* Hero Banner */}
      <section 
        className="relative bg-cover bg-center py-32" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pageData.bannerImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-block px-6 py-2 bg-green-600/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              NCR Dream Homes - Your Trusted Real Estate Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {pageData.heroTitle}<br />
              <span className="text-green-400">{pageData.heroLocation}</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              {pageData.heroDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call +91-8287673037
              </Button>
              <a 
                href={`https://wa.me/${companyInfo.contact.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-8 py-6 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp NCR Dream Homes
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map(starNum => <Star key={`star-${starNum}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-white">Trusted by 1500+ Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About {pageData.heroLocation} Properties
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {pageData.content.intro}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.content.features.map((feature) => (
              <div key={feature} className="flex items-start space-x-3 bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Explore Properties in {pageData.heroLocation}
            </h2>
            <p className="text-lg text-gray-600">
              NCR Dream Homes offers diverse property options in {pageData.heroLocation}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.desc}</p>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    View Details
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose NCR Dream Homes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Why Choose NCR Dream Homes for {pageData.heroLocation}?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                NCR Dream Homes is the leading real estate company in {pageData.heroLocation}. We offer government-approved properties with complete transparency, flexible payment plans, and 24x7 customer support.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Government Approved Projects</h4>
                    <p className="text-gray-600">All NCR Dream Homes properties are authority approved</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Clear Legal Documentation</h4>
                    <p className="text-gray-600">Registry ready properties with clear titles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Best Price Guarantee</h4>
                    <p className="text-gray-600">NCR Dream Homes offers the most competitive prices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Expert Consultation</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="+91-XXXXXXXXXX" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select Property Type</option>
                  <option>Residential Plots</option>
                  <option>Residential Flats</option>
                  <option>Farmhouse</option>
                  <option>Commercial Property</option>
                </select>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact NCR Dream Homes
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Invest in {pageData.heroLocation}?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact NCR Dream Homes today for the best property deals in {pageData.heroLocation}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              {companyInfo.contact.mobile}
            </a>
            <a href={`mailto:${companyInfo.contact.email}`} className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-400 transition-all font-semibold text-lg shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              {companyInfo.contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">NCR Dream Homes</h3>
            <p className="text-gray-400 mb-4">
              Premium Real Estate in {pageData.heroLocation} | {companyInfo.tagline}
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href={`tel:${companyInfo.contact.mobile}`} className="hover:text-white transition-colors">
                <Phone className="w-5 h-5 inline mr-2" />
                {companyInfo.contact.mobile}
              </a>
              <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors">
                <Mail className="w-5 h-5 inline mr-2" />
                {companyInfo.contact.email}
              </a>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-gray-500">
              <p>&copy; {new Date().getFullYear()} NCR Dream Homes. All rights reserved. {pageData.heroLocation} Properties.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyPage;
