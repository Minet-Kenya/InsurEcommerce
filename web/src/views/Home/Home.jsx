import { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Home.css';

import logoFull from '../../assets/images/logo-full.png';
import logoSmall from '../../assets/images/logo-small.png';

import { Header } from '../../layout/Header/Header'
import { LoginForm, SignupForm } from '../../forms/Authentication/Authentication';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import Preloader from '../../components/Preloader/Preloader';


export function Landing() {
    return (
        <>
            <Header landing={true} />
            <main id="landing" className="container-fluid flex-grow-1 d-flex flex-column">
                <section className="flex-grow-1 row ps-5" data-aos="zoom-in">
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
                            <div className="swiper-pagination d-none d-lg-flex justify-content-center"></div>
                        </Swiper>
                    </div>
                </section>
                <section className="social-links ps-md-5 pb-4 pt-2 mt-auto d-flex justify-content-center justify-content-md-start">
                    <div className="d-flex align-items-center">
                        <a href="https://twitter.com/Minet_Kenya/" target='_blank' rel='noreferrer'
                            className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-twitter-x"></i></a>
                        <a href="https://www.facebook.com/MinetKenya/" target='_blank' rel='noreferrer'
                            className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/minet_ke/" target='_blank' rel='noreferrer'
                            className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-instagram"></i></a>
                        <a href="https://wa.me/254719044000" target='_blank' rel='noreferrer'
                            className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-whatsapp"></i></a>
                        <a href="https://www.linkedin.com/company/minet-kenya-insurance-brokers-limited" target='_blank' rel='noreferrer'
                            className="d-inline-flex justify-content-center align-items-center"><i className="bi bi-linkedin"></i></a>
                    </div>
                </section>
            </main>

            <Preloader />
        </>
    );
}

export function Contact() {
    return (
        <>
            <Header />
            <main id="contact" className="container-fluid flex-grow">
                <section className="h-100 row gy-2 py-4 d-flex justify-content-center align-items-center my-4" data-aos="fade-in">
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
                                    <p><a href='tel:+254719044000' className='link-dark'>+254 071 904 4000</a></p>
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
                                        <a href='mailto:retailsales@minet.co.ke' className='link-dark'>retailsales@minet.co.ke</a>
                                        <br />
                                        <a href='mailto:info@minet.com' className='link-dark'>info@minet.com</a>
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
            <Preloader />
        </>
    );
}

export function Auth() {
    const [activeTab, setActiveTab] = useState('login');

    const handleSignupLinkClick = () => {
        setActiveTab('signup');
    };

    const handleLoginLinkClick = () => {
        setActiveTab('login');
    };

    return (
        <>
            <main id="auth" className="container-fluid flex-grow-1">
                <section className="h-100 row d-flex justify-content-center align-items-center" data-aos="fade-in">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <Tab.Container defaultActiveKey={activeTab} activeKey={activeTab} onSelect={key => setActiveTab(key)}>
                            <Nav variant="pills" className="mb-2 position-relative">
                                <Nav.Item>
                                    <Nav.Link eventKey="login">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="login" className='card'>
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                                        <div className="pb-2 w-100">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-sm-block d-md-none logo d-flex align-items-center ms-2 w-auto">
                                                    <img src={logoSmall} alt="" width="" height="" />
                                                </a>
                                                <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-md-block logo d-flex align-items-center ms-2 w-auto">
                                                    <img src={logoFull} alt="" width="" height="" />
                                                </a>
                                                <h5 className="d-block flex-grow-1 card-title fw-bold text-center fs-4">Login</h5>
                                                <Link className="d-none d-sm-block btn-homepage text-decoration-none me-2" to="/">
                                                    <h2 className="fs-6 m-0">Back to Home</h2>
                                                </Link>
                                            </div>
                                            <p className="text-center small">Login using your email & password.</p>
                                        </div>
                                        <LoginForm />
                                        <div className="mt-4 col-12 d-sm-table text-center">
                                            <div className="d-sm-table-row">
                                                <div className="d-sm-table-cell mb-2 mb-sm-0 border-end border-secondary">
                                                    <span className="form-text">Not a member? <Link to="#" onClick={handleSignupLinkClick}>Sign up here</Link></span>
                                                </div>
                                                <div className="d-sm-table-cell">
                                                    <span className="form-text">Request <Link to="">Password Reset</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="signup" className='card'>
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                                        <div className="pb-2 w-100">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-sm-block d-md-none logo d-flex align-items-center ms-2 w-auto">
                                                    <img src={logoSmall} alt="" width="" height="" />
                                                </a>
                                                <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-md-block logo d-flex align-items-center ms-2 w-auto">
                                                    <img src={logoFull} alt="" width="" height="" />
                                                </a>
                                                <h5 className="d-block flex-grow-1 card-title fw-bold text-center fs-4">Register</h5>
                                                <Link className="d-none d-sm-block btn-homepage text-decoration-none me-2" to="/">
                                                    <h2 className="fs-6 m-0">Back to Home</h2>
                                                </Link>
                                            </div>
                                            <p className="text-center small">Sign up using your email & password.</p>
                                        </div>
                                        <SignupForm />
                                        <div className="mt-4 col-12 d-sm-table text-center">
                                            <div className="d-sm-table-row">
                                                <div className="d-sm-table-cell mb-2 mb-sm-0 border-end border-secondary">
                                                    <span className="form-text">Already a member? <Link to="#" onClick={handleLoginLinkClick}>Login here</Link></span>
                                                </div>
                                                <div className="d-sm-table-cell">
                                                    <span className="form-text">Request <Link to="">Password Reset</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </section>
            </main>

            <BackToTopButton />
            <Preloader />
        </>
    );
}
