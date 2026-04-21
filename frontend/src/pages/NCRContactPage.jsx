import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NCRHeader } from '../components/NCRHeader';
import { SEOKeywordFooter } from '../components/SEOKeywordFooter';
import { NCRReviewsSection } from '../components/NCRReviewsSection';
import {
  Home, Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2,
  ChevronRight, Sparkles, Building2, Navigation
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/ncr-dreamhomes-info';

const NCRContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact NCR Dream Homes | Real Estate Consultant Delhi-NCR | Call +91-8287673037';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Contact NCR Dream Homes for premium residential plots, flats, villas & farmhouses in Noida, Greater Noida, Ghaziabad & Jewar Airport. 3 offices, 24x7 support.');
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const msg = e.target.elements.message.value;
    const waMsg = `Hi NCR Dream Homes, I'm ${name} (${phone}). ${msg}`;
    window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(waMsg)}`, '_blank');
    setSubmitted(true);
  };

  const contactChannels = [
    {
      icon: Phone,
      label: 'Call Us',
      primary: companyInfo.contact.mobile,
      secondary: companyInfo.contact.phone,
      href: `tel:${companyInfo.contact.mobile}`,
      cta: 'Call Now',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      primary: companyInfo.contact.mobile,
      secondary: 'Response in 10 mins',
      href: `https://wa.me/${companyInfo.contact.whatsapp}`,
      cta: 'Chat Now',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      label: 'Email Us',
      primary: companyInfo.contact.email,
      secondary: 'Reply within 1 hour',
      href: `mailto:${companyInfo.contact.email}`,
      cta: 'Send Email',
      color: 'from-teal-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">
      <NCRHeader />

      {/* HERO BANNER */}
      <section
        className="relative min-h-[520px] flex items-center overflow-hidden"
        data-testid="contact-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80')` }}
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
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-300/30 rounded-full text-green-100 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-green-300" />
              Get In Touch • 3 Offices Across NCR
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Let&apos;s Find Your{' '}
              <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                Dream Property
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-green-50/90 leading-relaxed mb-8">
              Talk to a NCR Dream Homes specialist for plots, flats, villas or farmhouses
              across Noida, Greater Noida, Ghaziabad & Jewar Airport. Free consultation,
              site visits and loan assistance — all at one call.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${companyInfo.contact.mobile}`}
                className="inline-flex items-center px-7 py-4 bg-white text-emerald-700 rounded-xl hover:bg-green-50 transition-all font-semibold shadow-xl hover:-translate-y-0.5"
                data-testid="banner-call-btn"
              >
                <Phone className="w-5 h-5 mr-2" /> {companyInfo.contact.mobile}
              </a>
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-4 bg-green-500 text-white rounded-xl hover:bg-green-400 transition-all font-semibold shadow-xl hover:-translate-y-0.5 border border-green-400/50"
                data-testid="banner-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,48 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* CHANNELS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
              Reach Us Instantly
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pick Your Preferred Channel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our property experts are available 24x7 — response guaranteed in under 10 minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {contactChannels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={c.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-200 transition-all"
                  data-testid={`channel-${c.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${c.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">
                    {c.label}
                  </div>
                  <div className="text-xl font-bold text-gray-900 break-all">{c.primary}</div>
                  <div className="text-sm text-gray-500 mt-1">{c.secondary}</div>
                  <div className="flex items-center mt-5 text-emerald-600 font-semibold">
                    {c.cta} <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + TRUST */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
                <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
                  Send Us a Message
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Free Property Consultation
                </h2>

                {submitted ? (
                  <div className="py-10 text-center" data-testid="contact-success">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">Our NCR Dream Homes expert will reach out to you on WhatsApp shortly.</p>
                    <Button onClick={() => setSubmitted(false)} className="bg-emerald-600 hover:bg-emerald-700">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit} data-testid="contact-form">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          name="name" required type="text" placeholder="Enter your name"
                          data-testid="contact-name"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          name="phone" required type="tel" placeholder="+91-XXXXXXXXXX"
                          data-testid="contact-phone"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                        <input
                          name="email" type="email" placeholder="you@example.com"
                          data-testid="contact-email"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Interested In</label>
                        <select
                          name="type" defaultValue=""
                          data-testid="contact-type"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="" disabled>Select property type</option>
                          <option>Residential Plots</option>
                          <option>Residential Flats</option>
                          <option>Luxury Villas</option>
                          <option>Farmhouses</option>
                          <option>Commercial Property</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                      <textarea
                        name="message" rows="4" placeholder="Tell us about your property requirement..."
                        data-testid="contact-message"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      data-testid="contact-submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-6 text-base font-bold shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-2" /> Send on WhatsApp
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to receive a WhatsApp reply from NCR Dream Homes.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-3xl p-8 shadow-xl">
                <Building2 className="w-10 h-10 mb-4 text-green-200" />
                <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                <p className="text-green-100 text-sm mb-6">
                  15+ years serving NCR with 500+ successful property transactions.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    '100% authority-approved properties',
                    'Free site visits & consultations',
                    'Home-loan pre-approval assistance',
                    'End-to-end legal documentation',
                    'Zero brokerage for buyers',
                    '24x7 customer support'
                  ].map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <Clock className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-4">Working Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>Mon – Sat</span><span className="font-semibold">9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Sunday</span><span className="font-semibold">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 text-emerald-600 font-semibold flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp 24x7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES + MAPS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
              Visit Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Offices Across NCR
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drop by any of our 3 NCR Dream Homes offices — or book a free site visit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6" data-testid="offices-grid">
            {companyInfo.offices.map((office) => (
              <div key={office.name} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col">
                <div className="relative h-56 bg-emerald-50 overflow-hidden">
                  <iframe
                    title={office.name}
                    src={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}&z=15&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{office.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{office.address}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{office.locality}</p>
                  <div className="mt-auto flex gap-2">
                    <a
                      href={office.googleMapsLink}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all text-sm font-semibold"
                    >
                      <Navigation className="w-4 h-4 mr-1.5" /> Directions
                    </a>
                    <a
                      href={`tel:${companyInfo.contact.mobile}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-all text-sm font-semibold"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Call our property experts directly — no bots, just real humans with NCR expertise.
          </p>
          <a
            href={`tel:${companyInfo.contact.mobile}`}
            className="inline-flex items-center px-10 py-5 bg-white text-emerald-700 rounded-2xl hover:bg-green-50 transition-all font-bold text-xl shadow-2xl hover:-translate-y-0.5"
          >
            <Phone className="w-6 h-6 mr-3" /> {companyInfo.contact.mobile}
          </a>
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

export default NCRContactPage;
