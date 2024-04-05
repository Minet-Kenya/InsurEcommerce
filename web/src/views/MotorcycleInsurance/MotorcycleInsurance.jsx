import React from "react";
import Header from "../../components/layout/Header/Header";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Footer from "../../components/layout/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./MotorcycleInsurance";
import Sidebar from "../../components/layout/Sidebar/Sidebar";

export function MotorcycleInsurance() {
  return (
    <>
      <div id="retail" className="retail vh-100 d-flex flex-column">
        <Header view="Retail" version="v1" />
        <div className="flex-grow-1 mheader position-relative">
          {/* <Outlet /> */}
        </div>
        <Footer view="Retail" version="v1" />
      </div>
      <Preloader />
      <BackToTopBtn />
    </>
  );
}

export function MotorcycleSolutions() {
  return (
    <>
      <Sidebar view="MotorcycleInsurance" />
      <main
        id="dashboard"
        className="dashboard h-100 d-flex flex-column"
      ></main>
    </>
  );
}
