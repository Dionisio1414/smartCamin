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
    
    
});

Array.prototype.last = function() {
    return this[this.length - 1];
}