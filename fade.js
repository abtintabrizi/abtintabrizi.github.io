$(document).ready(function () {

    $(window).scroll(function () {

        $('.fade').each(function (i) {
            var bottom_of_object = $(this).position().top + ($(this).outerHeight()) / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
    });
    $('.fade').each(function (i) {
        var bottom_of_object = $(this).position().top + ($(this).outerHeight()) / 5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
            $(this).animate({ 'opacity': '1' }, 1000);
        }
    });
});