var hamburgerButton = document.getElementsByClassName("hamburger-button");
var listItem = document.getElementsByClassName("list-item");
var navMenu = document.getElementsByClassName("nav-menu");


hamburgerButton[0].addEventListener("click", function () {
    navMenu[0].style.display = "block";
    navMenu[0].classList.add("nav-open");
});

for (var i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", function () {
        navMenu[0].style.display = "none";
        navMenu[0].classList.remove("nav-open");
    });
}