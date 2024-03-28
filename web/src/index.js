import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';

import Home, { Landing, Contact } from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Retail, { Solutions } from './views/Retail/Retail'


AOS.init({
  duration: 600,
  easing: "ease-in-out"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Home View */}
        <Route path="/landing" element={<Home />}>
          <Route path="" element={<Landing />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Auth View */}
        <Route path="/auth" element={<Auth />} />

        {/* Retail View */}
        <Route path="/" element={<Retail />}>
          <Route path="" element={<Solutions />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);