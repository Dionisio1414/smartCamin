$(function() {
    $('#carousel').featureCarousel({
        largeFeatureWidth: 0.8,
        largeFeatureHeight: 0.8,
        smallFeatureWidth: 0.5,
        smallFeatureHeight: 0.5,
        trackerSummation: false,
        autoPlay: 0
    });
    
    $('.experience__content .slider-pagination ul li.next a, .experience__content .slider-pagination ul li.prev a').click(function(e) {
        e.preventDefault();
    });
    
    var $carouselItems = $('.experience__carousel > div'),
        $paginationArea = $('.experience__content .slider-pagination ul li.prev'),
        $arr = [];
    $carouselItems.each(function(i) {
        $arr.push(i + 1);    
    });
    $arr.reverse();
    $arr.forEach(function(i) {
        $paginationArea.after('<li><a href="#">' + i + '</a></li>'); 
    });
    $('.experience__content .slider-pagination ul li:not(.next)').last().css('margin-right', '0');
    
    $('.steps__tabs-slider').slick({
        slidesToShow: 5,
        arrows: true,
        prevArrow: $('.steps__tabs-slider-arrows .prev'),
        nextArrow: $('.steps__tabs-slider-arrows .next')
    });
    
    var $stepSlides = $('.steps__tabs-slider .slick-slide:not(.slick-cloned)'), $wrapperContent = $('.steps .wrapper');
    $stepSlides.click(function() {
        $(this).addClass('slick-current').siblings('.slick-active').removeClass('slick-current'); 
        $wrapperContent.removeClass('active').eq($(this).index() - 5).addClass('active');
    });
    
    $('.steps__tabs-slider .slick-slide div div a').click(function(e) {
        e.preventDefault();
    });
    
    $('.service__item').hover(function() {
        var $imageHeight = $(this).find('.image').height(),
            $itemHeight = $(this).height();
        $(this).find('.image img').css({
            "max-height" : $itemHeight, 
            height : $itemHeight
        });
        $(this).addClass('hovered').find('.desc').css({
            "max-height" : 'none',
            bottom: 'auto',
            height: $itemHeight,
            top: 0
        });
    }, function() {
        $(this).removeClass('hovered').find('.desc').css({
            "max-height" : 120,
            top: 'auto',
            height: 'auto',
            bottom: 0  
        });
    });
    
    $('.gallery .gallery-slider').slick({
        slidesToShow: 1,
        dots: true
    });
    
    var $dotsClone = $('.gallery .gallery-slider .slick-dots').clone(true),
        $customDots = $('.gallery .gallery__dots');
    $('.gallery .gallery-slider .slick-dots').remove();
    $customDots.html($dotsClone);
    
    
    var $hdr = $('.header');
    
    $(window).scroll(function() {
        if($(this).scrollTop() >= 100) $hdr.addClass('sticky')
        else $hdr.removeClass('sticky'); 
    });  
    
    if($(window).width() > 575) {
        $('.consultation__content > a').hover(function() {
            $(this).find('span.arrow').animate({
                width: "100%"
            }, 200);
            $(this).find('.text').animate({
                opacity: 0 
            }, 500);
        }, function() {
            $(this).find('span.arrow').animate({
                width: '14%'
            }, 450);
            $(this).find('.text').delay(600).animate({
                opacity: 1 
            }, 400)
        });   
    }
    
    var $heightHeader = $('header').height(),
        $widthMenu = $('.header__popup-menu');
    if($(window).width() < 992) {
        $widthMenu.css({
            top : -$heightHeader
        });   
    }
    
    var $popupMenu = $('.header__popup-menu'); 
    $('.header__hamburger-menu').click(function() {
       if(!$popupMenu.hasClass('open-popup')) {
           $popupMenu
                .addClass('open-popup')
                .animate({
                    right: 0
                }, 600);
           $(this).addClass('open');
       } else {
           $popupMenu
                .animate({
                    right: '-45%'
                }, 350, function() {
                    $(this).removeClass('open-popup');
                });
           $(this).removeClass('open');
       }
    });
    
    console.log(calculatePercent());
    
    
});

Array.prototype.last = function() {
    return this[this.length - 1];
}
