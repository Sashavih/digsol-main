$(document).ready(function(){  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.header').fadeOut();
        }else {
            $('.header').fadeIn();
        }
    });
});