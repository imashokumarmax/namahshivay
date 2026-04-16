import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Wrench, Settings, Clock, Headphones, CheckCircle2, ArrowRight, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const Maximo24x7SupportPage = () => {
  const services = [
    { icon: Clock, title: '24x7 Availability', description: 'Round-the-clock support ensuring your Maximo environment runs smoothly without disruption.' },
    { icon: Headphones, title: 'Dedicated Team', description: 'Certified Maximo experts ready to assist with technical issues and optimization needs.' },
    { icon: Wrench, title: 'Proactive Monitoring', description: 'Continuous health checks and performance optimization to prevent issues before they occur.' },
    { icon: Settings, title: 'Remote Management', description: 'Comprehensive monitoring and management of your Maximo infrastructure remotely.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-6">
              Always-On Support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              24x7 Maximo Support,<br />
              <span className="text-orange-600">designed to keep you running.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Never face downtime alone.
              Our expert support team ensures your Maximo environment operates at peak performance, always.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Get Support Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Support services,<br />
              <span className="text-orange-600">crafted for your peace of mind.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Need immediate assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support hotline is available 24x7 for critical issues
          </p>
          <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-6 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all font-semibold text-lg shadow-lg">
            Call {companyInfo.contact.mobile}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Maximo24x7SupportPage;
