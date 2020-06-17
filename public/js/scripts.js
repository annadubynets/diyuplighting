$( ".date-picker" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    navigationAsDateFormat: true,
    nextText: 'M >',
    prevText: '< M',
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
});

$('.testimonials-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 50,
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('.gallery-section .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


