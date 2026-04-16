import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Target, Users, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const AboutPage = () => {
  const values = [
    { icon: Target, title: 'Mission-Driven', description: 'Empowering businesses with world-class IT solutions' },
    { icon: Users, title: 'Customer-Centric', description: 'Your success is our success' },
    { icon: Award, title: 'Excellence', description: 'Certified experts delivering quality every time' },
    { icon: Briefcase, title: 'Innovation', description: 'Staying ahead with cutting-edge technology' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About {companyInfo.shortName}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Your Trusted Partner for IBM Maximo, IT Infrastructure, and Enterprise Solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {companyInfo.name} is a leading provider of IBM Maximo consulting, IT infrastructure services, and custom software development. With over 15 years of experience, we've helped hundreds of organizations across industries optimize their operations and achieve digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As certified IBM Maximo partners, we specialize in end-to-end implementation, upgrade, customization, and support services. Our team of certified professionals brings deep expertise in asset management, enterprise IT, cybersecurity, IoT, and business intelligence.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team collaboration" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build something great together
          </p>
          <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
