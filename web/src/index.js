// Node Modules
import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

// CSS
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';

// Views
import { Landing, Contact, Auth } from './views/Home/Home';

AOS.init({
  duration: 600,
  easing: "ease-in-out"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Home */}
        <Route path='/' element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        {/* Auth */}
        <Route path='/auth' element={<Auth />} />
        {/* Retail */}
        <Route path='/retail' element={<Landing />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);