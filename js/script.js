$(document).ready(function() {
    // Navigation
    $('#menu-toggle').on('click tap', function() {
        $('#header').toggleClass('opened');
        $('#mobile-menu-content').toggleClass('opened');
    });
});
