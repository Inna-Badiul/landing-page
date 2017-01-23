document.addEventListener("DOMContentLoaded", function (event) {
    var hamburgerButton = document.querySelector(".hamburger-button"),
        listItem = document.querySelectorAll(".list-item"),
        navMenu = document.querySelector(".nav-menu"),
        isOpen = false;

    function closeMenu(item) {
        item.addEventListener("click", function () {
            navMenu.classList.remove("nav-open");
        });
    }

    function navOpen() {
        navMenu.classList.add("nav-open");
        isOpen = true;
    }
    function toggleMenu() {
        if (isOpen === false) {
            navOpen();
        } else {
            navMenu.classList.remove("nav-open");
            isOpen = false;
        }
    }
    hamburgerButton.addEventListener("click", toggleMenu);
    listItem.forEach(closeMenu);
});