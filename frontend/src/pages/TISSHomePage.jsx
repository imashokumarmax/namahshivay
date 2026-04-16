import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { HeroBannerSlider } from '../components/HeroBannerSlider';
import { Server, Cloud, Network, Shield, Cpu, Activity, BarChart, FileText, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const TISSHomePage = () => {
  const coreServices = [
    {
      icon: Server,
      title: 'IBM Maximo Services',
      description: 'End-to-end IBM Maximo implementation, consulting, and support services',
      link: '/ibm-maximo'
    },
    {
      icon: Cloud,
      title: 'IBM MAS',
      description: 'Upgrade to cloud-based Maximo Application Suite with AI-powered insights',
      link: '/maximo-application-suite'
    },
    {
      icon: Network,
      title: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure solutions for scalable business growth',
      link: '/it-infrastructure-services'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive cybersecurity to protect your digital assets',
      link: '/security-solutions'
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Smart monitoring and predictive maintenance with IoT integration',
      link: '/iot-solutions'
    },
    {
      icon: BarChart,
      title: 'BI & Cognos',
      description: 'Data-driven insights with IBM Cognos and BIRT reporting',
      link: '/bi-cognos-reporting'
    }
  ];

  const whyChooseUs = [
    'Certified IBM Maximo Partners',
    '15+ Years of Industry Experience',
    '24x7 Technical Support',
    'On-Time Project Delivery',
    'Custom Solutions for Every Business',
    'Proven Track Record Across Industries'
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <HeroBannerSlider />

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions and IBM Maximo expertise to drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-blue-500"
                  onClick={() => window.location.href = service.link}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
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
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Why Choose TISS?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Your trusted partner for IBM Maximo, IT Infrastructure, and enterprise solutions. We deliver excellence through expertise, innovation, and commitment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <p className="text-blue-100 mb-6">
                Ready to transform your business with cutting-edge IT solutions? Contact our experts for a free consultation.
              </p>
              <div className="space-y-4">
                <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{companyInfo.contact.mobile}</span>
                </a>
                <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">{companyInfo.contact.email}</span>
                </a>
              </div>
              <Button className="w-full mt-6 bg-white text-blue-900 hover:bg-blue-50 py-6 text-lg font-semibold">
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
              <p className="text-gray-400 mb-4">{companyInfo.tagline}</p>
              <div className="space-y-2">
                <a href={`tel:${companyInfo.contact.mobile}`} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{companyInfo.contact.mobile}</span>
                </a>
                <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{companyInfo.contact.email}</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/ibm-maximo" className="hover:text-white transition-colors">IBM Maximo Services</a></li>
                <li><a href="/maximo-application-suite" className="hover:text-white transition-colors">IBM MAS</a></li>
                <li><a href="/it-infrastructure-services" className="hover:text-white transition-colors">IT Infrastructure</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Address</h4>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p>{companyInfo.office.address}</p>
                  <p>{companyInfo.office.locality}</p>
                  <a href={companyInfo.office.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block">
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TISSHomePage;
