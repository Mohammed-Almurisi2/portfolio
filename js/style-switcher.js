// ======================= Toggle Style Switcher ======================
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", function() {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
});

// ======================= Theme Colors ======================
const alternateStyles = document.querySelectorAll(".alternate-style");

if(window.sessionStorage.getItem("color")){
    alternateStyles.forEach(style => {
        if(window.sessionStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
    })
}

function setActiveStyle(color) {
    window.sessionStorage.setItem("color",color);
    alternateStyles.forEach((style) => {

        if(color === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");
        } 
        else
        {
            style.setAttribute("disabled","true");
        }
    });
}

// ======================= Theme Light And Dark Mode ======================
const dayNight = document.querySelector(".day-night");

if(window.sessionStorage.getItem("day-night")){
    if(window.sessionStorage.getItem("day-night") !== "dark")
    {
        // document.body.classList.remove("dark");
        document.body.classList.remove("dark");
    }
    else
    {
        document.body.classList.add("dark");
    }
}

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    let lightAndDark = document.body.classList.toggle("dark");
    if (lightAndDark)
    {
        window.sessionStorage.setItem("day-night","dark");
    }
    else
    {
        window.sessionStorage.setItem("day-night","light");
    }
});
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
});