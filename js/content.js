// SERVER - LOADER
window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loader-overlay").style.display = "none";
    });
});

// GAMBURGER
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// SWIPER
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// GALLERY - SWIPER
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.gallery__swiper', {
        loop: true,
        spaceBetween: 90,
        slidesPerView: 1,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
