$(document).ready(function() {
    // Navigation
    $('#menu-toggle').on('click tap', function() {
        $('#header').toggleClass('opened');
        $('#mobile-menu-content').toggleClass('opened');
    });

    $('.dropdown-toggle').on('tap', function() {
        if (!$(this).parent('.menu-item').hasClass('opened')) {
            $('.menu-item.opened').removeClass('opened');
            $(this).parent('.menu-item').addClass('opened');
        } else {
            $('.menu-item.opened').removeClass('opened');
        };
    });

    // Window scroll effects
    $(window).scroll(function() {
        if (!$('#header').hasClass('scrolled') && $(this).scrollTop() >= 2) {
            $('#header').addClass('scrolled');
        }
        if ($(this).scrollTop() < 2 && $('#header').hasClass('scrolled')) {
            $('#header').removeClass('scrolled');
        }
    });
});
