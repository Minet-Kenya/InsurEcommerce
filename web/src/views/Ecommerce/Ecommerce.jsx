import { Link, Outlet } from "react-router-dom";

import solutions1 from "../../assets/images/solutions-1-main.png";
import solutions2 from "../../assets/images/solutions-2-main.png";
import solutions3 from "../../assets/images/solutions-3-main.png";
import solutions4 from "../../assets/images/solutions-4-main.png";

import corporate1 from "../../assets/images/corporate-1.png";
import corporate2 from "../../assets/images/corporate-2.png";
import corporate3 from "../../assets/images/corporate-3.png";
import corporate4 from "../../assets/images/corporate-4.png";

import ind1 from "../../assets/images/ind-1.png";
import ind2 from "../../assets/images/ind-2.png";
import ind3 from "../../assets/images/ind-3.png";
import ind4 from "../../assets/images/ind-4.png";
import ind5 from "../../assets/images/ind-5.png";
import ind6 from "../../assets/images/ind-6.png";
import ind7 from "../../assets/images/ind-7.png";
import ind8 from "../../assets/images/ind-8.png";
import ind9 from "../../assets/images/ind-9.png";
import ind10 from "../../assets/images/ind-10.png";
import ind11 from "../../assets/images/ind-11.png";
import ind12 from "../../assets/images/ind-12.png";

import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import Footer from "../../components/layout/Footer/Footer";
import "./Ecommerce.css";

export default function Ecommerce() {
  return (
    <>
      <div id="retail" className="retail vh-100 d-flex flex-column">
        <Header view="Retail" version="v1" />
        <div className="flex-grow-1 mheader position-relative">
          <Outlet />
        </div>
        <Footer view="Retail" version="v1" />
      </div>
      <Preloader />
      <BackToTopBtn />
    </>
  );
}

export function Solutions() {
  return (
    <>
      <Sidebar view="Solutions" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Solutions
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column justify-content-center mb-3"
          data-aos="fade-in"
        >
          <div className="row g-4 h-100">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <Link
                className="solutions-img individual-solutions position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                to="/ecommerce/individual-solutions"
              >
                <img
                  src={solutions1}
                  width=""
                  height=""
                  alt="individual-solutions icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Individual Solutions</h2>
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img business-solutions position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://retail.minet.co.ke/biznasure/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={solutions2}
                  width=""
                  height=""
                  alt="business-solutions icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Business Solutions</h2>
              </a>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <Link
                className="solutions-img corporate-product position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                to="/ecommerce/corporate-product"
              >
                <img
                  src={solutions3}
                  width=""
                  height=""
                  alt="corporate-product icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Corporate Solutions</h2>
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img teachers-medical-scheme position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://collaborationkenya.minet.com/MinetKe/tsc"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={solutions4}
                  width=""
                  height=""
                  alt="teachers-medical-scheme icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Teacher's Medical Scheme Portal</h2>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function IndividualSolutions() {
  return (
    <>
      <Sidebar view="IndividualSolutions" />
      <main
        id="individual_solutions"
        className="individual_solutions h-100 d-flex flex-column"
      >
        <div className="pagetitle z-0">
          <h1 className="text-white">Individual Solutions</h1>
          <nav>
            <ol className="breadcrumb mt-2">
              <li className="breadcrumb-item">
                <Link
                  to="/ecommerce"
                  className="bg-primary text-light px-3 rounded"
                >
                  Our Solutions
                </Link>
              </li>
              <li className="breadcrumb-item active text-light">
                Individual Solutions
              </li>
            </ol>
          </nav>
        </div>
        <section
          id="retail-content"
          className="flex-grow-1 container-fluid text-center d-flex flex-column justify-content-center mb-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="row g-4 h-100">
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img education-policy position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://play.google.com/store/apps/details?id=com.minet.minetretail"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind1}
                  width=""
                  height=""
                  alt="education-policy icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Education Policy</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img individual-life position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://mss.minet.co.ke/Login?ReturnUrl=%2Fdashboard"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind2}
                  width=""
                  height=""
                  alt="individual-life icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Individual Life Insurance</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img individual-pension position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://play.google.com/store/apps/details?id=com.minet.minetretail"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind3}
                  width=""
                  height=""
                  alt="individual-pension icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Individual Pension Plan</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img home-insurance position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind4}
                  width=""
                  height=""
                  alt="home-insurance icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Home Insurance</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img medical-cover position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind5}
                  width=""
                  height=""
                  alt="medical-cover icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Medical Cover</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <Link
                className="solutions-img motor-insurance position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                to="/ecommerce/motor-insurance-quote"
              >
                <img
                  src={ind6}
                  width=""
                  height=""
                  alt="motor-insurance icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Motor Insurance</h2>
              </Link>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img wellness position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind7}
                  width=""
                  height=""
                  alt="wellness icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Rest Eazy</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img wellness position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind8}
                  width=""
                  height=""
                  alt="wellness icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Travel Insurance</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img wellness position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind9}
                  width=""
                  height=""
                  alt="wellness icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Golfer's Insurance</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img wellness position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind10}
                  width=""
                  height=""
                  alt="wellness icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Personal Accident</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img wellness position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ind11}
                  width=""
                  height=""
                  alt="wellness icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Professional Indemntity Cover</h2>
              </a>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex justify-content-center align-items-center">
              <Link
                className="solutions-img wellness position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                to="/ecommerce/motorcycle-insurance"
              >
                <img
                  src={ind12}
                  width=""
                  height=""
                  alt="wellness icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Motorcycle Insurance</h2>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function CorporateProduct() {
  return (
    <>
      <Sidebar view="CorporateProduct" />
      <main
        id="corporate_product"
        className="corporate_product h-100 d-flex flex-column"
      >
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb mt-2">
              <li className="breadcrumb-item">
                <Link
                  to="/ecommerce"
                  className="bg-primary text-light px-3 rounded"
                >
                  Our Solutions
                </Link>
              </li>
              <li className="breadcrumb-item active text-light">
                Corporate Solutions
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column justify-content-center mb-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="row g-4 h-100">
            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img corporate-medical position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://play.google.com/store/apps/details?id=com.minet.minetretail"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={corporate1}
                  width=""
                  height=""
                  alt="corporate-medical icon"
                  className="img-fluid"
                />
                <h2 className="mt-3">Corporate Medical Cover</h2>
              </a>
            </div>
            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img pension-cover position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://mss.minet.co.ke/Login?ReturnUrl=%2Fdashboard"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={corporate2}
                  width=""
                  height=""
                  alt="pension-cover icon"
                  className="img-fluid"
                />
                <h2 className="mt-3">Corporate Pension Cover</h2>
              </a>
            </div>
            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img group-life-cover position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://play.google.com/store/apps/details?id=com.minet.minetretail"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={corporate3}
                  width=""
                  height=""
                  alt="group-life-cover icon"
                  className="img-fluid"
                />
                <h2 className="mt-3">Group Life Cover</h2>
              </a>
            </div>
            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img wellness position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://wellness.minet.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={corporate4}
                  width=""
                  height=""
                  alt="wellness icon"
                  className="img-fluid"
                />
                <h2 className="mt-3">Wellness</h2>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
