const swiper = new Swiper('#swiper__wrapper', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('#swiper__wrapper2', {
  // Optional parameters
  loop: true,

  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.info-next',
    prevEl: '.info-prev',
  },
});


let filter_button = document.querySelector(".filter__button");
let filter_option = document.querySelector(".filter__option");

filter_button.addEventListener('click', click__buttonFilter);

function click__buttonFilter() {
  filter_button.classList.toggle("filter__button-open");
  filter_option.classList.toggle("filter__option-open");
}



