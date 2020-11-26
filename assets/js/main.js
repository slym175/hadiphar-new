$(document).ready(function () {
    $('#icons-menu-primary').click(function (e) {
        e.preventDefault();
        $('.header').toggleClass('show');
        $('.main').toggleClass('padding-header');
    });

    $('#btn-search-lg').click(function (e) {
        e.preventDefault();
        $("#search-form").toggleClass('d-none');
    })

    $('.submenu-mask-js').click(function (e) {
        e.preventDefault();
        console.log($(this).parents('.have-sub').children('.submenu'));
        $(this).parents('.have-sub').children('.submenu').toggleClass('opend')
    });

    $('.foot-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: true,
        autoHeight: true
    })

    $('.head-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        autoHeight: true
    })

    $('.home-new-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        // autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    $(window).scroll(function () {

        if ($(this).scrollTop() > 500) {

            $('.icons-uptotop').fadeIn();

        } else {

            $('.icons-uptotop').fadeOut();

        }

    });

    $('.icons-uptotop').click(function () {

        $('html, body').animate({

            scrollTop: 0

        }, 800);

        return false;

    });
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();