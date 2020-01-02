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

    $('.close').on('click', function () {
        lightBox.css('display','none');
        $('body').removeClass('lb-open');
        lightBox.removeClass('view-image');
        $('.lb-image img').remove('img');
    });

});