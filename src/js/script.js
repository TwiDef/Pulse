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

// подключение табов 
(function($) {
    $(function() {
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

        // табы карточек 
        function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            });
        };
        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');
    });
})(jQuery);





/* $(document).ready(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

}); */