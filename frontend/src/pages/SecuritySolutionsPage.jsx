import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, ArrowRight, Server, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const SecuritySolutionsPage = () => {
  const services = [
    { icon: Shield, title: 'Network Security', description: 'Deploy advanced firewalls, IDS/IPS, and network segmentation to protect your infrastructure perimeter.' },
    { icon: Lock, title: 'Data Protection', description: 'Implement encryption, DLP, and data security measures ensuring compliance with industry regulations.' },
    { icon: Eye, title: 'Security Monitoring', description: 'Gain 24x7 SOC visibility with continuous threat detection and rapid incident response capabilities.' },
    { icon: AlertTriangle, title: 'Vulnerability Management', description: 'Conduct regular security audits and penetration testing to identify and remediate vulnerabilities proactively.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-semibold mb-6">
              Cybersecurity Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Security solutions,<br />
              <span className="text-red-600">crafted to protect what matters most.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Safeguard your business from evolving cyber threats with comprehensive security solutions.
              Win customer trust with better data security and compliance.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Secure Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Services designed,<br />
              <span className="text-red-600">to fortify your digital assets.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
            Don't wait until it's too late
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a comprehensive security assessment and actionable recommendations
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Request Security Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SecuritySolutionsPage;
