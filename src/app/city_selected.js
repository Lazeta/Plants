const cityBtn = document.querySelector(".contact-us__selected")
const cityBtnOld = document.querySelector(".btn__city__bar");

cityBtn.addEventListener("click", function () {
    cityBtnOld.classList.toggle("_active");
    // cityBtn.classList.toggle("_active");
})