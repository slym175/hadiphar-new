$(document).ready(function () {
    $('#icons-menu-primary').click(function (e) { 
        e.preventDefault();
        $('.header').toggleClass('show');
        $('.main').toggleClass('padding-header');
    });

    $('#btn-search-lg').click(function (e){
        e.preventDefault();
        $("#search-form").toggleClass('d-none');
    })

    $('.submenu-mask-js').click(function (e) { 
        e.preventDefault();
        console.log($(this).parents('.have-sub').children('.submenu'));
        $(this).parents('.have-sub').children('.submenu').toggleClass('opend')
    });
});