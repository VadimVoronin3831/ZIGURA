const slider = document.querySelector('.swiper-container');
const sliderPopular = document.querySelector('.swiper-container-popular');
const sliderProject = document.querySelector('.swiper-container-proj');

let swiper = new Swiper(slider, {
  slidesPerView:1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    size: "140px"
  },
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableeOnInteraction: false
  }
});

let swiperPopular = new Swiper(sliderPopular, {
  slidesPerView:'auto',
  spaceBetween: 30,
  slidesPerGroup: 3,
  scrollbar: {
    el: ".swiper-scrollbar-popular",
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  }
});
let swiperProject = new Swiper(sliderProject, {
  slidesPerView:3,
  spaceBetween: 30,
  slidesPerGroup: 2,
  scrollbar: {
    el: ".swiper-scrollbar-proj",
  },
  navigation: {
    nextEl: '.next-proj',
    prevEl: '.prev-proj',
  }
});