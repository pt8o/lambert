$(document).ready(function() {
    // Navigation
    $('#menu-toggle').on('click tap', function() {
        $('#header').toggleClass('opened');
        $('#mobile-menu-content').toggleClass('opened');
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
