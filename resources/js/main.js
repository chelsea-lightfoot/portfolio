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

    $('.lightboxAvailable').on('click', function () {
        var image = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');

        var largeImage = $(this).data("lburl");
        var multiImage = $(this).data("multi");
        var origin = window.location.origin;
        var pathArray = window.location.pathname.split('/');
        var secondLevelPath = pathArray[1];

        if (multiImage === true) {
            $('#lightbox').addClass("multi-image");
            var imageArray = $(this).data('lburl').split(',');

            $.each(imageArray, function(index, url) {
                if (origin === "http://localhost:63342") {
                    $('.lb-container').append($('<div class="lb-image"><img src="' + origin + '/' + secondLevelPath + '/' + url + '"></div>'));
                } else {
                    $('.lb-container').append($('<div class="lb-image"><img src="' + origin + '/' + url + '"></div>'));
                }
            });
        } else {
            if (origin === "http://localhost:63342") {
                $('.lb-container').append($('<div class="lb-image"><img src="' + origin + '/' + secondLevelPath + '/' + largeImage + '"></div>'));
            } else {
                $('.lb-container').append($('<div class="lb-image"><img src="' + origin + '/' + largeImage + '"></div>'));
            }
        }

        if ($(this).data('mobilesize') === true) {
            $('.lb-image').addClass('mobile');
        }
        if ($(this).data('longsize') === true) {
            $('.lb-container').addClass('long-img');
            $('.lb-image').addClass('long-img');
        }
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
        $('.lb-container .lb-image').remove('.lb-image');
        $('.lb-image').removeClass('mobile').removeClass('long-img');
        $('.lb-container').removeClass('long-img');
    };

    $('.close').on('click', close);
    $(document).keyup(function(e) {
        if (lightBox.is(':visible') && (e.keyCode == 27)) {
            close();
        }
    });


    //SMOOTH SCROLLING
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