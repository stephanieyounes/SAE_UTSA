$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
       $('.sticky-header').addClass('fixed');
    }
    else {
       $('.sticky-header').removeClass('fixed');
    }
});

