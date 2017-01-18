$(function() {
    $(".hamburger-button").click(function () {
        $(".menu-items-wrapper").show();
        $(".close-button").show();
        $(".nav-menu").addClass("nav-open");
    });

    $(".close-button").click(function () {
        $(".menu-items-wrapper").hide();
        $(".nav-menu").removeClass("nav-open");
        $(".close-button").hide();
    });

    $(".nav-menu a").click(function () {
        $(".menu-items-wrapper").hide();
        $(".nav-menu").removeClass("nav-open");
        $(".close-button").hide();
    });
    
});