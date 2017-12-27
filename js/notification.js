function floatNotify(btn, idStart, offsetStart, idEnd, offsetEnd) {
    var windowPos = Math.round($(window).scrollTop());
    var startOffsetTop = Math.round($(idStart).offset().top);

    // if only offset start
    if (windowPos > Math.round(startOffsetTop - offsetStart)) {
        $(btn).show();
    } else {
        $(btn).hide();
    }
}

$(window).bind('load resize orientationchange scroll', function() {
    var ww = window.innerWidth;
    var wh = window.innerHeight;

    if(ww > 1200) {
        floatNotify('#notification-3', '#details', 150);
        $('#notification-3').removeClass('bounceInUp').addClass('bounceInLeft');

        floatNotify('#notification-2', '#details', 350);
        $('#notification-2').removeClass('bounceInUp').addClass('bounceInLeft');

        floatNotify('#notification-1', '#details', 550);
        $('#notification-1').removeClass('bounceInUp').addClass('bounceInLeft');
    }
    if(ww > 992 && ww < 1200) {
        floatNotify('#notification-3', '#details', 0);
        $('#notification-3').removeClass('bounceInUp').addClass('bounceInLeft');

        floatNotify('#notification-2', '#details', 150);
        $('#notification-2').removeClass('bounceInUp').addClass('bounceInLeft');

        floatNotify('#notification-1', '#details', 420);
        $('#notification-1').removeClass('bounceInUp').addClass('bounceInLeft');
    }
});

$(window).bind('orientationchange resize load', function() {
    var ww = window.innerWidth;

    $('.notification__close').on('click', function (e) {
        e.preventDefault();
        var that = $(this);

        that.parent().removeClass('bounceInLeft').addClass('bounceOutLeft');

        setTimeout(function () {
            that.parent().removeClass('bounceOutLeft animation').addClass('hidden').hide();
        }, 1000);
    });
});
