document.addEventListener("DOMContentLoaded", function (event) {
    var hamburgerButton = document.querySelector(".hamburger-button"),
        listItem = document.querySelectorAll(".list-item"),
        navMenu = document.querySelector(".nav-menu");

    hamburgerButton.addEventListener("click", function () {
        navMenu.classList.add("nav-open");
    });

    listItem.forEach(function (item) {
        item.addEventListener("click", function () {
            navMenu.classList.remove("nav-open");
        });
    });
});