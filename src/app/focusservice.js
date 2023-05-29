// берём кнопки и предметы обслуживания
// get the btn and service items
const btn = document.querySelectorAll(".btn__project");
const serviceItems = document.querySelectorAll(".service__item");

// добавляем события прослушивания кнопок
// add event listeners to the btn
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        // get the name of the button
        const name = btn.innerText;

        // Loop through the service items
        serviceItems.forEach(item => {
            // check if the service item has the same id as the button name
            if (item.id === name) {
                // add the 'focused' class to the service item
                item.classList.add('focused');
                item.classList.remove('active');
            }
            else {
                // remove the 'focused' class from other service items
                item.classList.remove('focused');
                item.classList.add('active');
            }
        });
    });
});