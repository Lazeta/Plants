// // получаем все элементы с классом "prices__item" и добавляем обработчик события клика
// document.querySelectorAll(".prices__item").forEach((item) => {
//     item.addEventListener('click', () => {
//         // Получаем элементы меню: заголовок, содержимое и стрелки
//         const accordionHeader = item.querySelector('.accordion__header');
//         const accordionContent = item.querySelector('.accordion__content');
//         const accordionArrowTop = item.querySelector('.accordion__header__selected');

//         // Проверяем, открыто ли меню
//         const isAccordionActive = accordionHeader.classList.contains('accordion__header__selected');

//         if (isAccordionActive) {
//             // Если меню уде открыто, то закрываем его и удаляем соответствующие классы
//             accordionHeader.classList.remove('accordion__header__selected');
//             accordionContent.classList.remove('selected');
//         } 

//         else {
//             // Если меню закрыто, то закрываем предыдущее открытое меню, если имеется в наличии
//             const activeAccordion = document.querySelector('.prices__item .accordion__header__selected');

//             const activeAccordionHeader = activeAccordion.parentNode.querySelector('.accordion__header');
//             const activeAccordionContent = activeAccordion.parentNode.querySelector('.accordion__content');
//             const activeAccordionArrowBottom = activeAccordion.parentNode.querySelector('.accordion__header');

//             // Открываем текущее меню и добавляем соответствующие классы
//             accordionHeader.classList.add('accordion__header__selected');
//             accordionContent.classList.add('selected');    
//         }

//         window.addEventListener('keydown', function (event) {
//             if (event.key === 'Escape' || event.key === 'Esc') {
//                 accordionContent.classList.remove('selected');
//                 accordionHeader.classList.remove('accordion__header__selected');
//             }
//         });
//     });
// })

// получаем все элементы с классом "prices__item" и добавляем обработчик события клика
document.querySelectorAll(".prices__item").forEach((item) => {
    item.addEventListener("click", () => {
        // Получаем элементы меню: заголовок, содержимое и стрелки
        const accordionHeader = item.querySelector(".accordion__header");
        const accordionContent = item.querySelector(".accordion__content");
        const accordionArrowTop = item.querySelector(".arrow-top");

        // Проверяем, открыто ли меню
        const isAccordionActive = accordionHeader.classList.contains("accordion__header__selected");

        if (isAccordionActive) {
            // Если меню уже открыто, то закрываем его и удаляем соответствующие классы
            accordionHeader.classList.remove("accordion__header__selected");
            accordionContent.classList.remove("selected");
        } else {
            // Если меню закрыто, то закрываем предыдущее открытое меню, если имеется в наличии
            const activeAccordion = document.querySelector(".prices__item .accordion__header__selected");

            if (activeAccordion) {
                const activeAccordionItem = activeAccordion.closest(".prices__item");
                const activeAccordionHeader = activeAccordionItem.querySelector(".accordion__header");
                const activeAccordionContent = activeAccordionItem.querySelector(".accordion__content");
                const activeAccordionArrowTop = activeAccordionItem.querySelector(".arrow-top");

                // Проверяем наличие активного меню перед удалением класса
                if (activeAccordionHeader) {
                    activeAccordionHeader.classList.remove("accordion__header__selected");
                }
                if (activeAccordionContent) {
                    activeAccordionContent.classList.remove("selected");
                }
                if (activeAccordionArrowTop) {
                    activeAccordionArrowTop.style.display = "block";
                }
            }

            // Открываем текущее меню и добавляем соответствующие классы
            accordionHeader.classList.add("accordion__header__selected");
            accordionContent.classList.add("selected");
        }

        window.addEventListener("keydown", function (event) {
            if (event.key === "Escape" || event.key === "Esc") {
                accordionContent.classList.remove("selected");
                accordionHeader.classList.remove("accordion__header__selected");
            }
        });
    });
});