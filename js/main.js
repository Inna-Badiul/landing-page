document.addEventListener("DOMContentLoaded", function (event) {
    var hamburgerButton = document.querySelector(".hamburger-button"),
        listItem = document.querySelectorAll(".list-item"),
        navMenu = document.querySelector(".nav-menu"),
        isOpen = false;

    function closeMenu() {
        navMenu.classList.remove("nav-open");
        isOpen = false;
    }

    function openMenu() {
        navMenu.classList.add("nav-open");
        isOpen = true;
    }

    function toggleMenu() {
        if (isOpen === false) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    function closeByClickOnMenuItem(item) {
        item.addEventListener("click", closeMenu);
    }

    hamburgerButton.addEventListener("click", toggleMenu);
    listItem.forEach(closeByClickOnMenuItem);
    smoothScroll.init();
});