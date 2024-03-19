// Node Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// CSS/Styles
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss'

// Local Views
import {Landing} from './views/Landing/Landing';
import {Contact} from './views/Contact/Contact';
import {Auth} from './views/Auth/Auth';

// Initialize AOS
AOS.init({
  duration: 600,
  easing: "ease-in-out"
});

// Initialize GLightbox
const glightbox = GLightbox({
  selector: '.glightbox'
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {

  modules: [Pagination],
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </BrowserRouter>
);
