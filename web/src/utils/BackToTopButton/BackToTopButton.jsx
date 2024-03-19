import './BackToTopButton.css'

function BackToTop() {
    return (
        <a href="/#"
            id="back-to-top"
            className="position-fixed bg-primary rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short text-white lh-0 fs-3"></i>
        </a>
    );
}
export default BackToTop;