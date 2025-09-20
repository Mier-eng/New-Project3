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
  centeredSlides: true,
   centeredSlides: true, // Центрируем на маленьких экранах
    slidesPerView: 'auto', // Автоматическое определение кол-ва видимых слайдов 
  slidesPerView: 5,
  spaceBetween: 200,
  slidesPerGroup: 1,
   initialSlide: 2, // <---  Начинаем с третьего слайда (индекс 2)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slideToClickedSlide: false,  // Отключаем переход по клику
  
});


   