import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Server, CheckCircle2, ArrowRight, Settings, Zap, Shield, Users, Clock, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const IBMMaximoPage = () => {
  const benefits = [
    { icon: Target, title: 'Seamless', description: 'Craft implementation strategies for the dynamic nature of asset management today.' },
    { icon: Users, title: 'Personalized', description: 'Build Maximo experiences, keeping your business requirements at the core.' },
    { icon: Shield, title: 'Secure', description: 'Win stakeholder trust with better data security, privacy & compliance.' },
    { icon: Zap, title: 'Efficient', description: 'Optimize operations to maximize asset uptime and reduce maintenance costs.' }
  ];

  const services = [
    { title: 'Implementation & Consulting', description: 'Partner with our experts to gain strategic insights and craft impactful Maximo solutions tailored to your industry.' },
    { title: 'Upgrade & Migration', description: 'Seamlessly migrate to latest Maximo versions with minimal disruption to your operations and maximum value realization.' },
    { title: 'Customization', description: 'Tailor Maximo workflows, reports, and integrations that align perfectly with your business processes.' },
    { title: 'Training & Support', description: 'Empower your team with comprehensive training and be proactive with 24x7 technical support to resolve issues faster.' },
    { title: 'Performance Tuning', description: 'Optimize Maximo performance for large-scale operations ensuring faster response times and better user experience.' },
    { title: 'Integration Services', description: 'Integrate Maximo with ERP, CMMS, and enterprise systems to create a unified operational environment.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
                Enterprise Asset Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                IBM Maximo,<br />
                <span className="text-blue-600">crafted to scale your asset performance.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your asset management journey with our certified IBM Maximo consulting.
                Transform operations, maximize uptime, and extend asset lifecycle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="IBM Maximo" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Experiences crafted,<br />
              <span className="text-blue-600">to better your asset management.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solutions that enhance,<br />
              <span className="text-blue-600">your IBM Maximo capabilities.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">30%</div>
                <div className="text-blue-100">Cost Reduction</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50%</div>
                <div className="text-blue-100">Faster Response</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99%</div>
                <div className="text-blue-100">Asset Uptime</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transform your asset management,<br />
            <span className="text-blue-600">with our IBM Maximo expertise.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Reach out to our certified consultants for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Schedule Consultation
            </Button>
            <a href={`tel:${companyInfo.contact.mobile}`} className="inline-flex items-center px-8 py-6 bg-white border-2 border-blue-600 rounded-xl text-blue-600 hover:bg-blue-50 transition-all font-semibold text-lg">
              Call {companyInfo.contact.mobile}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IBMMaximoPage;
