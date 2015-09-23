var main = function() {

    //configuration
    var width = 800;
    var animationSpeed = 1000;
    var slideNum = 1;

    //cache Dom
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');


    //Next Arrow
    $('.arrow-next').click(function() {
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        $slideContainer.animate({'margin-left': "-="+width}, animationSpeed, function() {
            slideNum++;
            if(slideNum === $slides.length - 1){
                slideNum = 1;
                $slideContainer.css('margin-left', -800);
            }
        });

        if(nextDot.length === 0){
            nextDot = $('.dot').first();
        }
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });

    //Prev Arrow
    $('.arrow-prev').click(function() {
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        $slideContainer.animate({'margin-left': "+="+width}, animationSpeed, function() {
            slideNum--;
            if(slideNum === 0){
                slideNum =  $slides.length - 2;
                $slideContainer.css('margin-left', -3200);
            }
        });
        if(prevDot.length === 0) {
            prevDot = $('.dot').last();
        }
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
};

$(document).ready(main);