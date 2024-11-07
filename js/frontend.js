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
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs li");
  const containers = document.querySelectorAll(".tab_container");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const tabId = tab.getAttribute("rel");
      const targetContainer = document.querySelector(`.block${tabId.replace('tab', '')}`);

      if (targetContainer.classList.contains("active_container")) {
        targetContainer.classList.remove("active_container");
      } else {
        containers.forEach(container => container.classList.remove("active_container"));
        targetContainer.classList.add("active_container");
      }
    });
  });

  const tabInfo1 = document.querySelector('.tab__info1')
  const tabInfo2 = document.querySelector('.tab__info2')
  const tabInfo3 = document.querySelector('.tab__info3')
  const tabInfo4 = document.querySelector('.tab__info4')
  const tabInfo5 = document.querySelector('.tab__info5')
  const tabInfo6 = document.querySelector('.tab__info6')
  const tabInfo7 = document.querySelector('.tab__info7')
  const tabInfo8 = document.querySelector('.tab__info8')
  const tabInfo9 = document.querySelector('.tab__info9')
  const tabInfo10 = document.querySelector('.tab__info10')
  const tabInfo11 = document.querySelector('.tab__info11')
  const tabInfo12 = document.querySelector('.tab__info12')
  const tabText1 = document.querySelector('.tab__text1')
  const tabText2 = document.querySelector('.tab__text2')
  const tabText3 = document.querySelector('.tab__text3')
  const tabText4 = document.querySelector('.tab__text4')
  const tabText5 = document.querySelector('.tab__text5')
  const tabText6 = document.querySelector('.tab__text6')
  const tabText7 = document.querySelector('.tab__text7')
  const tabText8 = document.querySelector('.tab__text8')
  const tabText9 = document.querySelector('.tab__text9')
  const tabText10 = document.querySelector('.tab__text10')
  const tabText11 = document.querySelector('.tab__text11')
  const tabText12 = document.querySelector('.tab__text12')
  const rotate1 = document.querySelector('.rotate1')
  const rotate2 = document.querySelector('.rotate2')
  const rotate3 = document.querySelector('.rotate3')
  const rotate4 = document.querySelector('.rotate4')
  const rotate5 = document.querySelector('.rotate5')
  const rotate6 = document.querySelector('.rotate6')
  const rotate7 = document.querySelector('.rotate7')
  const rotate8 = document.querySelector('.rotate8')
  const rotate9 = document.querySelector('.rotate9')
  const rotate10 = document.querySelector('.rotate10')
  const rotate11 = document.querySelector('.rotate11')
  const rotate12 = document.querySelector('.rotate12')

  tabInfo1.addEventListener("click", function () {
    tabText1.classList.toggle('tabText1')
    rotate1.classList.toggle('rotate1')
  })

  tabInfo2.addEventListener("click", function () {
    tabText2.classList.toggle('tabText2')
    rotate2.classList.toggle('rotate2')
  })

  tabInfo3.addEventListener("click", function () {
    tabText3.classList.toggle('tabText3')
    rotate3.classList.toggle('rotate3')
  })

  tabInfo4.addEventListener("click", function () {
    tabText4.classList.toggle('tabText4')
    rotate4.classList.toggle('rotate4')
  })

  tabInfo5.addEventListener("click", function () {
    tabText5.classList.toggle('tabText5')
    rotate5.classList.toggle('rotate5')
  })

  tabInfo6.addEventListener("click", function () {
    tabText6.classList.toggle('tabText6')
    rotate6.classList.toggle('rotate6')
  })
  tabInfo7.addEventListener("click", function () {
    tabText7.classList.toggle('tabText7')
    rotate7.classList.toggle('rotate7')
  })
  tabInfo8.addEventListener("click", function () {
    tabText8.classList.toggle('tabText8')
    rotate8.classList.toggle('rotate8')
  })
  tabInfo9.addEventListener("click", function () {
    tabText9.classList.toggle('tabText9')
    rotate9.classList.toggle('rotate9')
  })
  tabInfo10.addEventListener("click", function () {
    tabText10.classList.toggle('tabText10')
    rotate10.classList.toggle('rotate10')
  })
  tabInfo11.addEventListener("click", function () {
    tabText11.classList.toggle('tabText11')
    rotate11.classList.toggle('rotate11')
  })
  tabInfo12.addEventListener("click", function () {
    tabText12.classList.toggle('tabText12')
    rotate12.classList.toggle('rotate12')
  })

  console.log(tabInfo1);
  console.log(tabInfo2);
  console.log(tabInfo3);
  console.log(tabInfo4);
  console.log(tabText1);
  console.log(tabText2);
  console.log(tabText3);
  console.log(tabText4);
  console.log(rotate1);
  console.log(rotate2);
  console.log(rotate3);
  console.log(rotate4);
});

// OPATION
const selectElement = document.getElementById('mySelect');
const output = document.getElementById('selectedOption');

selectElement.addEventListener('change', function () {
  output.textContent = 'Siz tanlagan variant: ' + selectElement.value;
});