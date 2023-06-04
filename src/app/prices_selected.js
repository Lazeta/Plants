const pricesItems = document.querySelectorAll('.prices__item');

pricesItems.forEach((item) => {
    const accordion = item.querySelector('.accordion');
    const accordionHeader = item.querySelector('.accordion__header');
    const accordionContent = item.querySelector('.accordion__content');
    const arrow = item.querySelector('.arrow');

    item.addEventListener('click', () => {
        if (accordion.classList.contains('active')) {
            accordionContent.classList.remove('selected');
            accordionHeader.classList.remove('accordion__header__selector');
            accordionHeader.classList.add('accordion__header');
            arrow.classList.remove('open');
            accordion.classList.remove('active');
        } else {
            accordionContent.classList.add('selected');
            accordionHeader.classList.remove('accordion__header__selector');
            accordionHeader.classList.add('accordion__header');
            arrow.classList.add('open');
            accordion.classList.add('active');
        }
    });

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            accordion.classList.remove('active');
            accordionContent.classList.remove('selected');
            accordionHeader.classList.remove('accordion__header__selector');
            accordionHeader.classList.add('accordion__header');
            arrow.classList.remove('open');
        }
    });
});