// Node Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
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

// Local Components
import App from './App';

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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
