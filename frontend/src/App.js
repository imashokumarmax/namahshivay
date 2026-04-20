import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// NCR Dream Homes Pages
import NCRDreamHomesPage from './pages/NCRDreamHomesPage';

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
