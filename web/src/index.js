import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';

import Home, { Landing, Contact } from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Ecommerce, { Solutions } from './views/Ecommerce/Ecommerce'


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
        <Route path="/" element={<Home />}>
          <Route path="" element={<Landing />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Ecommerce View */}
        <Route path="/ecommerce" element={<Ecommerce />}>
          <Route path="" element={<Solutions />} />
        </Route>

        {/* Auth View */}
        <Route path="/auth" element={<Auth />} />

      </Routes>
    </HashRouter>
  </React.StrictMode>
);