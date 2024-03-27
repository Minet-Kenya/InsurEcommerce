import { Link, Outlet } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Home.css';

import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

import ContactForm from '../../components/forms/Contact/Contact'
import BackToTopBtn from '../../components/addons/BackToTopBtn/BackToTopBtn';
import Preloader from '../../components/addons/Preloader/Preloader';


export default function Home() {
    return (
        <>
            <div className="vh-100 d-flex flex-column">
                <Header view="Home" version="v2" />
                <Outlet />
                <Footer view="Home" version="v2" />
            </div>
            <Preloader />
            <BackToTopBtn />
        </>
    );
}

export function Landing() {
    return (
        <>
            <main id="landing" className="landing flex-grow-1 mheader container-fluid">
                <section className="h-100 row d-flex align-items-center justify-content-center ps-5" data-aos="zoom-in">
                    <div className="col-12 col-md-4 d-grid gap-4">
                        <h1>
                            <div className="d-block">
                                <span>Welcome to</span>
                            </div>
                            <div className="d-block">
                                <span>Minet</span> Insurance
                            </div>
                            <div className="d-block">Brokers Solutions</div>
                        </h1>
                        <p>
                            Minet is a trusted pan-African advisor that meets the uncertainties of tomorrow by delivering risk and human capital solutions today.
                        </p>
                        <div>
                            <a className="btn mt-2 me-1"
                                href="https://www.minet.com/kenya/"
                                target="_blank"
                                rel="noreferrer">Visit Our Website</a>
                            <Link className="btn mt-2" to="/">Get Started</Link>
                        </div>
                    </div>
                    <Swiper className="col-md-8 swiper d-none d-md-block position-relative"
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
                </section>
            </main>
        </>
    );
}

export function Contact() {
    return (
        <>
            <main id="contact" className="contact flex-grow-1 mheader position-relative container-fluid">
                <section className="h-100 row gy-2 d-flex align-items-center justify-content-center py-4" data-aos="fade-in">
                    <div className="col-lg-6">
                        <div className="row gy-4">
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
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}