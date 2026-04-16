import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Target, Users, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const AboutPage = () => {
  const values = [
    { icon: Target, title: 'Mission-Driven', description: 'Empower businesses through innovative technology solutions' },
    { icon: Users, title: 'Client Success', description: 'Partner for long-term growth and transformation' },
    { icon: Award, title: 'Certified Excellence', description: 'IBM certified professionals with proven expertise' },
    { icon: Clock, title: 'Reliable Support', description: '24x7 commitment to your operational success' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building resilience,<br />
              <span className="text-blue-600">through innovation.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Your trusted partner for IBM Maximo, IT Infrastructure, and enterprise solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Who we are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {companyInfo.name} is a leading provider of IBM Maximo consulting, IT infrastructure services, and enterprise solutions. With 15+ years of experience, we've partnered with organizations across industries to optimize operations and accelerate digital transformation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As certified IBM partners, we deliver end-to-end implementation, customization, and 24x7 support services. Our certified professionals bring deep expertise in asset management, IT infrastructure, cybersecurity, IoT, and business intelligence.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team collaboration" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Values that drive,<br />
              <span className="text-blue-600">our commitment to excellence.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all text-center border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Partner with us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's build something transformative together
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
