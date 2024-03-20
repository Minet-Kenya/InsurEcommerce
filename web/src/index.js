// Node Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import './custom.scss'

// Views
import { Home, Landing, Contact, Login } from './views/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
