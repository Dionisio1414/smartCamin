$(function() {
    var $globalIndex;
    
    var resolution_1 = {
        forcedImageWidth: 400,
        forcedImageHeight: 500
    }

    var resolution_2 = {
        forcedImageWidth: 320,
        forcedImageHeight: 400
    }

    var resolution_3 = {
        forcedImageWidth: 300,
        forcedImageHeight: 400
    }

    var resolution_4 = {
        forcedImageWidth: 292,
        forcedImageHeight: 283,
        flankingItems: 1
    }    

    $('#carousel').waterwheelCarousel(resolution_1);
    
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
    
    var $carouselItems = $('.experience__carousel > img'),
        $paginationArea = $('.experience__content .slider-pagination ul li.prev'),
        $arr = [];
    $carouselItems.each(function(i) {
        $arr.push(i + 1);    
    });
    $arr.reverse();
    $arr.forEach(function(i) {
        $paginationArea.after('<li class="pagination-item"><a href="#">' + i + '</a></li>'); 
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
    
    var $carouselExp = $('#carousel').waterwheelCarousel(), $sliderExp =  $('.experience__content .slide-content'); 
    
    $sliderExp.slick({
        slidesToShow: 1,
        swipe: false,
        prevArrow: $('.experience__content .slider-pagination ul li.prev'),
        nextArrow: $('.experience__content .slider-pagination ul li.next')
    });
    
    $('.experience__content .slider-pagination ul li.next a').click(function() {
        $carouselExp.next();
        $sliderExp.slick('slickNext');
        return false;
    });
    
    $('.experience__content .slider-pagination ul li.prev a').click(function() {
        $carouselExp.prev();
        $sliderExp.slick('slickPrev');
        return false;
    });
    
    var $stepSlides = $('.steps__tabs-slider .slick-slide:not(.slick-cloned)'), $wrapperContent = $('.steps .wrapper');
    $stepSlides.click(function() {
        $(this).addClass('slick-current').siblings('.slick-active').removeClass('slick-current'); 
        $wrapperContent.removeClass('active').eq($(this).index() - checkIndex()).addClass('active');
    });
    
    $('.steps__tabs-slider-arrows li.next').click(function() {
        var $currentIndex = $('.steps__tabs-slider .slick-slide.slick-current').index() - checkIndex();
        $wrapperContent.removeClass('active').eq($currentIndex).addClass('active');
        console.log($currentIndex);
    });
    
    $('.steps__tabs-slider-arrows li.prev').click(function() {
        var $currentIndex = $('.steps__tabs-slider .slick-slide.slick-current').index() - checkIndex();
        $wrapperContent.removeClass('active').eq($currentIndex).addClass('active');
        console.log($currentIndex);
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
    
    if($(window).width() > 768) {
        $('.gallery .gallery-slider.desktop').slick({
            slidesToShow: 1,
            dots: true,
    //        autoplay: true
        });  
    }
    
    if($(window).width() < 768) {
        $('.gallery .gallery-slider.mobile').slick({
            slidesToShow: 1,
            dots: true,
            arrow: true,
            prevArrow: $('.gallery__arrows ul li:first-child'),
            nextArrow: $('.gallery__arrows ul li:last-child')
        });
    }
    
    var $dotsClone = $('.gallery .gallery-slider .slick-dots').clone(true),
        $customDots = $('.gallery .gallery__dots');
    $('.gallery .gallery-slider .slick-dots').remove();
    $customDots.html($dotsClone);
    
    var $dotsLi = $customDots.find('.slick-dots').find('li');
    $dotsLi.click(function() {
        $(this).addClass('slick-active').siblings().removeClass('slick-active'); 
    });
    $('.gallery .gallery-slider').on('beforeChange', function(event, slick, currentSlide) {
        $dotsLi.removeClass('slick-active').eq(currentSlide).addClass('slick-active');
        console.log(currentSlide + 1);
    });
    
    var $hdr = $('.header');
    var $sections = $('section');
    
    $(window).scroll(function() {
        if($(this).scrollTop() >= 100) $hdr.addClass('sticky')
        else $hdr.removeClass('sticky'); 
        
        $sections.each(function(i, el) {
            var top = $(el).offset().top - $hdr.height() - 330, 
                bottom = top + $(el).height(),
                scroll = $(window).scrollTop(),
                id = $(el).attr('id');
//            console.log("top  " + top + "bottom  " + bottom + "scroll  " + scroll);
            if(scroll > top && scroll < bottom) {
                $('.header__menu ul li.active').removeClass('active');
                $('.header__menu ul li a[href="#' + id + '"]').parent().addClass('active');
            }
        });
    });  
    
    if($(window).width() > 575) {
        $('.consultation__content > a').hover(function() {
            $(this).find('span.arrow').animate({
                width: "100%"
            }, 150); 
        }, function() {
            $(this).find('span.arrow').animate({
                width: '14%'
            }, 150);
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
                }, 600, function() {
                    if($(window).width() < 576) {
                        $('html, body').css('overflow', 'hidden');
                        $('#carousel .carousel-image').css('z-index', '-1');
                    }
                });
           $(this).addClass('open');
       } else {
           $popupMenu
                .animate({
                    right: '-45%'
                }, 350, function() {
                    $(this).removeClass('open-popup');
                    $('html, body').css('overflow', 'unset');
                    $('#carousel .carousel-image').css('z-index', '1');
                });
           $(this).removeClass('open');
           $('html, body').css('overflow', 'unset');
       }
    });
    
    
    var $hExp = $('.experience').outerHeight(true);
    
//    $('.header__menu ul li a').click(function(e) {
//        e.preventDefault();
//        var $href = $(this).attr('href'), $top = $($href).offset().top;
//        
//        $('body, html').animate({
//            scrollTop: $top - $heightHeader
//        }, 800);
//    });
    
    $('.header__menu ul li a').click(function() {
        if($(window).width() < 576) {
            $(this).closest('.header__popup-menu')
               .animate({
                    right: '-45%'
                }, 350, function() {
                    $(this).removeClass('open-popup');
                    $('html, body').css('overflow', 'unset');
                    //$('#carousel .carousel-image').css('z-index', '5'); 
                    $('.header__hamburger-menu').removeClass('open');
                });   
        }
    });
    
    
    $('.header__menu ul li a[href="#experience"]').click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href'), $top = $($href).offset().top;
        $('body, html').animate({
            scrollTop: $top - 330 - $heightHeader
        }, 800);
    });
    
    $('.header__menu ul li a[href="#steps"]').click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href'), $top = $($href).offset().top;
        $('body, html').animate({
            scrollTop: $top - 250
        }, 800);
    });    
    
    $('.header__menu ul li a[href="#service"]').click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href'), $top = $($href).offset().top;
        $('body, html').animate({
            scrollTop: $top - 80 - $heightHeader
        }, 800);
    });    
    
    $('.header__menu ul li a[href="#gallery"]').click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href'), $top = $($href).offset().top;
        $('body, html').animate({
            scrollTop: $top - 200 - $heightHeader
        }, 800);
    });
    
    $('.header .call, .consultation__content > a').caminModal({
        'overlay': '.modal-overlay',
        'modal': '.modal-form.contacts'
    });
    
    $('.service__desc a, .service__item.bigger+a').caminModal({
        'overlay': '.modal-overlay',
        'modal': '.modal-form.services'
    });
    
    $('.modal-form .modal-bottom .list-service').click(function() {
        $('.modal-form .modal-bottom .service-select').slideToggle(); 
    }); 
    
//    var $paginationItem = $('.experience__content .slider-pagination ul li.pagination-item');
//    console.log($paginationItem);
//    
//    $globalIndex = $('.experience__carousel > .carousel-center');
//    console.log("Test: " + $globalIndex.index()); 
    
    
    /* Test */
    
    $('.experience__content .slider-pagination ul li.pagination-item').eq(0).addClass('active');
    $('.experience__content .slider-pagination ul li.pagination-item a').click(function(e) {
        e.preventDefault();
//        $(this)
//            .closest('li')
//            .addClass('active')
//            .siblings()
//            .removeClass('active');
    });
    
    var $pagItems = $('.experience__content .slider-pagination ul li.pagination-item');
//    $pagItems.click(function() {
//        $carouselExp.next();
//    });
//    
        
    $sliderExp.on('afterChange', function(event, slick, currentSlide) {
        $pagItems.removeClass('active').eq(currentSlide).addClass('active');
    });
    
    
    
});

Array.prototype.last = function() {
    return this[this.length - 1];
}

$.fn.caminModal = function(params) {
    var defaults = {};
    
    if(!defaults.hasOwnProperty('overlay')) {
        defaults.overlay = defaults.overlay;   
    }
    
    if(!defaults.hasOwnProperty('modal')) {
        defaults.modal = defaults.modal;   
    }
    
    $.extend(params, defaults); 
    
    $(this).click(function(e) {
        e.preventDefault();
        $(params['overlay'])
            .css('display', 'block')
            .animate({opacity: .35}, 400, function() {
                $(params['modal'])
                    .css('display', 'block')
                    .animate({
                        top: 50 + '%',
                        opacity: 1
                    });
            }); 
        
        $('html, body').css('overflow', 'hidden');
    });
    
    $(params['modal']).find('.modal-close').click(function(e) {
         $(params['modal'])
            .animate({
                 top: 0,
                opacity: 0
            }, 400, function() {
                $(this).css('display', 'none');
                $(params['overlay']).fadeOut(400)
            });
        
        $('html, body').css('overflow', 'unset');
    });
    
    $(params['overlay']).click(function(e) {
         $(params['modal'])
            .animate({
                 top: 0,
                opacity: 0
            }, 400, function() {
                $(this).css('display', 'none');
                $(params['overlay']).fadeOut(400)
            });
        
        $('html, body').css('overflow', 'unset');
    });
    
//    $(document).keypress(function(e) {
//       if(e.keyCode == 27) {
//           $(params['overlay'])
//            .css('display', 'block')
//            .animate({opacity: .35}, 400, function() {
//                $(params['modal'])
//                    .css('display', 'block')
//                    .animate({
//                        top: 50 + '%',
//                        opacity: 1
//                    });
//            }); 
//       } 
//        console.log(e.keyCode)
//    });
        
    return this;
}

var checkIndex = function() {
    if(window.innerWidth > 1600) {
        return 5;
    }
    
    if(window.innerWidth > 1200 && window.innerWidth < 1600) {
        return 4;
    }
    
    if(window.innerWidth > 992 && window.innerWidth < 1200) { 
        return 3;
    }
    
    if(window.innerWidth > 576 && window.innerWidth < 992) { 
        return 2;
    }
    
    if(window.innerWidth < 576) { 
        return 1;
    }
}
