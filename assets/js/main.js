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