const cityBtn = document.querySelector(".btn__city__bar")
const cityList = document.querySelector(".city-selection__bar");
const itemCity = document.querySelectorAll("[data-city]");
// const cardList = document.querySelectorAll("[city-item]")
// const isClicked = false;

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
        cityBtn.classList.remove("_active");
        cityBtn.classList.remove("_hidden");
        cityList.classList.remove("_active");
        cityList.classList.remove("_hidden");
    }
});

function mouseOverButton() {
    cityBtn.addEventListener("mouseover", () => {
        cityBtn.classList.add("_active");
        cityList.classList.add("_active");
    });

    cityBtn.addEventListener("mouseout", () => {
        cityBtn.classList.remove("_active");
        cityList.classList.remove("_active");
    });
}

function mouseOverList() {
    cityList.addEventListener("mouseover", () => {
        cityBtn.classList.add("_active");
        cityList.classList.add("_active");
    });

    cityList.addEventListener("mouseout", (event) => {
        if (!event.relatedTarget || !cityList.contains(event.relatedTarget)) {
            cityList.classList.remove("_active");
            cityBtn.classList.remove("_active");
        }
    });
}

function CityClick(event) { 
    const target = event.target; // на каком элементе был совершен клик
    const city = target.dataset.city; // Получаем значение атрибута data-city элемента, на котором произошел клик.
    if (!city) { 
        return;
    }

    const elem = document.querySelector(`.${city}`);
    if (!elem) {
        console.log("this element does not exist!");
        return;
    }

    if (elem.classList.contains('_init')) {
        elem.classList.remove("_init");
    } else {
        document.querySelectorAll("[city-item]._init").forEach((el) => {
            el.classList.remove("_init");
        });
        elem.classList.add("_init");
    }

    cityList.classList.add("_hidden");
    cityBtn.classList.add("_hidden");
}

itemCity.forEach((element) => {
    element.addEventListener("click", CityClick);
});

mouseOverButton();
mouseOverList();