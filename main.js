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


document.addEventListener('DOMContentLoaded', function() {
  // Получаем блок form
  const formBlock = document.querySelector('.form');

  // Проверяем, найден ли блок form
  if (formBlock) {
    // Получаем input и button внутри form, используя более конкретные селекторы
    const inputElement = formBlock.querySelector('input[type="email"]');
    const buttonElement = formBlock.querySelector('button[type="button"]');

    // Проверяем, найдены ли input и button
    if (inputElement && buttonElement) {
      // Добавляем обработчик события click на button
      buttonElement.addEventListener('click', function() {
        // Получаем значение из input
        const email = inputElement.value;

        // Проверяем email на пустоту
        if (email === "") {
          alert("Please enter your email address.");
          return;
        }

        // Отправляем данные на сервер (замените на свой endpoint)
        fetch('/your-email-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          alert("Email sent successfully!");
        })
        .catch(error => {
          console.error('Error:', error);
          alert("Error sending email: " + error);
        });

          // Очищаем поле ввода (по желанию)
          inputElement.value = "";

      });
    } else {
      console.error('Input or button not found within the form block.');
    }
  } else {
    console.error('Form block not found.');
  }
});

 $(document).ready(function() {
            // Обработчик кликов по ссылкам меню
            $('.menu-link').on('click', function(e) {
                e.preventDefault(); // Предотвращаем стандартное поведение ссылки (перезагрузку страницы)

                var targetId = $(this).attr('href'); // Получаем ID секции, на которую нужно перейти

                // Плавная прокрутка к секции
                $('html, body').animate({
                    scrollTop: $(targetId).offset().top
                }, 1); // Скорость анимации (в миллисекундах)
            });
        });