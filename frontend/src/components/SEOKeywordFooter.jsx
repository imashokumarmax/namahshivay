import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Building2 } from 'lucide-react';
import { seoFooterKeywords } from '../data/seo-keywords';
import { companyInfo } from '../data/ncr-dreamhomes-info';

export const SEOKeywordFooter = () => {
  return (
    <section className="bg-[#1a1f2e] text-gray-300 pt-16 pb-10" data-testid="seo-keyword-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro headline */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <div className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-2">
            Explore All Properties
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            NCR Dream Homes — Delhi-NCR Property Universe
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-3xl">
            Discover every plot, farmhouse and land deal across Noida, Greater Noida,
            Ghaziabad, Yamuna Expressway and Jewar Airport — all in one place.
          </p>
        </div>

        {/* 4-column keyword grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-[13px] leading-relaxed">
          {seoFooterKeywords.map((col) => (
            <div key={col.heading} className="space-y-2">
              <h3 className="text-emerald-300 font-bold text-xs uppercase tracking-widest mb-4 sm:sr-only">
                {col.heading}
              </h3>
              {col.items.map((k) => (
                <Link
                  key={k.label}
                  to={k.href}
                  className="block text-gray-400 hover:text-emerald-300 transition-colors leading-snug"
                >
                  {k.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Brand + Offices row */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">NCR-DREAMHOMES</div>
                <div className="text-xs text-emerald-400 font-semibold tracking-widest">REAL ESTATE</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Premium real estate consultancy for plots, flats, villas & farmhouses across Delhi-NCR.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-4 h-4 text-white fill-white" />
              </a>
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-sky-500 hover:bg-sky-400 flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-4 h-4 text-white fill-white" />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-4 h-4 text-white fill-white" />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* 3 Offices */}
          {companyInfo.offices.map((office) => (
            <div key={office.name}>
              <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {office.name.split('(')[0].trim()}:
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {office.address},<br />
                {office.locality}
              </p>
              <a
                href={office.googleMapsLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-2 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                View on Map →
              </a>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4 text-sm">
          <div className="space-y-2">
            <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors">
              <Phone className="w-4 h-4 text-emerald-400" />
              {companyInfo.contact.mobile}
            </a>
            <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors">
              <Mail className="w-4 h-4 text-emerald-400" />
              {companyInfo.contact.email}
            </a>
          </div>
          <div className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} NCR Dream Homes. All rights reserved. Delhi-NCR Premier Real Estate.
          </div>
        </div>
      </div>
    </section>
  );
};
