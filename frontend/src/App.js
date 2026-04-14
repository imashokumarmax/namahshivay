import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import NoidaPage from './pages/NoidaPage';
import GhaziabadPage from './pages/GhaziabadPage';
import GreaterNoidaPage from './pages/GreaterNoidaPage';
import GreaterNoidaWestPage from './pages/GreaterNoidaWestPage';
import JewarAirportPage from './pages/JewarAirportPage';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noida" element={<NoidaPage />} />
        <Route path="/ghaziabad" element={<GhaziabadPage />} />
        <Route path="/greater-noida" element={<GreaterNoidaPage />} />
        <Route path="/greater-noida-west" element={<GreaterNoidaWestPage />} />
        <Route path="/jewar-airport" element={<JewarAirportPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
