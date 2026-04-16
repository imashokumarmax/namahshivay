import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { HeroBannerSlider } from '../components/HeroBannerSlider';
import { Server, Cloud, Network, Shield, Cpu, Activity, BarChart, FileText, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Zap, Users, Award, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const TISSHomePage = () => {
  const coreServices = [
    {
      icon: Server,
      title: 'IBM Maximo Services',
      description: 'Transform asset management with certified IBM Maximo consulting, implementation, and support that maximizes uptime and reduces costs.',
      link: '/ibm-maximo'
    },
    {
      icon: Cloud,
      title: 'IBM MAS',
      description: 'Upgrade to cloud-native Maximo Application Suite with AI-powered insights for predictive maintenance and asset optimization.',
      link: '/maximo-application-suite'
    },
    {
      icon: Network,
      title: 'IT Infrastructure',
      description: 'Build scalable, secure infrastructure that powers your business growth with enterprise-grade solutions and 24x7 monitoring.',
      link: '/it-infrastructure-services'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Protect your digital assets with comprehensive cybersecurity solutions, ensuring compliance and peace of mind.',
      link: '/security-solutions'
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Connect, monitor, and optimize operations with smart IoT integration for real-time insights and predictive analytics.',
      link: '/iot-solutions'
    },
    {
      icon: BarChart,
      title: 'BI & Cognos',
      description: 'Transform data into actionable insights with IBM Cognos and BIRT reporting for smarter, faster decision-making.',
      link: '/bi-cognos-reporting'
    }
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Certified Expertise', description: 'IBM certified professionals with 15+ years of industry experience' },
    { icon: Clock, title: '24x7 Support', description: 'Round-the-clock technical assistance to keep your operations running' },
    { icon: Users, title: 'Client-Centric', description: 'Tailored solutions designed around your unique business needs' },
    { icon: Target, title: 'Proven Results', description: 'Track record of successful implementations across industries' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <HeroBannerSlider />

      {/* Core Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solutions that empower,<br />
              <span className="text-blue-600">your digital transformation journey.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From IBM Maximo expertise to cutting-edge IT infrastructure,
              we deliver solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
                  onClick={() => window.location.href = service.link}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href={service.link} className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why partner with TISS?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience excellence through our commitment to innovation,
              expertise, and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to transform your operations?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with our experts for a free consultation and discover how we can
              accelerate your digital transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                <span>{companyInfo.contact.mobile}</span>
              </a>
              <a href={`mailto:${companyInfo.contact.email}`} className="inline-flex items-center space-x-2 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold text-lg">
                <Mail className="w-5 h-5" />
                <span>{companyInfo.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">{companyInfo.name}</h3>
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
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/ibm-maximo" className="hover:text-white transition-colors">IBM Maximo Services</a></li>
                <li><a href="/maximo-application-suite" className="hover:text-white transition-colors">IBM MAS</a></li>
                <li><a href="/it-infrastructure-services" className="hover:text-white transition-colors">IT Infrastructure</a></li>
                <li><a href="/mobile-application-development" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Office Address</h4>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p>{companyInfo.office.address}</p>
                  <p>{companyInfo.office.locality}</p>
                  <a href={companyInfo.office.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors mt-3 inline-block">
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TISSHomePage;
