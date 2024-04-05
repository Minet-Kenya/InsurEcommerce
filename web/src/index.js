import AOS from "aos";
import { HashRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";

import Ecommerce, {
  CorporateProduct,
  IndividualSolutions,
  Solutions,
} from "./views/Ecommerce/Ecommerce";

import Home, { Landing, Contact } from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
// import Retail from "./views/Retail/Retail";
import Family from "./views/Family/Family";
import FamilyStatement from "./views/FamilyStatement/FamilyStatement";
import Motors from "./views/Motors/Motors";
import AutomotivePage from "./views/Automotive/AutomotivePage";
import BodaValidationPage from "./views/BodaValidationPage/BodaValidationPage";
import BodaPackages from "./views/BodaPackages/BodaPackages";
import MotorPackages from "./views/MotorPackages/MotorPackages";

AOS.init({
  duration: 600,
  easing: "ease-in-out",
});
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Home */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* Auth */}
        <Route path="/auth" element={<Auth />} />
        {/* Retail */}
        {/* <Route path="/retail" element={<Retail />} /> */}
        <Route path="/retail/family-cover" element={<Family />} />
        <Route
          path="/retail/family-cover/statement"
          element={<FamilyStatement />}
        />
        <Route path="/retail/motors" element={<Motors />} />
        <Route path="/retail/motors/automotive" element={<AutomotivePage />} />
        <Route path="/retail/motors/packages" element={<MotorPackages />} />
        <Route
          path="/retail/boda/validation"
          element={<BodaValidationPage />}
        />
        <Route path="/retail/boda/packages" element={<BodaPackages />} />
        {/* Home View */}
        <Route path="/" element={<Home />}>
          <Route path="" element={<Landing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Ecommerce View */}
        <Route path="/ecommerce" element={<Ecommerce />}>
          <Route path="" element={<Solutions />} />
          <Route path="corporate-product" element={<CorporateProduct />} />
          <Route
            path="individual-solutions"
            element={<IndividualSolutions />}
          />
        </Route>
        {/* Auth View */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </HashRouter>
    <App />
  </React.StrictMode>
);
