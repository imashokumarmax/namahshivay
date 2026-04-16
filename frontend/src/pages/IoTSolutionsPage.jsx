import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Cpu, Wifi, Zap, Activity, CheckCircle2, ArrowRight, Gauge, Radio } from 'lucide-react';
import { Button } from '../components/ui/button';

const IoTSolutionsPage = () => {
  const services = [
    { icon: Cpu, title: 'IoT Platform Development', description: 'Build custom IoT platforms for seamless device management and data orchestration at scale.' },
    { icon: Wifi, title: 'Sensor Integration', description: 'Connect and manage diverse sensors and devices for comprehensive operational visibility.' },
    { icon: Activity, title: 'Real-Time Monitoring', description: 'Implement live data streaming and monitoring dashboards for instant operational insights.' },
    { icon: Zap, title: 'Predictive Maintenance', description: 'Leverage AI-powered analytics for predictive asset maintenance and failure prevention.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold mb-6">
              Internet of Things Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              IoT solutions,<br />
              <span className="text-indigo-600">engineered to connect & optimize.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform operations with smart IoT integration.
              Connect devices, monitor in real-time, and optimize performance with predictive insights.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Discover IoT
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
              <span className="text-indigo-600">to power your connected ecosystem.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
            Ready to harness IoT power?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore how IoT can transform your operations and create new opportunities
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IoTSolutionsPage;
