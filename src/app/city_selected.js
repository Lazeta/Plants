const cityBtn = document.querySelector(".btn__city__bar")
const cityList = document.querySelector(".city-selection__bar");

cityBtn.addEventListener("click", function () {
    const cityBtnActive = cityBtn.classList.contains("._active");
    // if (cityBtnActive > 0) {
    //     cityBtn.classList.remove("_active");
    // } else {
    //     cityBtn.classList.add("_active");
    // }
    cityBtn.classList.toggle("_active");
    cityList.classList.toggle("_active");
})
