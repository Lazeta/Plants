const cityBtn = document.querySelector(".btn__city__bar")
const cityList = document.querySelector(".city-selection__bar");
const itemCity = document.querySelectorAll("[data-city]");
const cardList = document.querySelectorAll("[city-item]")

cityBtn.addEventListener("click", function () {
    cityBtn.classList.toggle("_active");
    cityList.classList.toggle("_active");
});


window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
        cityBtn.classList.remove("_active");
        cityBtn.classList.remove("_hidden");
        cityList.classList.remove("_active");
        cityList.classList.remove("_hidden");
    }
});

function mouseOverButton() {
    let cityList = document.querySelector(".city-selection__bar");
    let cityBtn = document.querySelector(".btn__city__bar");

    cityBtn.addEventListener("mouseout", function (event) {
        cityList.classList.remove("_active");
    }); 
    cityBtn.addEventListener("mouseover", function(event) {
        cityList.classList.add("_active"); 
    });
}

function mouseOverList() {

}

itemCity.forEach(function (item) {

    item.addEventListener("click", function () {
        const elem1 = document.querySelector(".Canandaigua");
        const elem2 = document.querySelector(".New-York-City");
        const elem3 = document.querySelector(".Yonkers");
        const elem4 = document.querySelector(".Sherrill");

        window.addEventListener("keydown", function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
                elem1.classList.remove("_init");
                elem2.classList.remove("_init");
                elem3.classList.remove("_init");
                elem4.classList.remove("_init");
            }
        });

        if (elem1.classList.contains('_init') || elem2.classList.contains('_init') || elem3.classList.contains('_init') || elem4.classList.contains('_init')) {
            elem1.classList.remove("_init");
            elem2.classList.remove("_init");
            elem3.classList.remove("_init");
            elem4.classList.remove("_init");
        }
        if (item.classList.contains("city-name__Canandaigua")) {
            cityList.classList.add("_hidden");
            cityBtn.classList.add("_hidden");
            elem1.closest(".city__card").classList.add("_init");
            return item
        } else if (item.classList.contains('city-name__New-York-City')) {
            cityList.classList.add("_hidden");
            cityBtn.classList.add("_hidden");
            elem2.closest(".city__card").classList.add("_init");
            return item
        } else if (item.classList.contains('city-name__Yonkers')) {
            cityList.classList.add("_hidden");
            cityBtn.classList.add("_hidden");
            elem3.closest(".city__card").classList.add("_init");
            return item
        } else if (item.classList.contains('city-name__Sherrill')) {
            cityList.classList.toggle("_hidden");
            cityBtn.classList.toggle("_hidden");
            elem4.closest(".city__card").classList.add("_init");
            return item
        } else console.log("this element does not exist!");
    });
});