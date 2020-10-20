/*global $, jQuery, alert*/

$(document).ready(function () {
    
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 6000
        
    });

// Caching The Scroll Top Element
    var  scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    // Click On Button To Scroll Top
    scrollButton.click(function () {
       
        $("html,body").animate({ scrollTop : 0 }, 600);
    });
});
// Loading Screen

//$(window).load(function () {
//    
//    "use strict";
//    
//    // Loading Elements
//    
//    $(".loading-overlay .spinner").fadeOut(2000, function () {
//        
//        // Show The Scroll
//
//        $("body").css("overflow", "auto");
//        
//        $(this).parent().fadeOut(2000, function () {
//            
//            $(this).remove();
//        });
//    });
//});