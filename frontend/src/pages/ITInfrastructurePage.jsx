import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Network, Server, Wifi, HardDrive, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const ITInfrastructurePage = () => {
  const services = [
    { icon: Server, title: 'Data Center Solutions', description: 'Enterprise-grade data center design, implementation, and management' },
    { icon: Network, title: 'Network Infrastructure', description: 'Scalable network architecture for high-performance connectivity' },
    { icon: Wifi, title: 'Wireless Solutions', description: 'Seamless wireless connectivity for modern workplaces' },
    { icon: HardDrive, title: 'Storage Solutions', description: 'Reliable and scalable storage systems for critical data' }
  ];

  const benefits = [
    '99.9% uptime guarantee',
    'Scalable infrastructure that grows with your business',
    '24x7 monitoring and support',
    'Cost-effective cloud and on-premise solutions',
    'Disaster recovery and business continuity',
    'Performance optimization and tuning'
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                IT Infrastructure Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8">
                Build a robust, scalable, and secure IT infrastructure that powers your business growth. From data centers to network solutions, we deliver excellence.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" alt="IT Infrastructure" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Infrastructure Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Infrastructure Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Transform Your IT Infrastructure
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us for a free infrastructure assessment
          </p>
          <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
            Schedule Assessment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructurePage;
