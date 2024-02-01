/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
const slider = document.querySelector(".swiper");
const article = document.querySelector("#privacy-policy-content .article");

function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');

    // TODO: Find a neat / smoother way to deal with the glightbox rendering of mobile navigation
    if (mobileNavToggleBtn.classList.contains('bi-x')) {
        if (slider) {
            slider.style.display = 'none'; // Hide the slider
        }
        else if (article) {
            article.style.display = "none"
        }
    } else {
        if (slider) {
            slider.style.display = 'block'; // Show the slider
        }
        else if (article) {
            article.style.display = "block"
        }
    }
}

mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

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
