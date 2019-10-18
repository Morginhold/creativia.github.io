$(document).ready(function(){
    $(".menu-button-mobile").click(function(){
        $(".menu-list-mobile").slideToggle(400);
        $(this).toggleClass("active");
        return false;
    });
    $('.slider-header').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        navText: [],
        items: 1,
        nav:true,
        responsive:{
            980:{
                items:1
            } 
        }
    });
    $( function() {
        $( "#accordion-about" ).accordion({
            heightStyle: "content"
        });
    });
    $('.clints-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            80:{
                items:1
            }
        }
    })
});