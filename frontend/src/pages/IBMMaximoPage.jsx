import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Server, CheckCircle2, ArrowRight, Settings, Zap, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const IBMMaximoPage = () => {
  const services = [
    { title: 'Implementation & Consulting', description: 'Full lifecycle Maximo implementation tailored to your needs' },
    { title: 'Upgrade & Migration', description: 'Seamless upgrade from legacy versions to latest Maximo' },
    { title: 'Customization', description: 'Custom workflows, reports, and integrations' },
    { title: 'Training & Support', description: '24x7 technical support and comprehensive training programs' },
    { title: 'Performance Tuning', description: 'Optimize Maximo performance for large-scale operations' },
    { title: 'Integration Services', description: 'Integrate Maximo with ERP, CMMS, and other systems' }
  ];

  const benefits = [
    'Reduce maintenance costs by up to 30%',
    'Extend asset lifecycle and improve ROI',
    'Real-time visibility into asset performance',
    'Streamline work order management',
    'Ensure regulatory compliance',
    'Mobile workforce enablement'
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-100 text-sm font-semibold mb-6">
                Enterprise Asset Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                IBM Maximo Services
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8">
                Transform your asset management with our certified IBM Maximo consulting, implementation, and support services. Maximize uptime, reduce costs, and extend asset life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="IBM Maximo" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our IBM Maximo Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Maximo solutions from implementation to ongoing support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <Settings className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                IBM Maximo delivers measurable business value across your organization
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <Server className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">30%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <Zap className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">50%</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <Shield className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Asset Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our IBM Maximo experts for a free consultation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
              Schedule Consultation
            </Button>
            <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-6 bg-blue-500/20 backdrop-blur-sm border-2 border-white rounded-lg text-white hover:bg-white hover:text-blue-900 transition-all font-semibold text-lg">
              Call {companyInfo.contact.mobile}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IBMMaximoPage;
