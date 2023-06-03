const pricesItems = document.querySelectorAll('.prices__item');

pricesItems.forEach((item) => {
    const accordion = item.querySelector('.accordion');
    const accordionHeader = accordion.querySelector('.accordion__header');
    const accordionContent = accordion.querySelector('.accordion__content');
    const arrow = accordion.querySelector('.arrow');
    const arrowButton = accordion.querySelector('.arrow-bottom');

    item.addEventListener('click', () => {
        accordionHeader.classList.toggle('open');
        arrow.classList.toggle('open');
        arrowButton.classList.toggle('closes');
        accordionContent.classList.toggle('selected');
    });
});