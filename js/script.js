// ====================== typing animation ======================
    var typed = new Typed(".typing",{
        strings:[" ","Web Developer","Web Designer"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
    });
// ====================== Active The Link ======================
// let lis = document.querySelectorAll(".nav li a");

// if(window.sessionStorage.getItem("id")){ 
//     lis.forEach((a) => {
//         a.classList.remove("active");
       
//     });
//     let valueId = window.sessionStorage.getItem("id");
//     let link = document.getElementById(valueId);
//     link.classList.add("active");
//     link.style.cssText = `transision:all 0.3s ease;transform:scale(1.15)`;
// }
// lis.forEach( function (li) {
//   let id =  li.getAttribute("id");
//     li.onclick = function(e) {
//         window.sessionStorage.setItem("id",id);
        
//     }
// });
// lis.forEach((li) => {
//     let id =  li.getAttribute("id");
//     li.addEventListener("click", (e) => {
//         // Remove Active Class From Lis
//         lis.forEach((a) => {
//             a.classList.remove("active");
//             a.style.cssText = `transision:all 0.3s ease;transform:scale(1)`;
//         });
//         window.sessionStorage.setItem("id",id)
        

//         // Add Active Class To Current Element
//         e.currentTarget.classList.add("active");
//         li.style.cssText = `transision:all 0.3s ease;transform:scale(1.15)`;
    
//     });
// });

// ====================== aside ======================nav-toggler

let checkValue = document.querySelectorAll(".nav li a");
if(window.sessionStorage.getItem("id")){
    checkValue.forEach( (check) => {
        const targetCheck = check.getAttribute("href").split("#")[1];
        if(window.sessionStorage.getItem("id") === targetCheck){
            checkValue.forEach((a) => {
                a.classList.remove("active");
                a.style.cssText = `transision:all 0.3s ease;transform:scale(1)`;      
            });
            check.classList.add("active");
            document.querySelector("#" + targetCheck).classList.add("active");
            check.style.cssText = `transision:all 0.3s ease;transform:scale(1.15)`;
        }
    });
}

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      allSection = document.querySelectorAll(".section");
      totalSection = allSection.length;

for(let i = 0; i< totalNavList; i++)
{
const b = navList[i].querySelector("a");
b.addEventListener("click", function() {

    for(let i = 0; i< totalSection; i++){
        allSection[i].classList.remove("back-section");
    }

    for(let j = 0; j< totalNavList; j++){
        navList[j].querySelector("a").classList.remove("active");
        navList[j].querySelector("a").style.cssText = `transision:all 0.3s ease;transform:scale(1)`;
        if(navList[j].querySelector("a").classList.contains("active")){
            allSection[j].classList.add("back-section");
        }
    }
    this.classList.add("active");
    this.style.cssText = `transision:all 0.3s ease;transform:scale(1.15)`;
    showSection(this);
    if(window.innerWidth < 1200){
        showAndHideAside();
    }
});
}

function showSection(element) 
{
    for(let i = 0; i< totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
    window.sessionStorage.setItem("id",target);
}

// ====================== aside btn nav-toggler ======================

function  updateNav(element) {
    for(let i = 0; i< totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target ===  navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
let hireMet = document.querySelectorAll(".hire-me");
hireMet.forEach( (a) => {
    a.addEventListener("click", function() {
        showSection(this);
        updateNav(this);
    });
})

const navTogglerBtn = document.querySelector(".nav-toggler");
const asideShow = document.querySelector(".aside");
const sectionMove = document.querySelector(".section");
navTogglerBtn.addEventListener("click", () => {
    showAndHideAside();
})

function showAndHideAside () {
    asideShow.classList.toggle("open");
    sectionMove.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    let hom = document.querySelector(".home");
    for(let i = 0; i< totalSection; i++)
    {
        allSection[i].classList.toggle("open");
        hom.classList.toggle("open");
    }

}

