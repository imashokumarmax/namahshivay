import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'Properties', 'About', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">NCR</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 leading-tight">NCR-DREAMHOMES</h1>
                <p className="text-xs text-emerald-600 font-semibold">Dream Homes for All</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) =>
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200">

                {item}
              </a>
            )}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:8287673037" className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+91-8287673037</span>
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              List Property
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">

            {mobileMenuOpen ?
            <X className="w-6 h-6 text-gray-700" /> :

            <Menu className="w-6 h-6 text-gray-700" />
            }
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen &&
        <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) =>
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}>

                  {item}
                </a>
            )}
              <a href="tel:8287873037" className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">8287873037</span>
              </a>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                List Property
              </Button>
            </nav>
          </div>
        }
      </div>
    </header>);

};