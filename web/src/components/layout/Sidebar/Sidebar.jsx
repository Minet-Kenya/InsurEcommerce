import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "./Sidebar.css";

import SocialLinks from "../../addons/SocialLinks/SocialLinks";

export default function Sidebar({ view }) {
  let pagetitle = null;
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(
    pathname === "/ecommerce/individual-solutions" ||
      pathname === "/ecommerce/corporate-product"
  );

  switch (view) {
    case "Solutions":
      pagetitle = "Ecommerce";
      break;
    case "IndividualSolutions":
      pagetitle = "Individual Solutions";
      break;
    case "CorporateProduct":
      pagetitle = "Corporate Product";
      break;
    default:
      pagetitle = "Ecommerce";
  }

  const [cart, setCart] = useState(() => {
    let savedCartItems = JSON.parse(localStorage.getItem("cart"));
    return savedCartItems || [{}, {}];
  });

  return (
    <aside id="sidebar" className="sidebar d-flex flex-column">
      <>
        <Link to="/ecommerce" className="page-profile pb-1 d-block">
          <div className="text-center">
            <i className="bi bi-house-fill page-profile-logo text-primary"></i>
            <h1 className="d-inline-block fs-4 text-light text-uppercase ps-1">
              {pagetitle}
            </h1>
          </div>
          <hr />
        </Link>
      </>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link
            onClick={() => setOpen(!open)}
            aria-controls="solutions-nav"
            aria-expanded={open}
            className={`nav-link collapsed ${
              pathname === "/ecommerce" ? "active" : ""
            }`}
            to="#"
          >
            <i className="bi bi-grid"></i>
            <span>Solutions</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <Collapse in={open}>
            <ul
              id="solutions-nav"
              className="solutions-nav nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link
                  to="/ecommerce/individual-solutions"
                  className={`nav-link ${
                    pathname === "/ecommerce/individual-solutions"
                      ? "active"
                      : ""
                  }`}
                >
                  <i className="bi bi-circle"></i>
                  <span>Individual Solutions</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://retail.minet.co.ke/biznasure/"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-circle"></i>
                  <span>Business Solutions</span>
                </a>
              </li>
              <li>
                <Link
                  to="/ecommerce/corporate-product"
                  className={`nav-link ${
                    pathname === "/ecommerce/corporate-product" ? "active" : ""
                  }`}
                >
                  <i className="bi bi-circle"></i>
                  <span>Corporate Solutions</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://collaborationkenya.minet.com/MinetKe/tsc"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-circle"></i>
                  <span>Teachers' Medical Scheme Portal</span>
                </a>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className="nav-item">
          <Link to="/ecommerce/cart" className="nav-link collapsed">
            <i className="bi bi-cart4"></i>
            <span>Cart</span>

            <span className="cart-qty">{cart?.length}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ecommerce/user-policies" className="nav-link collapsed">
            <i className="bi bi-table"></i>
            <span>Policies</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/ecommerce" className="nav-link collapsed">
            <i className="bi bi-archive"></i>
            <span>Claims</span>

          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ecommerce" className="nav-link collapsed">
            <i className="bi bi-file-earmark-plus"></i>
            <span>Renewals</span>

          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ecommerce" className="nav-link collapsed">
            <i className="bi bi-chat-left-dots-fill"></i>
            <span>Feedback</span>

          </Link>
        </li> */}

        {/* Shared Pages */}
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/contact">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/">
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>

      <div className="mt-auto pb-4">
        <SocialLinks />
      </div>
    </aside>
  );
}

export function SidebarToggle() {
  const toggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <div>
      <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
    </div>
  );
}
