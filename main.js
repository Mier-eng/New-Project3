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
