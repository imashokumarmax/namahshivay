import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NCRHeader } from '../components/NCRHeader';
import { SEOKeywordFooter } from '../components/SEOKeywordFooter';
import { NCRReviewsSection } from '../components/NCRReviewsSection';
import {
  Home, ChevronRight, Sparkles, Phone, MessageCircle, Mail,
  TreePine, Building2, Warehouse, Trees, ArrowRight, Shield, HandCoins,
  FileCheck, Search, MapPinned, Handshake, TrendingUp, Star
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/ncr-dreamhomes-info';

const NCRServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services | NCR Dream Homes — Residential Plots, Flats, Villas & Farmhouses Delhi-NCR';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'NCR Dream Homes services — Residential Plots, Luxury Flats, Villas, Farmhouses, Home Loan, Legal Documentation across Noida, Greater Noida, Ghaziabad & Jewar Airport.');
    }
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: MapPinned,
      title: 'Residential Plots',
      desc: 'GNIDA / YEIDA / Noida Authority approved freehold plots with clear title across all NCR sectors.',
      features: ['100–1000 sq-yd', 'Registry Ready', 'Bank Loan Approved', 'Gated Township'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      link: '/greater-noida-residential-plots',
      accent: 'from-emerald-500 to-green-600'
    },
    {
      icon: Building2,
      title: 'Residential Flats',
      desc: 'Luxury 2/3/4/5 BHK apartments from top developers in Noida, Greater Noida, Ghaziabad & Jewar.',
      features: ['RERA Approved', 'Ready-to-Move', 'Clubhouse & Pool', 'Metro Connected'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      link: '/noida-residential-flats',
      accent: 'from-teal-500 to-emerald-600'
    },
    {
      icon: Home,
      title: 'Luxury Villas',
      desc: 'Premium independent villas & bungalows in Gaur City, Indirapuram and Yamuna Expressway.',
      features: ['3/4/5 BHK Villas', 'Independent', 'Private Lawn', 'Premium Locality'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      link: '/ghaziabad-property',
      accent: 'from-green-500 to-lime-600'
    },
    {
      icon: Trees,
      title: 'Farmhouses',
      desc: 'Luxurious farmhouses & farmland on Yamuna Expressway, near Jewar Airport and Greater Noida.',
      features: ['1000 sq-yd – 5 Acre', 'Freehold Land', 'Pool Ready', 'Gated Community'],
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      link: '/jewar-airport-farmhouse',
      accent: 'from-emerald-600 to-teal-700'
    }
  ];

  const supportServices = [
    { icon: Search, title: 'Property Consultation', desc: 'Expert advisory on location, budget, ROI and property type.' },
    { icon: FileCheck, title: 'Legal Documentation', desc: 'End-to-end title verification, registry and mutation support.' },
    { icon: HandCoins, title: 'Home Loan Assistance', desc: 'Pre-approved partnerships with SBI, HDFC, ICICI, LIC HFL.' },
    { icon: TrendingUp, title: 'Property Valuation', desc: 'Free market valuation reports by RERA-certified experts.' },
    { icon: MapPinned, title: 'Site Visits', desc: 'Organized guided site tours with company transport.' },
    { icon: Handshake, title: 'Post-Sale Support', desc: 'Continuous assistance even after possession & registry.' }
  ];

  const process = [
    { step: '01', title: 'Share Your Requirement', desc: 'Tell us your budget, location preference and property type.' },
    { step: '02', title: 'Curated Shortlist', desc: 'Our experts prepare a personalized list of verified properties.' },
    { step: '03', title: 'Site Visit', desc: 'Free guided visit to shortlisted sites with company transport.' },
    { step: '04', title: 'Legal & Loan', desc: 'We handle documentation and bank home-loan pre-approval.' },
    { step: '05', title: 'Possession', desc: 'Smooth registry, handover and post-sale support.' }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="services-page">
      <NCRHeader />

      {/* HERO BANNER */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden" data-testid="services-hero">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/92 via-emerald-900/80 to-green-800/65" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <nav className="flex items-center space-x-2 text-sm text-green-100 mb-8">
            <Link to="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" /> Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Our Services</span>
          </nav>

          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-300/30 rounded-full text-green-100 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-green-300" />
              Full-Service Real Estate Consultancy
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Every Property Need,{' '}
              <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                Handled End-to-End
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-green-50/90 leading-relaxed mb-8">
              NCR Dream Homes offers plots, flats, villas, farmhouses plus legal,
              loan and post-sale support across Noida, Greater Noida, Ghaziabad
              and Jewar Airport.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#property-services"
                className="inline-flex items-center px-7 py-4 bg-white text-emerald-700 rounded-xl hover:bg-green-50 transition-all font-semibold shadow-xl hover:-translate-y-0.5"
                data-testid="hero-explore-btn"
              >
                Explore Services <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-4 bg-green-500 text-white rounded-xl hover:bg-green-400 transition-all font-semibold shadow-xl hover:-translate-y-0.5 border border-green-400/50"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Quick Consult
              </a>
            </div>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,48 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* CORE PROPERTY SERVICES */}
      <section id="property-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
              Core Property Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              4 Property Categories, 20+ Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From freehold plots to luxury farmhouses — we have verified inventory across NCR.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-testid="core-services-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  to={s.link}
                  key={s.title}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                  data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${s.accent} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {s.features.map((f) => (
                        <span key={f} className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Explore {s.title} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
              Value-Added Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Beyond Just Property
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We cover every step — from first visit to possession and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <div className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-3">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Simple 5-Step Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From first enquiry to registry — we make it effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((p, idx) => (
              <div key={p.step} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="text-5xl font-bold bg-gradient-to-br from-emerald-300 to-green-400 bg-clip-text text-transparent mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{p.desc}</p>
                {idx < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-emerald-400/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Star, value: '1500+', label: 'Happy Families' },
              { icon: Home, value: '500+', label: 'Properties Sold' },
              { icon: Shield, value: '100%', label: 'Authority Approved' },
              { icon: TrendingUp, value: '15+', label: 'Years of Legacy' }
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                  <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">{t.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{t.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <TreePine className="w-14 h-14 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Build Your Real Estate Portfolio
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute property strategy call with an NCR expert.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 rounded-xl hover:bg-green-50 transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5">
              <Phone className="w-5 h-5 mr-2" /> {companyInfo.contact.mobile}
            </a>
            <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5 border border-green-300/40">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
            </a>
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white rounded-xl hover:bg-white/20 transition-all font-bold text-lg">
              <Mail className="w-5 h-5 mr-2" /> Contact Page
            </Link>
          </div>
        </div>
      </section>

      <NCRReviewsSection />
      <SEOKeywordFooter />

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            NCR Dream Homes
          </h3>
          <p className="text-gray-400 mb-4">{companyInfo.tagline}</p>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} NCR Dream Homes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NCRServicesPage;
