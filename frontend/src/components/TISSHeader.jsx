import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/tiss-info';

export const TISSHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'IBM Maximo Services', path: '/ibm-maximo' },
    { name: 'IBM MAS', path: '/maximo-application-suite' },
    { name: 'Upgrade to MAS', path: '/upgrade-to-mas' },
    { name: 'IT Infrastructure', path: '/it-infrastructure-services' },
    { name: 'Network Solutions', path: '/network-infrastructure-solutions' },
    { name: 'Security Solutions', path: '/security-solutions' },
    { name: 'Mobile Development', path: '/mobile-application-development' },
    { name: 'BI & Cognos', path: '/bi-cognos-reporting' },
    { name: 'BIRT Reporting', path: '/birt-reporting' },
    { name: '24x7 Support', path: '/maximo-24x7-support' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href={`tel:${companyInfo.contact.phone}`} className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{companyInfo.contact.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{companyInfo.contact.email}</span>
              </a>
            </div>
            
            {/* Social Media - Hidden by default, show on hover */}
            <div className="hidden md:flex items-center space-x-1 group">
              <span className="text-xs mr-2 opacity-70 group-hover:opacity-100 transition-opacity">Follow Us:</span>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100">
                <Linkedin className="w-3 h-3" />
              </a>
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                 className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100">
                <Twitter className="w-3 h-3" />
              </a>
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                 className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100">
                <Facebook className="w-3 h-3" />
              </a>
              <a href={companyInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer"
                 className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100">
                <Youtube className="w-3 h-3" />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                 className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100">
                <Instagram className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <img 
                  src="https://customer-assets.emergentagent.com/job_noida-plots-hub/artifacts/w2hy8w9a_TISS%20Logo.jpg" 
                  alt="TISS - Technoguard Infra & Software Services" 
                  className="h-16 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About Us
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">{companyInfo.contact.mobile}</span>
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </a>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-2">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.path}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About Us
                </a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Contact
                </a>
                <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>{companyInfo.contact.mobile}</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
