import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Cloud, CheckCircle2, ArrowRight, Sparkles, TrendingUp, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const MaximoApplicationSuitePage = () => {
  const features = [
    { icon: Sparkles, title: 'AI-Powered Insights', description: 'Predictive maintenance with AI and machine learning' },
    { icon: Cloud, title: 'Cloud-Native Architecture', description: 'Scalable, flexible deployment on any cloud platform' },
    { icon: TrendingUp, title: 'Advanced Analytics', description: 'Real-time dashboards and predictive analytics' },
    { icon: Globe, title: 'Mobile First', description: 'Anywhere, anytime access for field workforce' }
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-100 text-sm font-semibold mb-6">
              Next-Generation Asset Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              IBM Maximo Application Suite (MAS)
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Upgrade to cloud-native, AI-powered asset management. Maximo Application Suite brings together all the power of Maximo with AI, IoT, and analytics on a single integrated platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
                Upgrade to MAS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Upgrade to MAS?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern capabilities that transform asset management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Complete Suite of Applications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Maximo Application Suite includes all the tools you need for comprehensive asset lifecycle management
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
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a" alt="Maximo Application Suite" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Upgrade to MAS?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our certified consultants will guide you through a seamless migration
          </p>
          <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
            Contact Our MAS Experts
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MaximoApplicationSuitePage;
