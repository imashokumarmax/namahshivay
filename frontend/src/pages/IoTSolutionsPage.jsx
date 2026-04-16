import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Cpu, Wifi, Zap, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const IoTSolutionsPage = () => {
  const services = [
    { icon: Cpu, title: 'IoT Platform Development', description: 'Custom IoT platforms for device management' },
    { icon: Wifi, title: 'Sensor Integration', description: 'Connect and manage sensors and devices' },
    { icon: Activity, title: 'Real-Time Monitoring', description: 'Live data streaming and monitoring dashboards' },
    { icon: Zap, title: 'Predictive Maintenance', description: 'AI-powered predictive analytics for assets' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              IoT Solutions
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8">
              Connect, monitor, and optimize your operations with IoT and smart monitoring. From sensors to insights, we deliver end-to-end IoT solutions.
            </p>
            <Button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-6 text-lg">
              Discover IoT
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our IoT Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Harness the Power of IoT?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Contact us to explore IoT opportunities
          </p>
          <Button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IoTSolutionsPage;
