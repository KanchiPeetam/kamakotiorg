// Swiper.js Carousel Initialization
document.addEventListener('DOMContentLoaded', function() {
  const carouselElement = document.querySelector('.featured-carousel');

  if (carouselElement) {
    const swiper = new Swiper('.featured-carousel', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      a11y: {
        prevSlideMessage: 'Previous article',
        nextSlideMessage: 'Next article',
        firstSlideMessage: 'This is the first article',
        lastSlideMessage: 'This is the last article',
      },
    });
  }
});
