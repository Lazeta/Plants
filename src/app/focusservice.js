// берём кнопки и предметы обслуживания
// get the btn and service items
const btn = document.querySelectorAll(".btn__project");
const serviceItems = document.querySelectorAll(".service__item");
const serviceBlock = document.getElementById("Service-section");


// добавляем события прослушивания кнопок
// add event listeners to the btn
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        // get the name of the button
        const name = btn.innerText;

        // Loop through the service items
        serviceItems.forEach(item => {
            // check if the service item has the same data attribute as the button name innerText
            if (item.getAttribute('data') === name) {
                // add the 'focused' class to the service item
                item.classList.add('focused');
                item.classList.remove('active');
                window.addEventListener('keydown', function(event) {
                    if (event.key === 'Escape' || event.key === 'Esc') {
                        item.classList.remove('focused');
                    }
                });
            }
            else {
                // remove the 'focused' class from other service items
                item.classList.remove('focused');
                item.classList.add('active');

                window.addEventListener('keydown', function(event) {
                    if (event.key === 'Escape' || event.key === 'Esc') {
                        item.classList.remove('active');
                    }
                });
            }
        });
    });
});


// удаляем модификаторы serviceItems если клик произошёл вне блока Service
// remove modifier serviceItems if click event happened outside the Service block
document.querySelectorAll(':not(#Service-section)').forEach(function (element) {
    element.addEventListener('click', function (event) {
        const isClickInsideBlock = serviceBlock.contains(event.target);
        if (!isClickInsideBlock) {
            // перебираем все элементы serviceItem и удаляем класс focused, active
            // iterate all elements serviceItem and remove class 'focused', 'active'
            serviceItems.forEach(item => {
                item.classList.remove('focused');
                item.classList.remove('active');
            });
        } else {
            // если click внутри блока Service
            // if click inside the block 'Service'
        }
    })
});