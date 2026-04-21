import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NCRHeader } from '../components/NCRHeader';
import { SEOKeywordFooter } from '../components/SEOKeywordFooter';
import { NCRReviewsSection } from '../components/NCRReviewsSection';
import {
  Home, MapPin, CheckCircle2, Phone, Mail, MessageCircle, Star, ArrowRight,
  ChevronRight, Shield, TrendingUp, Award, IndianRupee, Sparkles, Building2,
  TreePine, Landmark, ChevronDown, Trees, Trophy, HandCoins
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/ncr-dreamhomes-info';
import { propertyPagesData } from '../data/property-pages-data';

const PropertyPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\/+/, '').toLowerCase();
  const pageData = propertyPagesData[slug];
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (pageData?.title) {
      document.title = pageData.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageData.metaDescription || '');
      }
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', pageData.keywords || '');
      window.scrollTo(0, 0);
    }
  }, [slug, pageData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white">
        <NCRHeader />
        <div className="py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <Link to="/" className="text-green-600 hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const gallery = pageData.gallery && pageData.gallery.length > 0 ? pageData.gallery : [pageData.bannerImage];
  const whatsappLink = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(`Hi NCR Dream Homes, I'm interested in ${pageData.heroLocation} properties.`)}`;

  return (
    <div className="min-h-screen bg-white" data-testid="property-page">
      <NCRHeader />

      {/* ============= HERO BANNER ============= */}
      <section
        className="relative min-h-[620px] flex items-center overflow-hidden"
        data-testid="property-hero-banner"
      >
        {/* Background image + gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${pageData.bannerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/75 to-green-800/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.25),transparent_60%)]" />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-green-100 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" /> Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{pageData.breadcrumb || pageData.heroLocation}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 text-white">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-300/30 rounded-full text-green-100 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-green-300" />
                {pageData.badge || 'NCR Dream Homes'}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                {pageData.heroTitle}{' '}
                <span className="block mt-2 bg-gradient-to-r from-green-300 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                  {pageData.heroLocation}
                </span>
              </h1>

              <p className="text-lg sm:text-xl mb-8 text-green-50/90 leading-relaxed max-w-2xl">
                {pageData.heroDescription}
              </p>

              {/* Price strip */}
              {pageData.priceFrom && (
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 mb-8">
                  <IndianRupee className="w-5 h-5 text-green-300" />
                  <div>
                    <div className="text-xs text-green-200 uppercase tracking-wider">Starting From</div>
                    <div className="text-xl font-bold text-white">{pageData.priceFrom}</div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${companyInfo.contact.mobile}`}
                  data-testid="hero-call-btn"
                  className="inline-flex items-center px-7 py-4 bg-white text-emerald-700 rounded-xl hover:bg-green-50 transition-all font-semibold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 mr-2" /> Call {companyInfo.contact.mobile}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-whatsapp-btn"
                  className="inline-flex items-center px-7 py-4 bg-green-500 text-white rounded-xl hover:bg-green-400 transition-all font-semibold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 border border-green-400/50"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-green-100">1500+ Happy Families</span>
                </div>
                <div className="flex items-center gap-2 text-green-100">
                  <Shield className="w-4 h-4 text-green-300" /> 100% Verified Properties
                </div>
                <div className="flex items-center gap-2 text-green-100">
                  <Award className="w-4 h-4 text-green-300" /> RERA Approved
                </div>
              </div>
            </div>

            {/* Image stack on right */}
            <div className="lg:col-span-2 hidden lg:block relative">
              <div className="relative">
                <img
                  src={gallery[0]}
                  alt={pageData.heroLocation}
                  className="rounded-3xl shadow-2xl border-4 border-white/20 w-full h-[380px] object-cover"
                />
                {gallery[1] && (
                  <img
                    src={gallery[1]}
                    alt={pageData.heroLocation}
                    className="absolute -bottom-10 -left-10 w-44 h-44 rounded-2xl shadow-2xl border-4 border-white/40 object-cover"
                  />
                )}
                {gallery[2] && (
                  <img
                    src={gallery[2]}
                    alt={pageData.heroLocation}
                    className="absolute -top-8 -right-8 w-36 h-36 rounded-2xl shadow-2xl border-4 border-white/40 object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,48 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* ============= KEY METRICS STRIP ============= */}
      <section className="relative -mt-6 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: Trophy, label: 'Years Legacy', value: '15+' },
              { icon: Home, label: 'Properties Sold', value: '500+' },
              { icon: Shield, label: 'Authority Approved', value: '100%' },
              { icon: TrendingUp, label: 'Avg. ROI', value: '3X+' }
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="p-5 text-center">
                  <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= INTRO + GALLERY ============= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
                Overview
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About {pageData.heroLocation} Properties
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full mb-6" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {pageData.content.intro}
              </p>

              <div className="space-y-3">
                {pageData.content.features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image gallery */}
            <div data-testid="property-gallery">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={gallery[activeImage]} alt={pageData.heroLocation} className="w-full h-[460px] object-cover transition-all duration-500" />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-emerald-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5" /> {pageData.heroLocation}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {gallery.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(idx)}
                    className={`rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-emerald-500 shadow-lg scale-105' : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                    data-testid={`gallery-thumb-${idx}`}
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-20 object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= HIGHLIGHTS ============= */}
      {pageData.highlights && (
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">Why This Investment</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Key Highlights of {pageData.heroLocation}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every NCR Dream Homes property comes with these non-negotiable guarantees.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageData.highlights.map((h, idx) => (
                <div
                  key={h}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-md group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <div className="text-gray-900 font-semibold leading-snug">{h}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= AMENITIES ============= */}
      {pageData.amenities && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">Amenities</div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  World-Class Amenities in {pageData.heroLocation}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Every project partnered with NCR Dream Homes delivers modern, family-friendly amenities designed for premium living.
                </p>
                <img src={gallery[1] || gallery[0]} alt="amenities" className="rounded-3xl shadow-xl w-full h-80 object-cover" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {pageData.amenities.map((a) => (
                  <div key={a} className="flex items-center space-x-3 bg-gradient-to-r from-emerald-50 to-white p-4 rounded-xl border border-emerald-100">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============= CONNECTIVITY ============= */}
      {pageData.connectivity && (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-14">
              <div className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-3">Location Advantage</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Connectivity & Neighbourhood
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {pageData.heroLocation} is one of the best-connected micro-markets in Delhi-NCR.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.connectivity.map((c) => (
                <div key={c} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all">
                  <div className="w-11 h-11 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-white font-medium leading-snug pt-1">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= CONSULT FORM + WHY US ============= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">Why NCR Dream Homes</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in {pageData.heroLocation}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                NCR Dream Homes is the most trusted real-estate consultant in {pageData.heroLocation}. We offer only authority-approved, legally verified properties with complete end-to-end support from site visit to registry.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Shield, title: 'Government Approved Projects', desc: 'All properties authority approved with RERA' },
                  { icon: HandCoins, title: 'Best Price Guarantee', desc: 'Direct developer rates, no hidden charges' },
                  { icon: Landmark, title: 'Home Loan Support', desc: 'Pre-approved partnerships with SBI, HDFC, ICICI, LIC HFL' },
                  { icon: Trees, title: 'Post-Sale Support', desc: 'Assistance on registry, mutation & possession' }
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{title}</h4>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-10 rounded-3xl shadow-2xl sticky top-8">
              <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold mb-4">
                <Sparkles className="w-3 h-3 mr-1.5" /> FREE CONSULTATION
              </div>
              <h3 className="text-3xl font-bold mb-2">Talk to a {pageData.heroLocation} Expert</h3>
              <p className="text-green-100 mb-6">Get site visit, price list, payment plan & loan assistance — all free.</p>
              <form
                className="space-y-3"
                data-testid="consult-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.elements.name.value;
                  const phone = e.target.elements.phone.value;
                  const type = e.target.elements.type.value;
                  const msg = `Hi NCR Dream Homes, I'm ${name} (${phone}). I'm interested in ${type} at ${pageData.heroLocation}.`;
                  window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
                }}
              >
                <input
                  name="name" required type="text" placeholder="Your Name"
                  data-testid="consult-name"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 placeholder:text-green-100 text-white focus:ring-2 focus:ring-white focus:outline-none"
                />
                <input
                  name="phone" required type="tel" placeholder="Phone Number"
                  data-testid="consult-phone"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 placeholder:text-green-100 text-white focus:ring-2 focus:ring-white focus:outline-none"
                />
                <input
                  name="email" type="email" placeholder="Email Address"
                  data-testid="consult-email"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 placeholder:text-green-100 text-white focus:ring-2 focus:ring-white focus:outline-none"
                />
                <select
                  name="type" required defaultValue=""
                  data-testid="consult-type"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <option value="" disabled className="text-gray-700">Select Property Type</option>
                  <option value="Residential Plots" className="text-gray-700">Residential Plots</option>
                  <option value="Residential Flats" className="text-gray-700">Residential Flats</option>
                  <option value="Luxury Villa" className="text-gray-700">Luxury Villa</option>
                  <option value="Farmhouse" className="text-gray-700">Farmhouse</option>
                </select>
                <Button
                  type="submit"
                  data-testid="consult-submit"
                  className="w-full bg-white text-emerald-700 hover:bg-green-50 py-6 text-base font-bold shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Get Free Consultation
                </Button>
              </form>
              <p className="text-xs text-green-100 mt-4 text-center">
                Or call <a href={`tel:${companyInfo.contact.mobile}`} className="underline font-semibold">{companyInfo.contact.mobile}</a> — Response in 10 mins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FAQ ============= */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-emerald-50/40 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">FAQs</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4" data-testid="property-faqs">
              {pageData.faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    data-testid={`faq-toggle-${idx}`}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= FINAL CTA ============= */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Building2 className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Own Your Dream Property in {pageData.heroLocation}?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Connect with NCR Dream Homes today. Site visits, price list & payment plans — all at your fingertips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${companyInfo.contact.mobile}`}
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 rounded-xl hover:bg-green-50 transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5"
              data-testid="cta-call-btn"
            >
              <Phone className="w-5 h-5 mr-2" /> {companyInfo.contact.mobile}
            </a>
            <a
              href={whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5 border border-green-300/40"
              data-testid="cta-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Now
            </a>
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white rounded-xl hover:bg-white/20 transition-all font-bold text-lg"
              data-testid="cta-email-btn"
            >
              <Mail className="w-5 h-5 mr-2" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ============= REVIEWS + SEO FOOTER ============= */}
      <NCRReviewsSection />
      <SEOKeywordFooter />
    </div>
  );
};

export default PropertyPage;
