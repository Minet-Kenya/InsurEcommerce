import { Link } from 'react-router-dom';
import './Retail.css'

import logoFull from '../../assets/images/logo-full.png';
import logoSmall from '../../assets/images/logo-small.png';
import solutions1 from '../../assets/images/solutions-1-main.png';
import solutions2 from '../../assets/images/solutions-2-main.png';
import solutions3 from '../../assets/images/solutions-3-main.png';
import solutions4 from '../../assets/images/solutions-4-main.png';

import SearchBar from '../../components/forms/SearchBar/SearchBar';
import RedirectBtn from '../../components/addons/RedirectBtn/RedirectBtn';
import Preloader from '../../components/addons/Preloader/Preloader';


export default function Retail() {
    return (
        <>
            <Header />
            <Aside />
            <div className='retail-wrapper'>
                <main id="retail" className="home flex-grow-1 d-flex flex-column">
                    <div className="pagetitle z-0">
                        <h1 className="text-white">Our Solutions</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Solutions</li>
                            </ol>
                        </nav>
                    </div>
                    <section id="retail-content"
                        className="flex-grow-1 container-fluid text-center d-flex flex-column justify-content-center mb-3">
                        <div className="row g-4 h-100">
                            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
                                <Link className="solutions-img individual-solutions position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                                    to="/retail">
                                    <img src={solutions1}
                                        width=""
                                        height=""
                                        alt="individual-solutions icon"
                                        className="img-fluid" />
                                    <h2 className="mt-2">Individual Solutions</h2>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
                                <a className="solutions-img business-solutions position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                                    href="https://retail.minet.co.ke/biznasure/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img src={solutions2}
                                        width=""
                                        height=""
                                        alt="business-solutions icon"
                                        className="img-fluid" />
                                    <h2 className="mt-2">Business Solutions</h2>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
                                <a className="solutions-img corporate-product position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                                    href="/retail">
                                    <img src={solutions3}
                                        width=""
                                        height=""
                                        alt="corporate-product icon"
                                        className="img-fluid" />
                                    <h2 className="mt-2">Corporate Solutions</h2>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
                                <a className="solutions-img teachers-medical-scheme position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                                    href="https://collaborationkenya.minet.com/MinetKe/tsc"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img src={solutions4}
                                        width=""
                                        height=""
                                        alt="teachers-medical-scheme icon"
                                        className="img-fluid" />
                                    <h2 className="mt-2">Teacher's Medical Scheme Portal</h2>
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
            <Preloader />
        </>
    );
}

function Header() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center  pt-2 px-4">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="https://www.minet.com/kenya/" target="_blank" rel="noreferrer"
                        className="logo lh-1 d-flex align-items-center me-4">
                        <img src={logoFull}
                            width=""
                            height=""
                            alt=""
                            className="logo-lg d-none d-sm-inline" />
                        <img src={logoSmall}
                            width=""
                            height=""
                            alt=""
                            className="logo-sm d-inline d-sm-none" />
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn text-white"></i>
                </div>
                
                <div className="search-bar ms-auto">
                <SearchBar />
                </div>
                <RedirectBtn to="/landing" text="Landing" />

            </header>
        </>
    );
}

function Aside() {
    return (
        <>
            <aside id="sidebar" className="sidebar d-flex flex-column z-2">
                <Profile />
                <ul className="sidebar-nav p-0 m-0 list-unstyled" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/">
                            <i className="bi bi-house"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="https://retail.minet.co.ke/Cart.php">
                            <i className="bi bi-cart4"></i>
                            <span>Cart</span>
                        </a>
                    </li>
                    <li className="nav-heading text-uppercase fw-bold">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/retail">
                            <i className="bi bi-shield-lock"></i>
                            <span>Privacy Policy</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/contact">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
                <div className="social-links mt-auto pb-4 pt-3 d-flex justify-content-center align-items-center">
                    <a href="https://twitter.com/Minet_Kenya/"
                        target="_blank" rel='noreferrer'
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/MinetKenya/"
                        target="_blank" rel='noreferrer'
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/minet_ke/"
                        target="_blank" rel='noreferrer'
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-instagram"></i></a>
                    <a href="https://wa.me/254719044000"
                        target="_blank" rel='noreferrer'
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/company/minet-kenya-insurance-brokers-limited"
                        target="_blank" rel='noreferrer'
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-linkedin"></i></a>
                </div>
            </aside>
        </>
    );
}

function Profile() {
    return (
        <>
            <Link to="/retail" className="page-profile pb-1 d-block">
                <div className="text-center">
                    <i className="bi bi-house-fill page-profile-logo text-primary"></i>
                    <h1 className="d-inline-block fs-4 text-dark text-uppercase">Home</h1>
                </div>
                <hr />
            </Link>
        </>
    );
}

function Footer() {
    return (
        <>
            <footer id="footer" className="footer mt-auto py-2 text-center text-white">
                <div className="copyright">
                    <span>All rights reserved</span> ©️ 2023<span className="current-year"></span> <strong className="px-1">Minet
                        Group</strong>
                </div>
                <div className="credits pt-2 fs-6">
                    <small>Designed by <Link to="#" className="pe-none">Minet Kenya IT Department</Link></small>
                </div>
            </footer>
        </>
    );
}