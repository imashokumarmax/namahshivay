import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { BarChart, TrendingUp, PieChart, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const BICognosReportingPage = () => {
  const services = [
    { icon: BarChart, title: 'IBM Cognos Analytics', description: 'Enterprise BI platform with AI-powered insights' },
    { icon: TrendingUp, title: 'Custom Dashboards', description: 'Real-time dashboards tailored to your KPIs' },
    { icon: PieChart, title: 'BIRT Reporting', description: 'Open-source reporting for embedded analytics' },
    { icon: LineChart, title: 'Data Visualization', description: 'Interactive charts and visual storytelling' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-green-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Business Intelligence & Reporting
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8">
              Transform data into actionable insights with IBM Cognos Analytics and BIRT Reporting. Make smarter decisions faster.
            </p>
            <Button className="bg-white text-green-900 hover:bg-green-50 px-8 py-6 text-lg">
              Explore BI Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our BI & Reporting Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start Making Data-Driven Decisions
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us for a BI consultation
          </p>
          <Button className="bg-white text-green-900 hover:bg-green-50 px-8 py-6 text-lg">
            Request Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BICognosReportingPage;
