// Node Modules
import AOS from 'aos';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SwiperCore from 'swiper/core';
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

// CSS
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Home.css';

// Assets
import logoFull from '../../assets/images/logo-full.png'
import logoFullWhite from '../../assets/images/logo-full-white.png'
import logoSmall from '../../assets/images/logo-small.png'
import logoSmallWhite from '../../assets/images/logo-small-white.png'

// Components
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import Preloader from '../../components/Preloader/Preloader';

// Initialize AOS
AOS.init({
    duration: 600,
    easing: "ease-in-out"
});

// Configure Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export function Home() {
    return (
        <>
            <Landing />
            <Preloader />
        </>);
}

export function Landing() {
    return (
        <>
            <Header landing={true} />
            <main id="landing" className="container-fluid flex-grow">
                <section className="h-100 row ps-5">
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-evenly">
                        <h1>
                            <div className="d-block">
                                <span>Welcome to</span>
                            </div>
                            <div className="d-block">
                                <span>Minet</span> Insurance
                            </div>
                            <div className="d-block">Brokers Solutions</div>
                        </h1>
                        <div>
                            <p>
                                Minet is a trusted pan-African advisor that meets the uncertainties of tomorrow by delivering risk and human capital solutions today.
                            </p>
                            <a className="btn mt-2 me-1"
                                href="https://www.minet.com/kenya/"
                                target="_blank"
                                rel="noreferrer">Visit Our Website</a>
                            <Link className="btn mt-2" to="/retail">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 d-flex align-items-center position-relative">
                        <Swiper
                            className="swiper w-100 h-100 position-absolute end-0"
                            modules={[Pagination, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            speed={700}
                            loop={true}
                            pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true }}
                        >
                            <SwiperSlide className="swiper-slide slide-1 visible"></SwiperSlide>
                            <SwiperSlide className="swiper-slide slide-2 visible"></SwiperSlide>
                            <SwiperSlide className="swiper-slide slide-3 visible"></SwiperSlide>
                            <SwiperSlide className="swiper-slide slide-4 visible"></SwiperSlide>
                            <div className="swiper-pagination d-none d-lg-flex justify-content-center position-fixed"></div>
                        </Swiper>
                    </div>
                </section>
            </main>
            <Footer landing={true} />
        </>
    );
}

export function Login() {
    return (
        <>
            <Header />
            <main id="accounts" className="container-fluid flex-grow">
            </main>
            <BackToTopButton />
        </>
    );
}

export function Contact() {
    return (
        <>
            <Header />
            <main id="contact" className="container-fluid flex-grow">
                <section className="h-100 row gy-2 py-4 d-flex justify-content-center align-items-center my-4">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="info-box card">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>
                                        Minet House,
                                        <br />
                                        Processional Way,
                                        <br />
                                        off Nyerere Road
                                        <br />
                                        P.O. Box 48279-00100, GPO Nairobi
                                    </p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="info-box card">
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>+254 071 904 4000</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="info-box card">
                                    <i className="bi bi-clock"></i>
                                    <h3>Open Hours</h3>
                                    <p>
                                        Monday - Friday
                                        <br />
                                        8:15AM - 05:00PM
                                    </p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="info-box card">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>
                                        retailsales@minet.co.ke
                                        <br />
                                        info@minet.com
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card p-4">
                            <form action="" method="post" className="php-email-form">
                                <div className="row gy-4">
                                    <div className="col-6">
                                        <input type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required />
                                    </div>
                                    <div className="col-md-6 ">
                                        <input type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Your Email"
                                            required />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text"
                                            className="form-control"
                                            name="subject"
                                            placeholder="Subject"
                                            required />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control"
                                            name="message"
                                            rows="6"
                                            placeholder="Message"
                                            required></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                        <button className="btn btn-primary" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <BackToTopButton />
        </>
    );
}

function Header(props) {

    const logo = props.landing !== true ? logoFull : logoFullWhite;
    const logo_small = props.landing !== true ? logoSmall : logoSmallWhite;
    const isInnerPage = props.landing !== true ? "inner-pages" : "";
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header id="header" className={`${isInnerPage} fixed-top w-100 pt-2 px-4`}>
            <div className="container-fluid d-flex align-items-center justify-content-between py-2">

                <Link to="/landing" className="logo m-0 p-0 d-none d-lg-block">
                    <img src={logo}
                        width="250px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid" />
                </Link>
                <Link to="/landing" className="logo m-0 p-0 d-block d-lg-none">
                    <img src={logo_small}
                        width="70px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid" />
                </Link>
                <nav id="navbar" className={`navbar p-0 ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
                    <ul className="d-lg-flex m-0 p-0 list-unstyled align-items-center">
                        <li>
                            <Link className="nav-link" to="/landing"><span className="bi bi-house-door-fill">&nbsp;&nbsp;Home</span></Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact"><span className="bi bi-telephone-fill">&nbsp;&nbsp;Contact</span></Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/login">
                                <span className="bi bi-person-check-fill">&nbsp;&nbsp;Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/register">
                                <span className="bi bi-person-plus-fill">&nbsp;&nbsp;Sign Up</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/profile">
                                <span className="bi bi-person-fill">&nbsp;&nbsp;Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/logout">
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

function Footer(props) {

    const is_inner_pages = props.landing !== true ? "inner-pages" : "";

    return (
        <footer id="footer" className={`${is_inner_pages} mt-auto position-relative`}>
            <div className="ps-md-5 pb-4 pt-2 d-flex justify-content-center justify-content-md-start">
                <div className="social-links d-flex align-items-center">
                    <a href="https://twitter.com/Minet_Kenya/"
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/MinetKenya/"
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/minet_ke/"
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-instagram"></i></a>
                    <a href="https://wa.me/254719044000"
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/company/minet-kenya-insurance-brokers-limited"
                        className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
}
