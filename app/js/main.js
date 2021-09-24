$(function () {
    $('.slider__inner').slick({
        fade: true,
        arrows: false,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2500,
    });
    $('.slider__inner-text').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        // focusOnSelect: true,
        arrows: false,
    })

    $('.about__album-inner').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.thumbs',
        arrows: false,
        speed: 200,
    });
    $('.thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        asNavFor: '.about__album-inner',
        focusOnSelect: true,
        arrows: false,

    });

    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom",
        transitionEffect: "fade",
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.contacts__wrapper').css({ 'background-attachment': 'scroll' });
        // $('.contacts__wrapper').css({ 'background-image': "url('../images/bg__contacts-page-mobile.jpg')" });
    }

    $('.rules__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.rules__tabs').find('.tab__item').removeClass('active-tab').hide();
        $('.rules__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
// Blocking scroll maps
 var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
 mapTitle.textContent = 'Для активации карты нажмите по ней';
 wrapMap.appendChild(mapTitle);
 wrapMap.onclick = function() {
    
     this.children[0].removeAttribute('style');
   
     mapTitle.parentElement.removeChild(mapTitle);
 }
 wrapMap.onmousemove = function(event) {
     mapTitle.style.display = 'block';
     if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
     if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
 }
 wrapMap.onmouseleave = function() {

     mapTitle.style.display = 'none';
 }

    //  // Перевод SVG в Inline
    //  $('img.header__logo').each(function () {
    //     var $img = $(this);
    //     var imgClass = $img.attr('class');
    //     var imgURL = $img.attr('src');
    //     $.get(imgURL, function (data) {
    //         var $svg = $(data).find('svg');
    //         if (typeof imgClass !== 'undefined') {
    //             $svg = $svg.attr('class', imgClass + ' replaced-svg');
    //         }
    //         $svg = $svg.removeAttr('xmlns:a');
    //         if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
    //             $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    //         }
    //         $img.replaceWith($svg);
    //     }, 'xml');
    // });

});
 