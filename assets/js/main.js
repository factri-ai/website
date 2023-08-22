// AOS
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 20, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
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
    )

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
    console.log(isHovered);

    //if(!$(e.target).hasClass('animate-this')) {
    if (!isHovered) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
            lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

        lFollowX = (30 * lMouseX) / 100;
        lFollowY = (30 * lMouseY) / 100;
    }
});

moveBackground();

// window load
$(window).on('load', function () {
    fullWidthContainer();

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
})