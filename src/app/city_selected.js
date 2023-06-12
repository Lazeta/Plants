const cityBtn = document.querySelector(".btn__city__bar")
const cityList = document.querySelector(".city-selection__bar");
// const cityCard = document.querySelector(".city__card");
// const cityCardList = document.querySelectorAll(".city__card");
// const cityItemOne = document.querySelector(".city-name__Canandaigua");
// const cityItemTwo = document.querySelector(".city-name__New-York-City");
// const cityItemThree = document.querySelector(".city-name__Yonkers");
// const cityItemFour = document.querySelector(".city-name__Sherrill");
const selectOne = document.querySelector(".Canandaigua");
const itemCity = document.querySelectorAll("[data-city]");
const cardList = document.querySelectorAll("[city-item]")
const list = document.querySelector(".city-selection__list");

// console.log(itemCity)
cityBtn.addEventListener("click", function () {
    // let IsCityBtnActive = cityBtn.classList.contains("_active");
    // const IsCityListActive = cityList.classList.contains("_active");
    cityBtn.classList.toggle("_active");
    cityList.classList.toggle("_active");
});

 
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
        cityBtn.classList.remove("_active");
        cityBtn.classList.remove("_hidden");
        cityList.classList.remove("_active");
        cityList.classList.remove("_hidden");
        // cardList.classList.remove("_init");
    }
});



itemCity.forEach(function (item) {
    
    item.addEventListener("click", function() {
        const elem = document.querySelector(".Canandaigua");
        const elem2 = document.querySelector(".New-York-City");
        const elem3 = document.querySelector(".Yonkers");
        const elem4 = document.querySelector(".Sherrill");

        if(elem) {
            cityList.classList.add("_hidden");
            cityBtn.classList.add("_hidden");
            elem.closest(".city__card").classList.toggle("_init");
        } if (elem2) {
            cityList.classList.add("_hidden");
            cityBtn.classList.add("_hidden");
            ele2.closest(".city__card").classList.toggle("_init");
        } if (elem3) {
            cityList.classList.add("_hidden");
            cityBtn.classList.add("_hidden");
            ele3.closest(".city__card").classList.toggle("_init");
        } if (elem4) {
            cityList.classList.toggle("_hidden");
            cityBtn.classList.toggle("_hidden");
            elem4.closest(".city__card").classList.toggle("_init");
        } else {
            console.log("isn't this element!")
        }
    });
});


// Проверить этот варик
// itemCity.forEach(function (item) {
//     item.addEventListener("click", function() {
//         const city = this.dataset.city;
//         const elem = document.querySelector(`[data-city="${city}"]`);
//         if (elem) {
//             cityList.classList.add("_hidden");
//             cityBtn.classList.add("_hidden");
//             elem.closest(".city__card").classList.toggle("_init");
//         } else {
//             console.log("This element doesn't exist!");
//         }
//     });
// });
