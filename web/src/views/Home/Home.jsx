import { Link } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Home.css';

import logoFull from '../../assets/images/logo-full.png';
import logoFullWhite from '../../assets/images/logo-full-white.png';
import logoSmall from '../../assets/images/logo-small.png';
import logoSmallWhite from '../../assets/images/logo-small-white.png';

import RedirectBtn from '../../components/RedirectBtn/RedirectBtn';
import Navigation from '../../components/Navigation/Navigation';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';
import Preloader from '../../components/Preloader/Preloader';

function Home() {
    return (
        <>
            <Landing />
            <Preloader />
        </>
    );
}

function Header(props) {

    return (
        <header id="header" className={`${props.landing !== true ? 'inner-pages' : ''} fixed-top pt-2 px-4`}>
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
                <Navigation />
                <RedirectBtn to="/retail" text="Ecommerce" />
            </div>
        </header>
    );
}

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
            <BackToTopBtn />
        </>
    );
}

export default Home;