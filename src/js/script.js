/* Использование slick-slider */

/* $(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 500,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrows/right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
}); */


/* Использование tiny-slider */

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false,
    responsive: {
        0: {
            autoplay: true,
            autoplayTimeout: 2000
        },
        1080: {
            autoplay: false
        }
    }
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev')
});
document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next')
});