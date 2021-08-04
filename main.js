//INITIALIZE AOS
AOS.init();

//SCROLL BUTTON
const btnScroll = document.querySelector("#scrollButton");

const root = document.documentElement;

btnScroll.addEventListener("click", scrollFunc);

function scrollFunc() {
    root.scrollTo({
        top: 0,
        behaviour: "smooth"
    })
}

//NAVBAR HAMBURGER
const hamburgerBtn = document.querySelector("#hamburger-btn");
const lineTop = document.querySelector(".top-line");
const lineCenter = document.querySelector(".center-line");
const lineBottom = document.querySelector(".bottom-line");
const navigation = document.querySelector("#side-nav");

hamburgerBtn.addEventListener("click", function() {
   lineTop.classList.toggle("active");
   lineCenter.classList.toggle("active");
   lineBottom.classList.toggle("active");
   navigation.classList.toggle("show");
})