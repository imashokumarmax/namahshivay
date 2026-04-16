import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Smartphone, TabletSmartphone, Laptop, CheckCircle2, ArrowRight, Code } from 'lucide-react';
import { Button } from '../components/ui/button';

const MobileAppDevelopmentPage = () => {
  const platforms = [
    { icon: Smartphone, title: 'iOS Development', description: 'Native iOS apps with Swift and Objective-C' },
    { icon: TabletSmartphone, title: 'Android Development', description: 'Native Android apps with Kotlin and Java' },
    { icon: Laptop, title: 'Cross-Platform', description: 'React Native, Flutter for multi-platform apps' },
    { icon: Code, title: 'Progressive Web Apps', description: 'Web apps with native-like experience' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-purple-900 to-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Application Development
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-8">
              Custom mobile apps for iOS, Android, and cross-platform. From concept to launch, we build apps that users love.
            </p>
            <Button className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-6 text-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Mobile Development Platforms
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.title}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Build Your Mobile App
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us to discuss your mobile app project
          </p>
          <Button className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-6 text-lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;
