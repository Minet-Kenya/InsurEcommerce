/**
* Preloader
*/
const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
}


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


/**
 * Learn-More-Toast
 */
const path = window.location.pathname;
const learnMoreToast = document.getElementById('learn_more_toast')

if (path === "/") {
    document.addEventListener('DOMContentLoaded', function () {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(learnMoreToast);
        setTimeout(function () {
            toastBootstrap.show(); // Trigger the toast after two seconds
        }, 2000);

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
 * Initiate glightbox
 */
const glightbox = GLightbox({
    selector: '.glightbox'
});


/**
 * Initiate Swiper
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
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
mobileNavToggleBtn.addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
    navbar.classList.toggle("navbar-mobile");

});


/**
 * Appropriate body tag id
 */
const body = document.querySelector("body");

if (path === "/") {
    body.id = "index";
} else if (path === "/login/" || path === "/signup/") {
    body.id = "accounts";
} else if (path === "/contact/") {
    body.id = "contact";
}


/**
 * Active Nav Link
 */
const navLinks = document.querySelectorAll("#navbar .nav-link");

navLinks.forEach(link => {
    link.classList.remove("active");
});

navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === path) {
        link.classList.add("active");
    }
});


/**
 * Hide the swiper slides, toast, when the mobile nav modal is shown
 */
mobileNavToggleBtn.addEventListener("click", function () {

    const swiperslides = document.querySelectorAll(".swiper-slide");

    if (this.classList.contains("bi-x")) {
        swiperslides.forEach(function (slide) {
            slide.classList.add("invisible");
            slide.classList.remove("visible");
            learnMoreToast.classList.add("d-none")
        });
    } else {
        swiperslides.forEach(function (slide) {
            slide.classList.remove("invisible");
            slide.classList.add("visible");
            learnMoreToast.classList.remove("invisible");
            learnMoreToast.classList.remove("d-none");
        });
    }
});


/**
 * Remove Social Links in inner pages and change header stying if not homepage
 */
const footer = document.getElementById("footer");
const header = document.getElementById("header");

if (window.location.pathname !== "/") {
    header.classList.add("inner-pages");
    footer.remove();
}


/**
 * Change header images from normal to white and vice versa
 */
let headerImages = document.querySelectorAll("#header a img");

if (header.classList.contains("inner-pages")) {
    headerImages.forEach(image => {
        if (image.classList.contains("homepage")) {
            image.remove()
        }
    });
} else {
    headerImages.forEach(image => {
        if (image.classList.contains("inner-pages")) {
            image.remove();
        }
    });
}


/**
 * Disable form buttons until recapture is successful
 */
// const recaptchaCheckbox = document.querySelector(".g-recaptcha");
const formButton = document.querySelector("#accounts .accounts-form button[type=submit]");

// Initially disable the form button
if (formButton) {
    formButton.disabled = true;
}

// on data-callback
var enableBtn = function(token) {
    formButton.disabled = false;
};

// data-expired-callback
var disableBtn = function() {
    formButton.disabled = true;
};

/**
 * Form Vlidation
 */
const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})