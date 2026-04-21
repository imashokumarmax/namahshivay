import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// NCR Dream Homes Pages
import NCRDreamHomesPage from './pages/NCRDreamHomesPage';
import PropertyPage from './pages/PropertyPage';
import AboutUsPage from './pages/AboutUsPage';
import NCRContactPage from './pages/NCRContactPage';
import NCRServicesPage from './pages/NCRServicesPage';
import NCRReviewsPage from './pages/NCRReviewsPage';

// TISS Pages (keeping for reference)
import TISSHomePage from './pages/TISSHomePage';
import IBMMaximoPage from './pages/IBMMaximoPage';
import MaximoApplicationSuitePage from './pages/MaximoApplicationSuitePage';
import ITInfrastructurePage from './pages/ITInfrastructurePage';
import SecuritySolutionsPage from './pages/SecuritySolutionsPage';
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage';
import BICognosReportingPage from './pages/BICognosReportingPage';
import IoTSolutionsPage from './pages/IoTSolutionsPage';
import Maximo24x7SupportPage from './pages/Maximo24x7SupportPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* NCR Dream Homes - Real Estate Website */}
        <Route path="/" element={<NCRDreamHomesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<NCRContactPage />} />
        <Route path="/services" element={<NCRServicesPage />} />
        <Route path="/reviews" element={<NCRReviewsPage />} />
        
        {/* Property Pages - General */}
        <Route path="/greater-noida-property" element={<PropertyPage />} />
        <Route path="/noida-property" element={<PropertyPage />} />
        <Route path="/greater-noida-west-property" element={<PropertyPage />} />
        <Route path="/ghaziabad-property" element={<PropertyPage />} />
        <Route path="/jewar-airport-property" element={<PropertyPage />} />
        
        {/* Property Pages - Residential Plots */}
        <Route path="/greater-noida-residential-plots" element={<PropertyPage />} />
        <Route path="/noida-residential-plots" element={<PropertyPage />} />
        <Route path="/greater-noida-west-residential-plots" element={<PropertyPage />} />
        <Route path="/ghaziabad-residential-plots" element={<PropertyPage />} />
        <Route path="/jewar-airport-residential-plots" element={<PropertyPage />} />
        
        {/* Property Pages - Residential Flats */}
        <Route path="/greater-noida-residential-flats" element={<PropertyPage />} />
        <Route path="/noida-residential-flats" element={<PropertyPage />} />
        <Route path="/greater-noida-west-residential-flats" element={<PropertyPage />} />
        <Route path="/ghaziabad-residential-flats" element={<PropertyPage />} />
        <Route path="/jewar-airport-residential-flats" element={<PropertyPage />} />
        
        {/* Property Pages - Farmhouses */}
        <Route path="/greater-noida-farmhouse" element={<PropertyPage />} />
        <Route path="/noida-farmhouse" element={<PropertyPage />} />
        <Route path="/greater-noida-west-farmhouse" element={<PropertyPage />} />
        <Route path="/ghaziabad-farmhouse" element={<PropertyPage />} />
        <Route path="/jewar-airport-farmhouse" element={<PropertyPage />} />
        
        {/* TISS Pages - Alternate routes */}
        <Route path="/tiss" element={<TISSHomePage />} />
        <Route path="/ibm-maximo" element={<IBMMaximoPage />} />
        <Route path="/maximo-application-suite" element={<MaximoApplicationSuitePage />} />
        <Route path="/upgrade-to-mas" element={<MaximoApplicationSuitePage />} />
        <Route path="/it-infrastructure-services" element={<ITInfrastructurePage />} />
        <Route path="/network-infrastructure-solutions" element={<ITInfrastructurePage />} />
        <Route path="/security-solutions" element={<SecuritySolutionsPage />} />
        <Route path="/mobile-application-development" element={<MobileAppDevelopmentPage />} />
        <Route path="/bi-cognos-reporting" element={<BICognosReportingPage />} />
        <Route path="/birt-reporting" element={<BICognosReportingPage />} />
        <Route path="/iot-solutions" element={<IoTSolutionsPage />} />
        <Route path="/maximo-24x7-support" element={<Maximo24x7SupportPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
