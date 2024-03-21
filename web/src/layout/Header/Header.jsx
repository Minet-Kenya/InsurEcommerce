import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css'

import logoFull from '../../assets/images/logo-full.png';
import logoFullWhite from '../../assets/images/logo-full-white.png';
import logoSmall from '../../assets/images/logo-small.png';
import logoSmallWhite from '../../assets/images/logo-small-white.png';


export function HomeHeader(props) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header id="homeheader" className={`${props.landing !== true ? 'inner-pages' : ''} fixed-top w-100 pt-2 px-4`}>
            <div className="container-fluid d-flex align-items-center justify-content-between py-2">
                <a href="https://www.minet.com/kenya/" target="_blank" rel="noreferrer" className="logo m-0 p-0 d-none d-lg-block">
                    <img
                        src={props.landing !== true ? logoFull : logoFullWhite}
                        width="250px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid"
                    />
                </a>
                <a href="https://www.minet.com/kenya/" target="_blank" rel="noreferrer" className="logo m-0 p-0 d-block d-lg-none">
                    <img
                        src={props.landing !== true ? logoSmall : logoSmallWhite}
                        width="70px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid"
                    />
                </a>
                <nav id="navbar" className={`navbar p-0 ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
                    <ul className="d-lg-flex m-0 p-0 list-unstyled align-items-center">
                        <li>
                            <Link className={`nav-link ${pathname === '/' || pathname === '/landing' ? 'active' : ''}`} to="/landing">
                                <span className="bi bi-house-door-fill">&nbsp;&nbsp;Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} to="/contact">
                                <span className="bi bi-telephone-fill">&nbsp;&nbsp;Contact Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/auth">
                                <span className="bi bi-person-check-fill">&nbsp;&nbsp;Login / Sign up</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link className="nav-link" to="/logout">
                                <span className="bi bi-box-arrow-right">&nbsp;&nbsp;Logout</span>
                            </Link>
                        </li> */}
                    </ul>
                    <i className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleMobileNav}></i>
                </nav>
                <Link className="btn-getstarted text-decoration-none" to="/retail">
                    <h2 className="fs-6 m-0">Ecommerce</h2>
                </Link>
            </div>
        </header>
    );
}

export function AuthHeader(props) {
    return (
        <>
            <div id="authheader" className="pb-2 w-100">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-sm-block d-md-none logo d-flex align-items-center ms-2 w-auto">
                        <img src={logoSmall} alt="" width="" height="" />
                    </a>
                    <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-md-block logo d-flex align-items-center ms-2 w-auto">
                        <img src={logoFull} alt="" width="" height="" />
                    </a>
                    <h5 className="d-block flex-grow-1 card-title fw-bold text-center fs-4">{props.authview}</h5>
                    <Link className="d-none d-sm-block btn-homepage text-decoration-none me-2" to="/">
                        <h2 className="fs-6 m-0">Back to Home</h2>
                    </Link>
                </div>
                <p className="text-center small">{props.authview} using your email & password.</p>
            </div>
        </>
    );
}