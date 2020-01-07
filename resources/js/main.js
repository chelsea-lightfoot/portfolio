$(document).ready(function() {

    var lightBox = $('#lightbox');

    $('#mobile-nav').on('click', function () {
        $('.nav-right').toggleClass('show-mobile-nav');
        $('body').toggleClass('mnav-open');
    });

    $('.nav-right .links a').on('click', function () {
        $('.nav-right').removeClass('show-mobile-nav');
        $('body').removeClass('mnav-open');
    });

    $('.lightbox-available').on('click', function () {
        var bg = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
        $('.lb-image').append($('<img src="' + bg + '">'));

        if (lightBox.hasClass('view-image')) {
            lightBox.css('display','none');
            $('body').removeClass('lb-open');
            lightBox.removeClass('view-image');
        } else {
            lightBox.css('display','flex');
            $('body').addClass('lb-open');
            lightBox.addClass('view-image');
        }
    });

    var close = function () {
        lightBox.css('display','none');
        $('body').removeClass('lb-open');
        lightBox.removeClass('view-image');
        $('.lb-image img').remove('img');
    };

    $('.close').on('click', close);
    $(document).keyup(function(e) {
        if (lightBox.is(':visible') && (e.keyCode == 27)) {
            close();
        }
    });

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#!"]')
        .click(function(event) {
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
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    //END SMOOTH SCROLLING STARTED ABOVE (Yes it's closed, Future Chelsea, I promise)

});