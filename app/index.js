// функция смены цвета заднего фона на размерах от 1440 пикселей более.
// function changed color theme on size from 1440px and more.
const btnColor = document.querySelector('.__changer');
function random(number){
    return Math.floor(Math.random() * (number+1))
};
btnColor.onclick = function(){
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
};


// для бургер меню из 4 полос где по нажатия всплывает окно навигации по сайту.
const burgerIcon = document.querySelector('.burger__menu');
const burgerMenu = document.querySelector('.navigation')

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle('__active');
    document.querySelector('.navigation').classList.toggle('__burger__menu');
});

// при нажатии на Escape можно скрыть меню
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' || e.key === 'Esc') { 
        burgerMenu.classList.remove('__burger__menu');
         burgerIcon.classList.remove('__active');
    };
});


// будем скрывать меню если кликать вне списка за его пределами.
document.addEventListener('click', function(e) {
    if (!burgerIcon.contains(e.target) && !burgerMenu.contains(e.target)){
        burgerMenu.classList.remove('__burger__menu');
        burgerIcon.classList.remove('__active');
    }
})

// написать скрипт кнопки что будет возвращать пользователей к шапке по 
// id="Header" и исчезать когда пользователь находится в верху страницы.