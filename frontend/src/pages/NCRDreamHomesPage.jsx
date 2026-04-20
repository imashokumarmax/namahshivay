import React, { useState } from 'react';
import { NCRHeader } from '../components/NCRHeader';
import { Home, Building2, TreePine, MapPin, CheckCircle2, ArrowRight, Phone, Mail, MessageCircle, Send, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo, keywords } from '../data/ncr-dreamhomes-info';

const NCRDreamHomesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi NCR Dream Homes! I'm ${formData.name}. Interested in ${formData.property}. Contact: ${formData.phone}`;
    window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const properties = [
    {
      icon: Home,
      title: 'Residential Plots Noida',
      description: 'NCR Dream Homes offers premium residential plots in Noida with best connectivity',
      locations: ['Sector 150', 'Sector 135', 'Sector 168'],
      price: 'Starting ₹60 Lakh*'
    },
    {
      icon: TreePine,
      title: 'Farm Houses Yamuna Expressway',
      description: 'NCR Dream Homes presents luxury farmhouses on Yamuna Expressway near Jewar Airport',
      locations: ['Film City Area', 'Jewar', 'Sector 150'],
      price: 'Starting ₹1.5 Cr*'
    },
    {
      icon: Building2,
      title: 'Residential Flats Greater Noida',
      description: 'NCR Dream Homes residential flats in Greater Noida offer world-class living',
      locations: ['Greater Noida West', 'Jewar', 'Yamuna Expressway'],
      price: 'Starting ₹45 Lakh*'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NCRHeader />
      <h1>NCR Dream Homes - Coming Soon</h1>
      <p>Website under construction</p>
    </div>
  );
};

export default NCRDreamHomesPage;
