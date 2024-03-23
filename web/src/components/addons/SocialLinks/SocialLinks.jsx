import './SocialLinks.css'


function SocialLinks() {
    return (
        <>
            <div className="social-links d-flex align-items-center justify-content-center justify-content-md-start">
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
        </>
    );
}


export default SocialLinks;