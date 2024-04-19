import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navigation.css";

import AuthContext from "../../forms/Authentication/Authentication";

export default function Navigation() {
  let { user, logoutUser } = useContext(AuthContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`navbar p-0 ${isMobileNavOpen ? "navbar-mobile" : ""}`}
      >
        <ul className="d-lg-flex m-0 p-0 list-unstyled align-items-center">
          <li>
            <Link
              className={`nav-link ${pathname === "/landing" ? "active" : ""}`}
              to="/"
            >
              <span className="bi bi-house-door-fill">&nbsp;&nbsp;Home</span>
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
              to="/contact"
            >
              <span className="bi bi-telephone-fill">
                &nbsp;&nbsp;Contact Us
              </span>
            </Link>
          </li>
          <li>
            {!user ? (
              <Link className="nav-link" to="/auth">
                <span className="bi bi-person-check-fill">
                  &nbsp;&nbsp;Login / Sign up
                </span>
              </Link>
            ) : (
              <Link onClick={logoutUser}>Logout</Link>
            )}
          </li>
        </ul>
        <i
          className={`bi ${
            isMobileNavOpen ? "bi-x" : "bi-list"
          } mobile-nav-toggle`}
          onClick={toggleMobileNav}
        ></i>
      </nav>
    </>
  );
}
