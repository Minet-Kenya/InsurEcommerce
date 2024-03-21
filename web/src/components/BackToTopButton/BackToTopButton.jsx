import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './BackToTopButton.css';

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Link to="#"
            id="back-to-top"
            className={`position-fixed bg-primary rounded-circle d-flex align-items-center justify-content-center ${isVisible ? 'visible' : 'invisible'}`}
            onClick={scrollToTop}>
            <i className="bi bi-arrow-up-short text-white lh-0 fs-3"></i>
        </Link>
    );
}

export default BackToTopButton;