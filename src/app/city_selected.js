const cityBtn = document.querySelector(".contact-us__selected")
const cityBtnOld = document.querySelector(".btn__city__bar");

if (cityBtn.classList.contains("contact-us__selected._active")) {

} else {
    cityBtn.addEventListener("click", function () {
        cityBtnOld.classList.toggle("_active");
        // cityBtn.classList.toggle("_active");
    })
}