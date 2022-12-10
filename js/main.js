const owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    loop: true,
    lazyLoad: true,
    margin: 30,
    startPosition: 0,
    items: 4,
    lazyLoad: true,
    responsive: {
        375: {
            items: 1,
        },
        425: {
            items: 1,
        },
        720: {
            items: 4,
            margin: 10,
        },
        1024: {
            items: 4,
            margin: 20,
        },
    },
});

$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})

$('.menu__btn').on('click', function(){
    $('menu__list').toggleClass('menu__list--active');
});



