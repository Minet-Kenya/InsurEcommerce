/**
 * Preloader
 */
const preloader = document.querySelector("#preloader");
if (preloader) {
	window.addEventListener("load", () => {
		preloader.remove();
	});
}

/**
 * Animation on scroll function and init
 */
function aosInit() {
	AOS.init({
		duration: 600,
		easing: "ease-in-out",
		once: true,
		mirror: false
	});
}
window.addEventListener("load", aosInit);

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
