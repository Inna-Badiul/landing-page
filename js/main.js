$(function() {
    var $navMenu =  $(".nav-menu");
    $(".hamburger-button").click(function () {
        $navMenu.fadeToggle();
        $navMenu.addClass("nav-open");
    });

    $(".nav-menu a").click(function () {
        $navMenu.hide();
        $navMenu.removeClass("nav-open");
    });
    
});