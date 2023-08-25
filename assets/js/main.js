// AOS
// below listed default settings
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    offset: 0,
    startEvent: 'load',
});

// navbar
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100)
        $(".navbar").addClass("scroll");
    else
        $(".navbar").removeClass("scroll");
});

// hamburger
$('.navbar_hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.navbar_hamburger_menu').toggleClass('open');
    if ($('.navbar_hamburger').hasClass('open'))
        $('html').css({ 'overflow': 'hidden' })
    else
        $('html').css({ 'overflow': 'scroll' })
})

// full width container
function fullWidthContainer() {
    var _windowWidth = $(window).innerWidth(),
        _containerWidth = 1120,
        _actualWidth = (_windowWidth - _containerWidth) / 2;
    $('.full_width_container').css(
        { 'padding-left': _actualWidth }
    );
}

// move background
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    //  translate = 'translateX(' + x + 'px, ' + y + 'px)';
    translate = 'translateX(' + x + 'px) translateY(' + y + 'px)';

    $('.animate-this').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    var isHovered = $('.animate-this:hover').length > 0;

    //if(!$(e.target).hasClass('animate-this')) {
    if (!isHovered) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
            lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

        lFollowX = (30 * lMouseX) / 100;
        lFollowY = (30 * lMouseY) / 100;
    }
});

moveBackground();

// tabs
$('.tab').on('click', function (evt) {
    evt.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
});

// window load
$(window).on('load', function () {
    setTimeout(function () {
        fullWidthContainer();
    }, 300)

    // team carousel
    $('.team_carousel .owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        smartSpeed: 800,
        margin: 32,
        center: false,
        responsive: {
            320: {
                items: 1,
                margin: 10,
                center: false,
                stagePadding: 20
            },
            768: {
                items: 1,
                margin: 64,
                stagePadding: 150
            }
        }
    })

    // logos carousel
    $('.logos_carousel .owl-carousel').each(function () {
        var _rtlSet = ($(this).parent().attr('data-reverse') === 'true') ? true : false;

        $(this).owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            smartSpeed: 800,
            margin: 32,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 3800,
            autoplaySpeed: 3800,
            // autoplayHoverPause: true,
            rtl: _rtlSet,
            responsive: {
                320: {
                    items: 2,
                    margin: 10,
                },
                768: {
                    items: 3,
                    margin: 60,
                }
            }
        })
    })


    // case studies carousel

    // $('.case_carousel_each_info_btm .play').on('click', function () {
    //     $(this).parents('.case_carousel_each').find('video').trigger('play');
    //     $(this).parents('.case_carousel_each').find('video').attr('controls', true);
    //     $(this).parents('.case_carousel_each').addClass('playing');
    //     $(this).parents('.case_carousel_each').find('video').on('ended pause', function () {
    //         $(this).parents('.case_carousel_each').find('video').attr('controls', false);
    //         $(this).parents('.case_carousel_each').removeClass('playing');
    //     });
    // })

    $('.case_carousel_each_info_btm .play').on('click', function () {
        $('.case_modal').addClass('open');
        var _videoSrc = $(this).parents('.case_carousel_each').find('.case_carousel_each--video').attr('data-src');
        $('.case_modal iframe').attr('src', _videoSrc);
    })

    $('.case_modal .case_modal--close').on('click', function () {
        $('.case_modal').removeClass('open');
        $('.case_modal iframe').attr('src', "");
    })

    var caseOwl = $('.case_carousel .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 800,
        margin: 32,
        center: true,
        responsive: {
            320: {
                items: 1,
                margin: 10,
                center: false,
                stagePadding: 20
            },
            768: {
                items: 1,
                margin: 64,
                stagePadding: 350
            }
        }
    })

    caseOwl.on('changed.owl.carousel', function (event) {
        $(this).find('video').trigger('pause');
        $(this).find('video').attr('controls', false);
        $(this).find('.case_carousel_each').removeClass('playing');
    })


    // leadership carousel
    $('.leadership_carousel .owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        smartSpeed: 800,
        margin: 32,
        center: true,
        responsive: {
            320: {
                items: 1,
                margin: 10,
                center: false,
            },
            768: {
                items: 1,
                margin: 64,
            }
        }
    })
})