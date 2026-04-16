import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const SecuritySolutionsPage = () => {
  const services = [
    { icon: Shield, title: 'Network Security', description: 'Firewall, IDS/IPS, and network segmentation' },
    { icon: Lock, title: 'Data Protection', description: 'Encryption, DLP, and data security compliance' },
    { icon: Eye, title: 'Security Monitoring', description: '24x7 SOC with threat detection and response' },
    { icon: AlertTriangle, title: 'Vulnerability Assessment', description: 'Regular security audits and penetration testing' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-lg sm:text-xl text-red-100 mb-8">
              Protect your business from cyber threats with comprehensive security solutions. From network security to compliance, we've got you covered.
            </p>
            <Button className="bg-white text-red-900 hover:bg-red-50 px-8 py-6 text-lg">
              Secure Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Security Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get a free security assessment today
          </p>
          <Button className="bg-white text-red-900 hover:bg-red-50 px-8 py-6 text-lg">
            Request Security Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SecuritySolutionsPage;
