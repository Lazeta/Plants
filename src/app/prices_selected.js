const pricesItems = document.querySelectorAll('.prices__item');


pricesItems.forEach((item) => {
    item.addEventListener('click', () => {
        const accordion = item.querySelector('.accordion');
        const accordionHeader = item.querySelector('.accordion__header');
        const accordionContent = item.querySelector('.accordion__content');
        const arrow = item.querySelector('.arrow');
        const arrowButton = item.querySelector('.arrow-bottom');
        
        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' || event.key === 'Esc') {
                accordion.classList.remove('active');
                accordionContent.classList.remove('selected');
                accordionHeader.classList.remove('close');
                arrow.classList.remove('open');
                arrowButton.classList.remove('close');
    
            }
        });



        if (accordion.classList.contains('active')) {
            accordionContent.classList.remove('selected');
            accordionHeader.classList.remove('close');
            arrow.classList.remove('open');
            arrowButton.classList.remove('close');
            accordion.classList.toggle('active');
        }
        else {
            accordionContent.classList.add('selected');
            accordionHeader.classList.add('close');
            arrow.classList.add('open');
            arrowButton.classList.add('close');
            accordion.classList.toggle('active');
        }
    });

});