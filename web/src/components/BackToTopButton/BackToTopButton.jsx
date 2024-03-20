import './BackToTopButton.css'

function BackToTopButton() {
    
/**
 * Back to top button
 */
const backtotop = document.querySelector("#back-to-top");

const togglesideButtons = () => {
    if (window.scrollY > 100) {
        backtotop.classList.remove("invisible");
        backtotop.classList.add("visible");
        backtotop.classList.remove("opacity-0");
        backtotop.classList.add("opacity-100");
    } else {
        backtotop.classList.remove("visible");
        backtotop.classList.add("invisible");
        backtotop.classList.remove("opacity-100");
        backtotop.classList.add("opacity-0");
    }
};

window.addEventListener("load", togglesideButtons);
window.addEventListener("scroll", togglesideButtons);

backtotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



    return (
        <a href="/#"
            id="back-to-top"
            className="position-fixed bg-primary rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short text-white lh-0 fs-3"></i>
        </a>
    );
}

export default BackToTopButton;