// Animated Scroll (Menu)

$('ul a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset -menuHeight
    }, 800)
});

$('div a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset -100
    }, 800)
});

// Animated Scroll (Objects)

// Código para não repetir a função milhares de vezes no site, melhorando assim, a performance.
debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args =arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// LEFT TO RIGHT
(function() {
    var $target = $('.anime_left_to_right'),
        animationClass = 'anime_start_left_to_right';
        offset = $(window).height();

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        console.log(documentTop);
        
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }
    animeScroll();
    $(document).scroll(debounce(function(){
        animeScroll();
    }, 200));
}());

// BOTTOM TO TOP
(function() {
    var $target = $('.anime_bottom_to_top'),
        animationClass = 'anime_start_bottom_to_top';
        offset = $(window).height();

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }
    animeScroll();
    $(document).scroll(debounce(function(){
        animeScroll();
    }, 200));
}());

// RIGHT TO LEFT
(function() {
    var $target = $('.anime_right_to_left'),
        animationClass = 'anime_start_right_to_left';
        offset = $(window).height() * 3/4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }
    animeScroll();
    $(document).scroll(debounce(function(){
        animeScroll();
    }, 200));
}());

// TOP TO BOTTOM
(function() {
    var $target = $('.anime_top_to_bottom'),
        animationClass = 'anime_start_top_to_bottom';
        offset = $(window).height() * 3/4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }
    animeScroll();
    $(document).scroll(debounce(function(){
        animeScroll();
    }, 200));
}());
