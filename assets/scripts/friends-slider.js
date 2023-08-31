$(document).ready(function () {
    $('.friends-slider').slick({
        infinite: true,
        slidesToShow: 4,
        speed: 300,
        easing: 'ease',
        cssEase: 'ease-in',
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2
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
