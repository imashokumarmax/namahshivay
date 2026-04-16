import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { BarChart, TrendingUp, PieChart, LineChart, CheckCircle2, ArrowRight, Brain } from 'lucide-react';
import { Button } from '../components/ui/button';

const BICognosReportingPage = () => {
  const services = [
    { icon: BarChart, title: 'IBM Cognos Analytics', description: 'Deploy enterprise BI platform with AI-powered insights for data-driven decision making.' },
    { icon: TrendingUp, title: 'Custom Dashboards', description: 'Create real-time dashboards tailored to your KPIs with intuitive visual storytelling.' },
    { icon: PieChart, title: 'BIRT Reporting', description: 'Implement open-source reporting framework for embedded analytics and operational reporting.' },
    { icon: LineChart, title: 'Data Visualization', description: 'Transform complex data into interactive charts and compelling visual narratives.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold mb-6">
              Business Intelligence & Reporting
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Analytics & insights,<br />
              <span className="text-green-600">designed for smarter decisions.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform data into actionable insights with IBM Cognos Analytics and BIRT Reporting.
              Empower your organization to make data-driven decisions faster.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Explore BI Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solutions crafted,<br />
              <span className="text-green-600">to unlock data potential.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
            Start making data-driven decisions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for a BI consultation and discover insights hidden in your data
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Request Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BICognosReportingPage;
