import './Footer.css'

export function Footer() {
    return (
        <footer id="footer" className="mt-auto position-relative">
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
