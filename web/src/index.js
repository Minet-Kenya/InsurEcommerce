// Node Modules
import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss'

// Views
import { Home, Landing, Contact } from './views/Home/Home';
import { Auth, Login, Logout, SignUp } from './views/Auth/Auth';

AOS.init({
  duration: 600,
  easing: "ease-in-out"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        {/* Auth */}
        <Route path='/auth' element={<Auth />} />
        <Route path='/auth/#login' element={<Login />} />
        <Route path='/auth/#signup' element={<SignUp />} />
        <Route path='/auth/logout' element={<Logout />} />
        {/* Retail */}
        <Route path='/retail' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
