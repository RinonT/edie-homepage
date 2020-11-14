const showMenu = document.querySelector(".homepage_header_checkbox");
const navMenu = document.querySelector(".homepage_header_nav");
const hideMenu = document.querySelector("main");


showMenu.addEventListener("click", () => {
    if(showMenu.checked) {
        navMenu.classList.add("showMenu");
    } else {
        navMenu.classList.remove("showMenu");
    }
     
});

hideMenu.addEventListener("click", () => {
    navMenu.classList.remove("showMenu")
})