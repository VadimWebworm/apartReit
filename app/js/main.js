$(function () {

    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    })

    $('#preloader-inner').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');


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
        responsive: [
            {
                breakpoint: 1325,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 913,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },

        ]

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
        $('.about').css({ 'background-image': 'url("images/bg_about-adaptive.jpg")' });
        $('.menu__list').toggleClass('menu__list-adaptive');
        $('.slick-track').css({ 'min-width': '11000px' });


    }

    $('.rules__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.rules__tabs').find('.tab__item').removeClass('active-tab').hide();
        $('.rules__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    //custom scrollspy 
    var sections = $('.section__visible')
        , nav = $('.header__menu')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop()
        cur_pos = cur_pos + 10

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 500);

        return false;
    });

    //adaptive menu
    $('.header__menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.header__menu-btn').toggleClass('menu__btn-active');
        $('.header__menu').toggleClass('menu_active');
        $('.content').toggleClass('content_active');
        $('.menu__list').slideToggle();
    })
    $('.menu__list a').on('click', function (e) {
        e.preventDefault();
        $('.header__menu-btn').removeClass('menu__btn-active');
        $('.header__menu').removeClass('menu_active');
        $('.content').removeClass('content_active');
        $('.menu__list.menu__list-adaptive').slideUp();

    })
    $('.rc-flat[data-id="29111"]').toggleClass('.house__one')
    // $('[data-id="29111"]').toggleClass('.house__one')
    // var  = document.querySelector('.dropdown__content[data-content="'+data_id+'"]');


    if ($('body').is('.page__index')) {

        // Blocking scroll maps
        var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
        mapTitle.textContent = 'Для активации карты нажмите по ней';
        wrapMap.appendChild(mapTitle);
        wrapMap.onclick = function () {

            this.children[0].removeAttribute('style');

            mapTitle.parentElement.removeChild(mapTitle);
        }
        wrapMap.onmousemove = function (event) {
            mapTitle.style.display = 'block';
            if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
            if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
        }
        wrapMap.onmouseleave = function () {

            mapTitle.style.display = 'none';
        }


        $('.header').sticky({
            topSpacing: 0
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.whatsApp').fadeIn();
            } else {
                $('.whatsApp').fadeOut();
            }
        });

        const element = document.querySelector('#rc-small-bookings-widget-root');
        element.classList.add('animate__animated', 'animate__fadeInUp', 'wow');
    }

});

