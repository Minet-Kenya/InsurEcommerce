import { Link } from 'react-router-dom';
import SwiperCore from 'swiper/core';
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Home.css';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { BackToTopButton } from '../../components/BackToTopButton/BackToTopButton';


SwiperCore.use([Pagination, Autoplay]);


export function Landing() {
    return (
        <>
            <Header />
            <main id="index" className="container-fluid flex-grow">
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
            <Footer />
            <BackToTopButton />
        </>
    );
}

export function Auth() {
    return (
        <>
            <Header />
            <main id="accounts" className="container-fluid flex-grow">
            </main>
            <Footer />
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
            <Footer />
            <BackToTopButton />
        </>
    );
}
