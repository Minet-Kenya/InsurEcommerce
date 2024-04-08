import AOS from "aos";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";

import PrivateRoute from "./components/utils/PrivateRoute";
import { AuthProvider } from "./components/forms/Authentication/Authentication";

import Home, { Landing, Contact } from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import Ecommerce, {
  CorporateProduct,
  IndividualSolutions,
  Solutions,
} from "./views/Ecommerce/Ecommerce";
import {
  BodaPackages,
  BodaPersonalInfo,
  BodaPremiumPackages,
  MotorcycleDetails,
  MotorcycleInsurance,
  MotorcycleRiderCoverDetails,
  MotorcycleSolutions,
} from "./views/MotorcycleInsurance/MotorcycleInsurance";

AOS.init({
  duration: 600,
  easing: "ease-in-out",
});

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Home View */}
          <Route path="/" element={<Home />}>
            <Route path="" element={<Landing />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Ecommerce View */}
          <Route
            path="/ecommerce"
            element={
              <PrivateRoute>
                <Ecommerce />
              </PrivateRoute>
            }
          >
            <Route path="" element={<Solutions />} />
            <Route path="corporate-product" element={<CorporateProduct />} />
            <Route
              path="individual-solutions"
              element={<IndividualSolutions />}
            />
            <Route
              path="motorcycle-insurance"
              element={<MotorcycleSolutions />}
            />

            <Route
              path="motorcycle-personal-information"
              element={<BodaPersonalInfo />}
            />
            <Route
              path="motorcycle-cover-details"
              element={<MotorcycleDetails />}
            />
            <Route
              path="motorcycle-rider-details"
              element={<MotorcycleRiderCoverDetails />}
            />
            <Route path="boda-boda-solution" element={<BodaPackages />} />
            <Route
              path="motorcycle-premium-insurance"
              element={<BodaPremiumPackages />}
            />
          </Route>

          {/* Auth View */}
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
