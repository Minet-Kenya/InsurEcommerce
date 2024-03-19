import './Contact.css'

import {Header} from '../../components/Header/Header'
import {Footer} from '../../components/Footer/Footer'

import {Preloader} from '../../utils/Preloader/Preloader'
import {BackToTopButton} from '../../utils/BackToTopButton/BackToTopButton'

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
            <Preloader />
            <BackToTopButton />
        </>
    );
}
