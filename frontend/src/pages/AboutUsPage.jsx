import React from 'react';
import { NCRHeader } from '../components/NCRHeader';
import { Home, Users, Award, Target, TrendingUp, Shield, CheckCircle2, Phone, Mail, MessageCircle, Star, Heart, Handshake, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/ncr-dreamhomes-info';

const AboutUsPage = () => {
  const achievements = [
    { number: '1500+', label: 'Happy Families', icon: Users },
    { number: '500+', label: 'Properties Sold', icon: Home },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: Star }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'At NCR Dream Homes, our clients are at the heart of everything we do. We understand, anticipate, and satisfy customer needs with dedication and integrity.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'NCR Dream Homes believes in complete transparency. All our properties come with clear legal documentation and government approvals.'
    },
    {
      icon: Handshake,
      title: 'Professional Excellence',
      description: 'NCR Dream Homes team comprises certified real estate professionals committed to delivering the highest quality service and expertise.'
    },
    {
      icon: Target,
      title: 'Result Oriented',
      description: 'NCR Dream Homes focuses on achieving measurable results that exceed client expectations and deliver maximum ROI on investments.'
    }
  ];

  const whyChoosePoints = [
    'Government Approved Projects by NCR Dream Homes',
    'Expert Real Estate Consultancy Services',
    'Complete Legal Documentation Support',
    'Flexible Payment Plans Available',
    'Post-Sale Customer Support',
    '24x7 Property Assistance',
    'Best Market Prices Guaranteed',
    'Pan-NCR Property Portfolio'
  ];

  const teamMembers = [
    {
      name: 'Expert Real Estate Consultants',
      role: 'Property Advisory Team',
      description: 'NCR Dream Homes consultants are trained professionals with extensive knowledge of Delhi-NCR real estate market.'
    },
    {
      name: 'Legal Documentation Team',
      role: 'Legal & Compliance',
      description: 'NCR Dream Homes legal team ensures all properties have clear titles and proper documentation.'
    },
    {
      name: 'Customer Support Team',
      role: 'Client Relations',
      description: 'NCR Dream Homes customer support is available 24x7 to assist clients with all their property needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NCRHeader />

      {/* Hero Banner */}
      <section 
        className="relative bg-cover bg-center py-32" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-block px-6 py-2 bg-green-600/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              About NCR Dream Homes
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner in<br />
              <span className="text-green-400">Real Estate Excellence</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              NCR Dream Homes - Building Dreams, Creating Legacies Since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.label} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About NCR Dream Homes
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>NCR Dream Homes</strong> is a premier Delhi-NCR based real estate company specializing in residential plots, villas, flats, farmhouses, and commercial properties throughout Noida, Greater Noida, Jewar, Ghaziabad, Greater Noida West, and Yamuna Expressway. As one of the leading real estate consultants in the NCR region, <strong>NCR Dream Homes</strong> provides comprehensive services for all your property needs.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>NCR Dream Homes</strong> strives to give clients the highest quality service and maximum value for their property investments. Our services include professional real estate consultancy, property sales, in-house documentation processing, mortgage assistance, and complete legal support. With highly motivated and goal-oriented consultants, <strong>NCR Dream Homes</strong> strengthens its competitive edge to provide you with the best property options suited to your specific investment needs.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're looking to buy residential plots in Noida, luxury flats in Greater Noida, farmhouses near Jewar Airport, or villas in Ghaziabad, <strong>NCR Dream Homes</strong> is ready to serve you with complete transparency and professionalism. <strong>NCR Dream Homes</strong> provides buyers with current market trends and expert guidance to make informed decisions on real estate investments in the NCR region.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                alt="NCR Dream Homes - About Us" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="font-semibold text-gray-900">Customer Service Excellence:</p>
                <p><strong>NCR Dream Homes</strong> directs all efforts toward understanding, anticipating, and satisfying customer needs and expectations in a timely, cost-effective, and value-added manner. Every member of the <strong>NCR Dream Homes</strong> team is committed to delivering exceptional service.</p>
                
                <p className="font-semibold text-gray-900 mt-6">Transparent Communication:</p>
                <p><strong>NCR Dream Homes</strong> believes in seeking and sharing all information necessary and relevant to help clients make informed property decisions. Complete transparency is our commitment at <strong>NCR Dream Homes</strong>.</p>
                
                <p className="font-semibold text-gray-900 mt-6">Professional Development:</p>
                <p><strong>NCR Dream Homes</strong> encourages and supports all team members to realize their full professional potential through continuous training in technical, project management, and customer service skills.</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>NCR Dream Homes</strong> objective is to be the most trusted and profitable leader in residential plots, flats, villas, farmhouses, and commercial real estate across the Delhi-NCR region. <strong>NCR Dream Homes</strong> will serve customers' needs while continuously working on improvements and enhancements for better service delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>NCR Dream Homes</strong> recognizes the need to be flexible, entrepreneurial, and innovative both as individuals and as a company. We believe in teamwork, professionalism, and long-term decision-making that creates lasting value for our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>NCR Dream Homes</strong> endeavors to preserve and enhance our reputation for integrity, quality, and customer satisfaction through all our actions. Every property transaction handled by <strong>NCR Dream Homes</strong> reflects our commitment to excellence and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              NCR Dream Homes Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action at NCR Dream Homes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose NCR Dream Homes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose NCR Dream Homes?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NCR Dream Homes offers unmatched expertise and comprehensive services in Delhi-NCR real estate
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point) => (
              <div key={point} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              NCR Dream Homes Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to making your property dreams come true
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              NCR Dream Homes Comprehensive Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Property Consultation</h3>
              <p className="text-gray-600">Expert guidance from NCR Dream Homes consultants for property selection</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Documentation</h3>
              <p className="text-gray-600">Complete legal support and documentation by NCR Dream Homes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mortgage Assistance</h3>
              <p className="text-gray-600">Home loan facilitation services through NCR Dream Homes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Property Valuation</h3>
              <p className="text-gray-600">Free property valuation services from NCR Dream Homes experts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Site Visits</h3>
              <p className="text-gray-600">Organized property tours by NCR Dream Homes team</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Sale Support</h3>
              <p className="text-gray-600">Continuous assistance even after purchase from NCR Dream Homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Invest with NCR Dream Homes?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact NCR Dream Homes today and let our experts help you find your dream property
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              {companyInfo.contact.mobile}
            </a>
            <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-400 transition-all font-semibold text-lg shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp NCR Dream Homes
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">NCR Dream Homes</h3>
            <p className="text-gray-400 mb-4">{companyInfo.tagline}</p>
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
              <p>&copy; {new Date().getFullYear()} NCR Dream Homes. All rights reserved. Delhi-NCR Premier Real Estate Company.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
