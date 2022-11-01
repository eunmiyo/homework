
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 800
  });

var slides = document.querySelector('.slides'),
  slide = document.querySelectorAll('.slides li'),
  currentIdx = 0,
  slideCount = slide.length,
  prevBtn = document.querySelector('.prev'),
  slideWidth = 200,
  slideMargin = 30,
  nextBtn = document.querySelector('.next');

  slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin;