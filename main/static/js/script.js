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
 * Initiate glightbox
 */
const glightbox = GLightbox({
	selector: '.glightbox'
});

/**
 * Initiate Home Page Swiper
 */
const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 700,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
});

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
 * urlParams
 */
// let urlParams = new URLSearchParams(window.location.search);
