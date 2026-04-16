import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Smartphone, TabletSmartphone, Laptop, CheckCircle2, ArrowRight, Code, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

const MobileAppDevelopmentPage = () => {
  const platforms = [
    { icon: Smartphone, title: 'iOS Development', description: 'Build native iOS applications with Swift delivering exceptional user experience on Apple devices.' },
    { icon: TabletSmartphone, title: 'Android Development', description: 'Create powerful Android apps with Kotlin reaching billions of users on Google Play Store.' },
    { icon: Laptop, title: 'Cross-Platform', description: 'Develop once, deploy everywhere with React Native and Flutter for cost-effective solutions.' },
    { icon: Code, title: 'Progressive Web Apps', description: 'Deliver web apps with native-like experience combining the best of web and mobile.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
              Mobile Application Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mobile experiences,<br />
              <span className="text-purple-600">crafted for modern users.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform ideas into powerful mobile applications.
              From concept to launch, we build apps that users love and businesses trust.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Platforms designed,<br />
              <span className="text-purple-600">to reach every user.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's build your mobile app
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with our mobile experts to bring your vision to life
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;
