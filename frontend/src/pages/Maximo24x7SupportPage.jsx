import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Wrench, Settings, Clock, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const Maximo24x7SupportPage = () => {
  const services = [
    { icon: Clock, title: '24x7 Availability', description: 'Round-the-clock support for critical Maximo issues' },
    { icon: Headphones, title: 'Dedicated Support Team', description: 'Certified Maximo experts ready to help' },
    { icon: Wrench, title: 'Proactive Maintenance', description: 'Regular health checks and optimization' },
    { icon: Settings, title: 'Remote Monitoring', description: 'Continuous monitoring of Maximo environment' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-orange-900 to-orange-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              24x7 Maximo Support
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 mb-8">
              Never face downtime alone. Our expert support team is available 24/7 to keep your Maximo environment running smoothly.
            </p>
            <Button className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-6 text-lg">
              Get Support Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Support Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Icon className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-900 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Call our support hotline now
          </p>
          <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-6 bg-white text-orange-900 rounded-lg hover:bg-orange-50 transition-all font-semibold text-lg">
            {companyInfo.contact.mobile}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Maximo24x7SupportPage;
