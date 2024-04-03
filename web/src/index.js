import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";

import Home, { Landing, Contact } from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import Retail from "./views/Retail/Retail";
import Family from "./views/Family/Family";
import FamilyStatement from "./views/FamilyStatement/FamilyStatement";
import Motors from "./views/Motors/Motors";
import AutomotivePage from "./views/Automotive/AutomotivePage";

AOS.init({
  duration: 600,
  easing: "ease-in-out",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        {/* Auth */}
        <Route path="/auth" element={<Auth />} />
        {/* Retail */}
        <Route path="/retail" element={<Retail />} />
        <Route path="/retail/family-cover" element={<Family />} />
        <Route
          path="/retail/family-cover/statement"
          element={<FamilyStatement />}
        />
        <Route path="/retail/motors" element={<Motors />} />
        <Route path="/retail/motors/automotive" element={<AutomotivePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
