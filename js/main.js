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
// carousel button
$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
});
// carousel button

//menu burger 
$('#nav-icon').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
});

$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
	});
});
//menu burger 



