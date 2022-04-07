$(document).ready(function () {
    $('.nav-bar').click(function (e) { 
        e.preventDefault();
        $('.header-category_menubar').addClass('active');
        $('.cover').addClass('active');
        
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.header-category_menubar').removeClass('active');
        $('.cover').removeClass('active');
    });
});