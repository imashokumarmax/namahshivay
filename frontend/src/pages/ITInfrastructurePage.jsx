import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Network, Server, Wifi, HardDrive, CheckCircle2, ArrowRight, Zap, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const ITInfrastructurePage = () => {
  const services = [
    { icon: Server, title: 'Data Center Solutions', description: 'Design and implement enterprise-grade data centers with high availability and disaster recovery capabilities.' },
    { icon: Network, title: 'Network Infrastructure', description: 'Build scalable network architecture for seamless connectivity and optimal performance across your organization.' },
    { icon: Wifi, title: 'Wireless Solutions', description: 'Deploy secure wireless connectivity that enables modern, flexible workplaces and mobile workforce.' },
    { icon: HardDrive, title: 'Storage Solutions', description: 'Implement reliable and scalable storage systems ensuring data accessibility, security, and compliance.' }
  ];

  const benefits = [
    '99.9% uptime guarantee with proactive monitoring',
    'Scalable infrastructure that grows with your business',
    '24x7 monitoring and rapid incident response',
    'Cost-effective hybrid cloud and on-premise solutions',
    'Comprehensive disaster recovery and business continuity',
    'Performance optimization and capacity planning'
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
                Enterprise IT Infrastructure
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                IT Infrastructure,<br />
                <span className="text-blue-600">engineered for performance.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Build a robust, scalable infrastructure that powers business growth.
                From data centers to network solutions, we deliver enterprise excellence.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" alt="IT Infrastructure" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solutions designed,<br />
              <span className="text-blue-600">to empower your digital backbone.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why choose our infrastructure services?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transform your IT infrastructure
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for a free infrastructure assessment and consultation
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Schedule Assessment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructurePage;
