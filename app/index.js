// Функция смены цвета заднего фона на размерах от 1440 пикселей более.
// Function changed color background color on size from 1440px and more.
const btnColor = document.querySelector('.__changer');
function random(number){
    return Math.floor(Math.random() * (number+1))
};
btnColor.onclick = function(){
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
};



// Для бургер меню из 4 полос где по нажатия всплывает окно навигации по сайту.
// For a burger menu of 4 lanes where, when clicked, a site navigation window pops up.
// Фиксируем константы нашего меню навигации и иконки меню.
// We fixed the constants of our navigation menu and menu icon.
const burgerIcon = document.querySelector('.burger__menu');
const burgerMenu = document.querySelector('.navigation')


// Получаем кнопку меню бургер и добавляем обработчик события click,
// Get the burger menu button and add a click event handler,
// где добавляем или удаляем класс в зависимости от того есть он уже или нет.
// where we add or remove a class, depending on whether it already exist or not.
burgerIcon.addEventListener("click", function () {
    burgerIcon.classList.toggle('__active');
    burgerMenu.classList.toggle('__burger__menu');
});


// Добавляем обработчик нажатия на клавишу Escape для закрытия меню.
// Add a handler for pressing the Escape key to close the menu.
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' || e.key === 'Esc') { 
        burgerMenu.classList.remove('__burger__menu');
        burgerIcon.classList.remove('__active');
    };
});


// Будем скрывать меню если кликать вне списка за его пределами.
// We will hide the menu if you click outside the list outside of it.
document.addEventListener('click', function(e) {
    if (!burgerIcon.contains(e.target) && !burgerMenu.contains(e.target)){
        burgerMenu.classList.remove('__burger__menu');
        burgerIcon.classList.remove('__active');
    }
})


// Функция плавного скроллинга к якорю
// Function of smooth scrolling to the anchor
function smoothScroll(target) {
    if (target) {
      let element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }


// Данный обработчик будет действовать на разрешении экрана менее 
// This handler will operate at screen resolutions less than
// или равный 768 пикселей.
// or equal to 768 pixels.
if (window.innerWidth <= 768) {
    // Получаем ссылки меню и добавляем обработчик события click.
    // Get the menu links and add a click event handler.
    const menuLinks = document.querySelectorAll('.menu-link');
    for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e) {
        // Закрываем меню.
        // Close the menu.
        if (burgerMenu.classList.contains('__burger__menu')) {
        burgerMenu.classList.remove('__burger__menu') }
        if (burgerIcon.classList.contains('__active')) {
            burgerIcon.classList.remove('__active') }
        // Получаем якорь и осуществляем переход.
        // We get the anchor and make the thansition.
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
            });
        }
        e.preventDefault();
        });
    }
}