import './Landing.css'

function Landing() {
    return (
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
                    <a className="btn mt-2" href="{% url 'retail' %}">Get Started</a>
                </div>
            </div>
            <div className="col-12 col-md-8 d-flex align-items-center position-relative">
                <div className="swiper w-100 h-100 position-absolute end-0">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide-1 visible"></div>
                        <div className="swiper-slide slide-2 visible"></div>
                        <div className="swiper-slide slide-3 visible"></div>
                        <div className="swiper-slide slide-4 visible"></div>
                    </div>
                    <div className="swiper-pagination d-none d-lg-flex justify-content-center position-fixed"></div>
                </div>
            </div>
        </section>
    );
}

export default Landing;