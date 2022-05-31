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
    nextEl: '#swiper-wrapper-next',
    prevEl: '#swiper-wrapper-prev',
  },
});

