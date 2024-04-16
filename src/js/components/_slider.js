import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
document.addEventListener('DOMContentLoaded', function() {

  let options = {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 700,
    autoplay: {
      delay: 50000,
    },
    centeredSlides: true,
    modules: [Navigation, Scrollbar, Pagination, Autoplay],
    draggable: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  const swiperPortfolio = new Swiper('.slider__wrapper', options);
});