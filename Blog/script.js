var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slide-btn")
let currentSlider = 1

function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll to use";

    document.getElementById("icon-up").style.display = "none";

    document.getElementById("icon-down").style.display = "block";
}

//Manual images slider
var manualNav = function(manual) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
    });
        
    slides[manual].classList.add("active");
    buttons[manual].classList.add("active");        
}

buttons.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
        manualNav(i);
        currentSlider = i;
    })
})