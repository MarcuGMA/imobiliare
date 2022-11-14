const swiper = new Swiper('#swiper__wrapper', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiper2 = new Swiper('#swiper__wrapper2', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.info-next',
    prevEl: '.info-prev',
  },
  breakpoints: {
    550: {
      slidesPerView: 3,
    }
  }
});



let filter_button = document.querySelector(".filter__button");
let filter_option = document.querySelector(".filter__option");

filter_button.addEventListener('click', click__buttonFilter);

function click__buttonFilter() {
  filter_button.classList.toggle("filter__button-open");
  filter_option.classList.toggle("filter__option-open");
}


// Responsive menu for max width 500px

const hamburger = document.querySelector(".hamburger");
const menu__list = document.querySelector(".menu__list");

const linksShop = document.querySelectorAll(".link__shop");

if (hamburger) {
  hamburger.addEventListener("click", menu_change);
}

[...linksShop].forEach((item) => {
  item.addEventListener("click", menuToggle);
});

function menu_change(){
  hamburger.classList.toggle("active");
  menu__list.classList.toggle("active");
}

function menuToggle (clickEvent) {
  if (window.outerWidth > 550 ) {
    return;
  }

  clickEvent.preventDefault();
  console.log(clickEvent);
  clickEvent.target.parentNode.classList.toggle('active');
}

