import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// CSS
import './Header.css';

// Assets
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

    const logo = props.landing !== true ? logoFull : logoFullWhite;
    const logo_small = props.landing !== true ? logoSmall : logoSmallWhite;
    const isInnerPage = props.landing !== true ? 'inner-pages' : '';

    return (
        <header id="header" className={`${isInnerPage} fixed-top w-100 pt-2 px-4`}>
            <div className="container-fluid d-flex align-items-center justify-content-between py-2">
                <a href="https://www.minet.com/kenya/" target="_blank" rel="noreferrer" className="logo m-0 p-0 d-none d-lg-block">
                    <img
                        src={logo}
                        width="250px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid"
                    />
                </a>
                <a href="https://www.minet.com/kenya/" target="_blank" rel="noreferrer" className="logo m-0 p-0 d-block d-lg-none">
                    <img
                        src={logo_small}
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
                            <Link className={`nav-link ${pathname === '/auth/login' ? 'active' : ''}`} to="/auth/login">
                                <span className="bi bi-person-check-fill">&nbsp;&nbsp;Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${pathname === '/auth/register' ? 'active' : ''}`} to="/auth/register">
                                <span className="bi bi-person-plus-fill">&nbsp;&nbsp;Sign Up</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${pathname === '/auth/logout' ? 'active' : ''}`} to="/auth/logout">
                                <span className="bi bi-box-arrow-right">&nbsp;&nbsp;Logout</span>
                            </Link>
                        </li>
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
