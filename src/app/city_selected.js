const cityBtn = document.querySelector(".btn__city__bar")
const cityList = document.querySelector(".city-selection__bar");
const cityCard = document.querySelector(".city__card");
const cityCardList = document.querySelectorAll(".city__card");
const cityItemOne = document.querySelector(".city-name__Canandaigua");
const cityItemTwo = document.querySelector(".city-name__New-York-City");
const cityItemThree = document.querySelector(".city-name__Yonkers");
const cityItemFour = document.querySelector(".city-name__Sherrill");
const ItemCity = document.querySelectorAll("[data-city]");
const selectOne = document.querySelector(".Canandaigua");

cityBtn.addEventListener("click", function () {
    // let IsCityBtnActive = cityBtn.classList.contains("_active");
    // const IsCityListActive = cityList.classList.contains("_active");


    cityBtn.classList.toggle("_active");
    cityList.classList.toggle("_active");

    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape" || event.key === "Esc") {
            cityBtn.classList.remove("_active");
            cityList.classList.remove("_active");
            
        }
    });
});

cityItemOne.addEventListener("click", function () {
    const cityList = document.querySelector(".city-selection__bar");
    const list = document.querySelector(".city-selection__list");
    const elem = document.querySelector(".Canandaigua");
    
    if (!elem) {
        console.log('!!!Not elem!!!');
    } 
    if (elem) {
        cityList.classList.toggle("_hidden");
        list.classList.toggle("_hidden");
        elem.closest(".city__card").classList.toggle("_init");
        // ItemCity.classList.toggle("_hidden");


        console.log('script work');
    }
});

cityItemTwo.addEventListener("click", function () {
    const cityList = document.querySelector(".city-selection__bar");
    const list = document.querySelector(".city-selection__list");
    const elem = document.querySelector(".Canandaigua");
    
    if (!elem) {
        console.log('!!!Not elem!!!');
    } 
    if (elem) {
        cityList.classList.toggle("_hidden");
        list.classList.toggle("_hidden");
        elem.closest(".city__card").classList.toggle("_init");
        ItemCity.classList.toggle("_hidden");


        console.log('script work');
    }
});

cityItemThree.addEventListener("click", function () {
    const cityList = document.querySelector(".city-selection__bar");
    const list = document.querySelector(".city-selection__list");
    const elem = document.querySelector(".Canandaigua");
    
    if (!elem) {
        console.log('!!!Not elem!!!');
    } 
    if (elem) {
        cityList.classList.toggle("_hidden");
        list.classList.toggle("_hidden");
        elem.closest(".city__card").classList.toggle("_init");
        ItemCity.classList.toggle("_hidden");


        console.log('script work');
    }
});

cityItemFour.addEventListener("click", function () {
    const cityList = document.querySelector(".city-selection__bar");
    const list = document.querySelector(".city-selection__list");
    const elem = document.querySelector(".Canandaigua");
    
    if (!elem) {
        console.log('!!!Not elem!!!');
    } 
    if (elem) {
        cityList.classList.toggle("_hidden");
        list.classList.toggle("_hidden");
        elem.closest(".city__card").classList.toggle("_init");
        ItemCity.classList.toggle("_hidden");


        console.log('script work');
    }
});

