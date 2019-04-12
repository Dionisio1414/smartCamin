$(function() {
    // if($(window).width() > 1366) {
    //     $('#carousel').featureCarousel({
    //         largeFeatureWidth: 0.8,
    //         largeFeatureHeight: 0.8,
    //         smallFeatureWidth: 0.5,
    //         smallFeatureHeight: 0.5,
    //         trackerSummation: false,
    //         autoPlay: 0
    //     });
    // }

    // if($(window).width() < 1366) {
    //     $('#carousel').featureCarousel({
    //         largeFeatureWidth: 0.6,
    //         largeFeatureHeight: 0.6,
    //         smallFeatureWidth: 0.3,
    //         smallFeatureHeight: 0.3,
    //         trackerSummation: false,
    //         autoPlay: 0
    //     });
    // }

    // if($(window).width() < 1200) {
    //     $('#carousel').featureCarousel({
    //         largeFeatureWidth: 0,
    //         largeFeatureHeight: 0,
    //         smallFeatureWidth: 0,
    //         smallFeatureHeight: 0,
    //         trackerSummation: false,
    //         autoPlay: 0
    //     });
    // }

    var resolution_1 = {
        forcedImageWidth: 450,
        forcedImageHeight: 550
    }

    var resolution_2 = {
        forcedImageWidth: 400,
        forcedImageHeight: 500
    }

    var resolution_3 = {
        forcedImageWidth: 350,
        forcedImageHeight: 450
    }

    var resolution_4 = {
        flankingItems: 1
    }

    $('#carousel').waterwheelCarousel();

    if($(window).width() < 1600) {
        $('#carousel').waterwheelCarousel(resolution_1);
    }

    if($(window).width() < 1440) {
         $('#carousel').waterwheelCarousel(resolution_2);
    }

    if($(window).width() < 1366) {
        $('#carousel').waterwheelCarousel(resolution_3);
    }

    if($(window).width() < 1200) {
        $('#carousel').waterwheelCarousel(resolution_1);
    }

    if($(window).width() < 768) {
        $('#carousel').waterwheelCarousel(resolution_2);
    }

    if($(window).width() < 576) {
        $('#carousel').waterwheelCarousel(resolution_4);
    }

    var $carouselExp = $('#carousel').waterwheelCarousel(); 
    $('.experience__content .slider-pagination ul li.next a').click(function() {
        $carouselExp.next();
        return false;
    });
    
    $('.experience__content .slider-pagination ul li.prev a').click(function() {
        $carouselExp.prev();
        return false;
    });
    
    var $carouselItems = $('.experience__carousel > img'),
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
        nextArrow: $('.steps__tabs-slider-arrows .next'),
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
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
});

Array.prototype.last = function() {
    return this[this.length - 1];
}
