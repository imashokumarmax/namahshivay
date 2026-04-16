import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Cloud, CheckCircle2, ArrowRight, Sparkles, TrendingUp, Globe, Brain, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const MaximoApplicationSuitePage = () => {
  const features = [
    { icon: Brain, title: 'AI-Powered', description: 'Leverage AI and machine learning for predictive maintenance and intelligent asset insights.' },
    { icon: Cloud, title: 'Cloud-Native', description: 'Deploy on any cloud platform with scalable, flexible architecture designed for modern operations.' },
    { icon: TrendingUp, title: 'Advanced Analytics', description: 'Gain real-time visibility with predictive analytics and customizable dashboards.' },
    { icon: Globe, title: 'Mobile First', description: 'Empower field workforce with anywhere, anytime access for enhanced productivity.' }
  ];

  const modules = [
    'Maximo Manage (EAM)',
    'Maximo Health & Predict',
    'Maximo Monitor',
    'Maximo Visual Inspection',
    'Maximo Mobile',
    'Maximo Safety',
    'Maximo Assist',
    'Maximo Civil Infrastructure'
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold mb-6">
              Next-Generation Asset Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              IBM Maximo Application Suite,<br />
              <span className="text-blue-600">powered by AI for smarter decisions.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Upgrade to cloud-native, AI-powered asset management.
              Transform operations with integrated applications on a single platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                Upgrade to MAS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Capabilities designed,<br />
              <span className="text-blue-600">to elevate your asset strategy.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all text-center border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Complete suite,<br />
                <span className="text-blue-600">for comprehensive management.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Maximo Application Suite includes all the tools you need for end-to-end asset lifecycle management, from monitoring to maintenance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {modules.map((module, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{module}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a" alt="Maximo Application Suite" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to upgrade to MAS?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our certified consultants will guide you through a seamless migration journey.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Contact Our MAS Experts
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MaximoApplicationSuitePage;
