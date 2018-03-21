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

    // Add nav-header bottom border on scroll
    $(window).scroll(function() {
        if (!$('#header').hasClass('scrolled') && $(this).scrollTop() >= 2) {
            $('#header').addClass('scrolled');
        }
        if ($(this).scrollTop() < 2 && $('#header').hasClass('scrolled')) {
            $('#header').removeClass('scrolled');
        }
    });

    // Smooth scroll on anchor click
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .on('click tap', function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 144 + 'px'
            }, 1000, function() {
              // Change focus?
              // var $target = $(target);
              // $target.focus();
              // if ($target.is(":focus")) { // Checking if the target was focused
              //   return false;
              // } else {
              //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              //   $target.focus(); // Set focus again
              // };
            });
          }
        }
    });

    // Show/hide sidebar on scroll
    if ($('.sidebar')) {
        $(window).scroll(function() {
            if (!$('.sidebar').hasClass('active')) {
                if ($(window).scrollTop() - $('.sidebar-reference').offset().top + 240 > 0) {
                    $('.sidebar').addClass('active');
                }
            } else {
                if ($(window).scrollTop() - $('.sidebar-reference').offset().top + 240 < 0) {
                    $('.sidebar').removeClass('active');
                }
            }
        });
    }
});
