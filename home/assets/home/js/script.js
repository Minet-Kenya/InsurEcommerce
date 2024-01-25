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