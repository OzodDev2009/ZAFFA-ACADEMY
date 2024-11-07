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