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

// TABS Course
// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});


/* Extra class "tab_last" 
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");

const accordion1 = document.querySelector('.accordion1')
const accordion2 = document.querySelector('.accordion2')
const accordion3 = document.querySelector('.accordion3')
const accordion4 = document.querySelector('.accordion4')
const tabText1 = document.querySelector('.tab__text1')
const tabText2 = document.querySelector('.tab__text2')
const tabText3 = document.querySelector('.tab__text3')
const tabText4 = document.querySelector('.tab__text4')
const rotate1 = document.querySelector('.rotate1')
const rotate2 = document.querySelector('.rotate2')
const rotate3 = document.querySelector('.rotate3')
const rotate4 = document.querySelector('.rotate4')

accordion1.addEventListener('click', function () {
    tabText1.classList.toggle('tabText1')
    rotate1.classList.toggle('rotate1')
})

accordion2.addEventListener('click', function () {
    tabText2.classList.toggle('tabText2')
    rotate2.classList.toggle('rotate2')
})

accordion3.addEventListener('click', function () {
    tabText3.classList.toggle('tabText3')
    rotate3.classList.toggle('rotate3')
})

accordion4.addEventListener('click', function () {
    tabText4.classList.toggle('tabText4')
    rotate4.classList.toggle('rotate4')
})

// OPATION
const selectElement = document.getElementById('mySelect');
const output = document.getElementById('selectedOption');

selectElement.addEventListener('change', function () {
    output.textContent = 'Siz tanlagan variant: ' + selectElement.value;
});