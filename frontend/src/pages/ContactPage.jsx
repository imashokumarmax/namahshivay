import React from 'react';
import { TISSHeader } from '../components/TISSHeader';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/tiss-info';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <TISSHeader />
      
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Ready to transform your business? Let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91-XXXXXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl shadow-lg">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Reach out directly via phone, email, or visit our office.
                  We're here to help transform your business.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
                    <a href={`tel:${companyInfo.contact.mobile}`} className="text-blue-600 hover:text-blue-700 font-medium block">{companyInfo.contact.mobile}</a>
                    <a href={`tel:${companyInfo.contact.phone}`} className="text-blue-600 hover:text-blue-700 font-medium block">{companyInfo.contact.phone}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-blue-600 hover:text-blue-700 font-medium">{companyInfo.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Office Address</h3>
                    <p className="text-gray-600">{companyInfo.office.fullAddress}</p>
                    <a href={companyInfo.office.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mt-2 inline-block font-medium">
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 shadow-lg">
                <iframe
                  src={`https://www.google.com/maps?q=${companyInfo.office.coordinates.lat},${companyInfo.office.coordinates.lng}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
