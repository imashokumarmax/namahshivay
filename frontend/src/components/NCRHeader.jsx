import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/ncr-dreamhomes-info';

export const NCRHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const propertyTypes = [
    'Residential Plots',
    'Residential Flats',
    'Farm Houses',
    'Villas Near Jewar Airport',
    'Film City Properties',
    'Mix Land Use'
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{companyInfo.contact.mobile}</span>
              </a>
              <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{companyInfo.contact.email}</span>
              </a>
            </div>
            
            {/* Social Media */}
            <div className="hidden md:flex items-center space-x-3">
              <span className="text-xs">Follow Us:</span>
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={companyInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">NCR</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 leading-tight">NCR Dream Homes</h1>
                  <p className="text-xs text-green-600 font-semibold">Premium Real Estate Solutions</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Home
              </a>
              
              {/* Properties Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Properties
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {propertyTypes.map((type, idx) => (
                      <a
                        key={idx}
                        href={`#${type.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        {type}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-semibold">
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Consult Now
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
                <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  About Us
                </a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Contact
                </a>
                <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center space-x-2 text-green-600 font-semibold">
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
