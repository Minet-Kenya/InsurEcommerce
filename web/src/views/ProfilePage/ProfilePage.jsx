import { Link, Outlet } from "react-router-dom";

import solutions1 from "../../assets/images/solutions-1-main.png";
import solutions2 from "../../assets/images/solutions-2-main.png";
import solutions3 from "../../assets/images/solutions-3-main.png";
import solutions4 from "../../assets/images/solutions-4-main.png";

import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import Footer from "../../components/layout/Footer/Footer";
// import "./Ecommerce.css";

export default function ProfilePage() {
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

export function ProfileTabs() {
  return (
    <>
      <Sidebar view="Solutions" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">My Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary"></li>
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
                to="/ecommerce/account-settings"
              >
                <img
                  src={solutions1}
                  width=""
                  height=""
                  alt="individual-solutions icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">My Account</h2>
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
                <h2 className="mt-2">My Claims</h2>
              </a>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <Link
                className="solutions-img corporate-product position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                to="/ecommerce/user-policies"
              >
                <img
                  src={solutions3}
                  width=""
                  height=""
                  alt="corporate-product icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">My Policies</h2>
              </Link>
            </div>
            {/* <div className="col-6 d-flex justify-content-center align-items-center">
              <a
                className="solutions-img teachers-medical-scheme position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                href="https://collaborationkenya.minet.com/tsc"
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
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
