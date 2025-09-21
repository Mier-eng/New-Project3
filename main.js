let burger = document.querySelector('.burger_btn');
burger.onclick = function() {
    this.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger_btn');
    const nav = document.querySelector('.nav__menu');

    burgerBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        burgerBtn.classList.toggle('active'); 
    });
});


let swiper = new Swiper('.swiper', {
  loop: false, 
   centeredSlides: true, // Центрируем на маленьких экранах
    slidesPerView: 'auto', // Автоматическое определение кол-ва видимых слайдов 
  slidesPerView: 5,
  spaceBetween: 300,
  slidesPerGroup: 1,
   initialSlide: 2, // <---  Начинаем с третьего слайда (индекс 2)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slideToClickedSlide: false,  // Отключаем переход по клику
   
});


document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderThumb = document.querySelector('.slider-thumb');
  const swiper = document.querySelector('.swiper').swiper;

  let isDragging = false;
  let startX = 0;
  const slideCount = document.querySelectorAll('.swiper-slide').length;
  let currentSlideIndex = 0;

  // Функция для перемещения ползунка
  function moveThumb(x) {
    let containerWidth = sliderContainer.offsetWidth;
    let thumbWidth = sliderThumb.offsetWidth;
    let newPos = x - sliderContainer.offsetLeft - startX; // Важно: используем startX

    if (newPos < 0) {
      newPos = 0;
    } else if (newPos > containerWidth - thumbWidth) {
      newPos = containerWidth - thumbWidth;
    }

    sliderThumb.style.left = newPos + 'px';
    currentSlideIndex = Math.round((newPos / (containerWidth - thumbWidth)) * (slideCount - 1));
  }

    function slideToCalculatedIndex() {
        swiper.slideTo(currentSlideIndex);
    }

    function updateThumbPosition(index) {
        let containerWidth = sliderContainer.offsetWidth;
        let thumbWidth = sliderThumb.offsetWidth;
        let newPos = (index / (slideCount - 1)) * (containerWidth - thumbWidth);

        sliderThumb.style.left = newPos + 'px';
    }

  // Обработчики событий мыши
  sliderThumb.addEventListener('mousedown', function(e) { // Слушаем событие mousedown на sliderThumb
    isDragging = true;
    startX = e.clientX - sliderThumb.offsetLeft - sliderContainer.offsetLeft; // Запоминаем смещение внутри ползунка
      sliderThumb.classList.add('active');
  });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        moveThumb(e.clientX);
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            slideToCalculatedIndex();
        }
        isDragging = false;
        sliderThumb.classList.remove('active');
    });

    document.addEventListener('mouseleave', function() {
        if (isDragging) {
            slideToCalculatedIndex();
        }
        isDragging = false;
        sliderThumb.classList.remove('active');
    });

  // Обработчики событий касания
    sliderThumb.addEventListener('touchstart', function(e) { // Слушаем событие touchstart на sliderThumb
        isDragging = true;
        startX = e.touches[0].clientX - sliderThumb.offsetLeft - sliderContainer.offsetLeft; // Запоминаем смещение внутри ползунка
        sliderThumb.classList.add('active');
    });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        moveThumb(e.touches[0].clientX);
    });

    document.addEventListener('touchend', function() {
        if (isDragging) {
            slideToCalculatedIndex();
        }
        isDragging = false;
        sliderThumb.classList.remove('active');
    });

    document.addEventListener('touchcancel', function() {
        if (isDragging) {
            slideToCalculatedIndex();
        }
        isDragging = false;
       sliderThumb.classList.remove('active');
    });


    // Синхронизация Swiper и ползунка
    swiper.on('slideChange', function () {
        updateThumbPosition(swiper.activeIndex);
    });
});
