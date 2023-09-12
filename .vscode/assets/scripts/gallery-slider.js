$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 300,
        easing: 'ease',
        cssEase: 'ease-in',
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



