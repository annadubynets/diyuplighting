$( "#datepicker" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    navigationAsDateFormat: true,
    nextText: 'M >',
    prevText: '< M',
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
});

$('.owl-carousel').owlCarousel({
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

