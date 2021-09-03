$(function () {
    $('.slider__inner').slick({
        fade: true,
        arrows: false,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2500,
    });
    $('.slider__inner-background').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        focusOnSelect: true,
        arrows: false,
    })

});