/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
        if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
            selectEl.addEventListener(type, listener);
        }
    }
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
};

/**
 * Initiate Index Page Swiper
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
 * Initiate glightbox
 */
const glightbox = GLightbox({
    selector: '.glightbox'
});


/**
 * Mobile nav toggle
 */
on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
});

/**
 * Mobile nav dropdowns activate
 */
on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("dropdown-active");
        }
    },
    true
);

/**
 * Hide the swiper slides when the mobile nav modal is shown
 */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

mobileNavToggleBtn.addEventListener("click", function () {
    const swiperslides = document.querySelectorAll(".swiper-slide");

    if (this.classList.contains("bi-x")) {
        swiperslides.forEach(function (slide) {
            slide.classList.add("invisible");
            slide.classList.remove("visible");
        });
    } else {
        swiperslides.forEach(function (slide) {
            slide.classList.remove("invisible");
            slide.classList.add("visible");
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