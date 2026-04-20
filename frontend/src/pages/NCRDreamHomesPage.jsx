import React, { useState } from 'react';
import { NCRHeader } from '../components/NCRHeader';
import { Home, Building2, TreePine, MapPin, CheckCircle2, ArrowRight, Phone, Mail, MessageCircle, Send, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo, keywords } from '../data/ncr-dreamhomes-info';

const NCRDreamHomesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi NCR Dream Homes! I'm ${formData.name}. Interested in ${formData.property}. Contact: ${formData.phone}`;
    window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const properties = [
    {
      icon: Home,
      title: 'Residential Plots Noida',
      description: 'NCR Dream Homes offers premium residential plots in Noida with best connectivity. Invest in NCR Dream Homes residential plots near Noida International Airport Jewar for maximum returns.',
      locations: ['Sector 150', 'Sector 135', 'Sector 168'],
      price: 'Starting ₹60 Lakh*'
    },
    {
      icon: TreePine,
      title: 'Farm Houses Yamuna Expressway',
      description: 'NCR Dream Homes presents luxury farmhouses on Yamuna Expressway near Jewar Airport. Experience country living with NCR Dream Homes farm house projects.',
      locations: ['Film City', 'Jewar', 'Sector 150'],
      price: 'Starting ₹1.5 Cr*'
    },
    {
      icon: Building2,
      title: 'Residential Flats Greater Noida',
      description: 'NCR Dream Homes residential flats in Greater Noida offer world-class living near Jewar Airport.',
      locations: ['Greater Noida West', 'Jewar', 'Yamuna Expressway'],
      price: 'Starting ₹45 Lakh*'
    },
    {
      icon: Home,
      title: 'Villas Near Jewar Airport',
      description: 'NCR Dream Homes premium villas near Noida International Airport Jewar with luxury amenities.',
      locations: ['Jewar Airport', 'Yamuna Expressway'],
      price: 'Starting ₹2.5 Cr*'
    }
  ];

  const filmCityProperties = [
    {
      title: 'Film City Farms Yamuna Expressway',
      size: '1000-5000 Sq.Yd',
      price: '₹1.5 Cr onwards',
      features: ['Registry Ready', '24x7 Security', 'Green Development']
    },
    {
      title: 'Film City Plots Yamuna Expressway',
      size: '500-2000 Sq.Yd',
      price: '₹75 Lakh onwards',
      features: ['Govt Approved', 'Clear Title', 'Investment Opportunity']
    },
    {
      title: 'Film City Residential Plots',
      size: '300-1000 Sq.Yd',
      price: '₹50 Lakh onwards',
      features: ['Prime Location', 'All Amenities', 'High ROI']
    }
  ];

  const whyChoose = [
    'Govt. Approved Projects by NCR Dream Homes',
    'Registry Ready Properties',
    'Transparent Process at NCR Dream Homes',
    'Flexible Payment Plans',
    'Prime Locations Near Jewar Airport',
    'Best Deals in NCR Region'
  ];

  return (
    <div className="min-h-screen bg-white">
      <NCRHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold mb-6">
                NCR Dream Homes - Your Trusted Real Estate Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Prime Properties Near<br />
                <span className="text-green-600">Noida International Airport Jewar</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                NCR Dream Homes offers residential plots, farm houses, flats, and villas in Noida, Greater Noida, and Yamuna Expressway. Invest with NCR Dream Homes for your dream property near Jewar Airport.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  View Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-6 bg-white border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-all font-semibold text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600">Trusted by 1500+ Happy Customers</p>
              </div>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg" alt="NCR Dream Homes Luxury Properties" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Properties Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              NCR Dream Homes Premium Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exclusive properties offered by NCR Dream Homes in Noida, Greater Noida, Jewar, and Yamuna Expressway
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property, idx) => {
              const Icon = property.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{property.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{property.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.locations.map((loc, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {loc}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-green-600 font-bold text-xl">{property.price}</span>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Film City Properties */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              NCR Dream Homes - Film City Properties
            </h2>
            <p className="text-lg text-gray-600">
              Exclusive Film City farms and plots on Yamuna Expressway by NCR Dream Homes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filmCityProperties.map((prop, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{prop.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600"><span className="font-semibold">Size:</span> {prop.size}</p>
                  <p className="text-green-600 font-bold text-lg">{prop.price}</p>
                </div>
                <div className="space-y-2">
                  {prop.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                  Contact NCR Dream Homes
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NCR Dream Homes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose NCR Dream Homes?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form & Maps */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Consult NCR Dream Homes for More Details
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch with NCR Dream Homes team for personalized property solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    placeholder="+91-XXXXXXXXXX" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Interest*</label>
                  <select 
                    required
                    value={formData.property}
                    onChange={(e) => setFormData({...formData, property: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Property Type</option>
                    <option>Residential Plots Noida</option>
                    <option>Farm Houses Yamuna Expressway</option>
                    <option>Residential Flats Greater Noida</option>
                    <option>Villas Near Jewar Airport</option>
                    <option>Film City Properties</option>
                    <option>Mixed Land Use</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-xl shadow-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp NCR Dream Homes
                </Button>
              </form>
            </div>

            {/* Office Locations with Maps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">NCR Dream Homes Office Locations</h3>
              
              {companyInfo.offices.map((office, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">{office.name}</h4>
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-600">{office.fullAddress}</p>
                      <a href={office.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium mt-2 inline-block">
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                  <div className="h-48 rounded-xl overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Keywords */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">NCR Dream Homes</h3>
              <p className="text-gray-400 mb-6">{companyInfo.tagline}</p>
              <div className="space-y-3">
                <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>{companyInfo.contact.mobile}</span>
                </a>
                <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>{companyInfo.contact.email}</span>
                </a>
                <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp NCR Dream Homes</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">NCR Dream Homes Properties</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Residential Plots Noida - NCR Dream Homes</li>
                <li>Residential Plots Greater Noida - NCR Dream Homes</li>
                <li>Residential Plots Jewar - NCR Dream Homes</li>
                <li>Farm Houses Yamuna Expressway - NCR Dream Homes</li>
                <li>Residential Flats Noida - NCR Dream Homes</li>
                <li>Villas Near Jewar Airport - NCR Dream Homes</li>
                <li>Film City Properties - NCR Dream Homes</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {keywords.slice(0, 12).map((keyword, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors cursor-pointer">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} NCR Dream Homes. All rights reserved. Premium Real Estate in Noida, Greater Noida, Jewar & Yamuna Expressway.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NCRDreamHomesPage;
