import AOS from 'aos';
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';

import PrivateRoute from './utils/PrivateRoute';
import Home, { Landing, Contact } from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Ecommerce, { CorporateProduct, IndividualSolutions, Solutions } from './views/Ecommerce/Ecommerce'


AOS.init({
    duration: 600,
    easing: "ease-in-out"
});

function App() {
    return (
        <Router>
            <Routes>

                {/* Home View */}
                <Route path="/" element={<Home />}>
                    <Route path="" element={<Landing />} />
                    <Route path="contact" element={<Contact />} />
                </Route>

                {/* Ecommerce View */}
                <Route path="/ecommerce" element={
                    <PrivateRoute>
                        <Ecommerce />
                    </PrivateRoute>
                }>
                    <Route path="" element={<Solutions />} />
                    <Route path="corporate-product" element={<CorporateProduct />} />
                    <Route path="individual-solutions" element={<IndividualSolutions />} />
                </Route>

                {/* Auth View */}
                <Route path="/auth" element={<Auth />} />

            </Routes>
        </Router>
    )
}

export default App