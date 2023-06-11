const cityBtn = document.querySelector(".btn__city__bar")
const cityList = document.querySelector(".city-selection__bar");
const cityCard = document.querySelector(".city__card");
const cityCardList = document.querySelectorAll(".city__card");
const cityItemOne = document.querySelector(".city-name__Canandaigua");
const cityItemTwo = document.querySelector(".city-name__New-York-City");
const cityItemThree = document.querySelector(".city-name__Yonkers");
const cityItemFour = document.querySelector(".city-name__Sherrill");
const ItemCity = document.querySelectorAll("[data-city]");

cityBtn.addEventListener("click", function () {
    const cityBtnActive = cityBtn.classList.contains("._active");


    // if (itemCity)

    cityBtn.classList.toggle("_active");
    cityList.classList.toggle("_active");

    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape" || event.key === "Esc") {
            cityBtn.classList.remove("_active");
            cityList.classList.remove("_active");
        }
    });

    // document.addEventListener('mouseover', function (e) {
    //     const target = e.target;
    //     const nearData = target.closest('[data-display]')
    //     if (target.matches('[data-display]')) {
    //         target.style.display = 'block';
    //     }
    // });

    // document.addEventListener('mouseout', function (e) {
    //     const target = e.target;
    //     const nearData = target.closest('[data-display]')
    //     if (target.matches('[data-display]')) {
    //         target.style.display = 'none';
    //     }
    // });
});

// ItemCity.addEventListener("click", function (event) {
//     let item = event.target.classList.closest(".city__card")
//     item.classList.add("._select");
// });
