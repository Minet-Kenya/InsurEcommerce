import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import AOS from "aos";
import { HashRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./index.scss";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./index.scss";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
