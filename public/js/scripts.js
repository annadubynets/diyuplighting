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
});

$('.product .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    center: true,
    dotsData: true,
    dotsContainer:'.product-dot',
});

$( '.product .owl-dot' ).on( 'click', function() {
    $('.product .owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    $( '.product .owl-dot' ).removeClass( 'active' );
    $(this).addClass( 'active' );
})

$('.gallery').each(function() {
    var galleryId = $(this).attr('id');

    console.log(galleryId);

    $('#' + galleryId + ' .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        center: true,
        navContainer : '#' + galleryId + ' .gallery-nav',
        dotsContainer: '#' + galleryId + ' .gallery-dot',
        responsive:{
            0:{
                items:1,
                stagePadding:40,
            },
            600:{
                items:2,
                stagePadding:100,
            },
            1000:{
                items:3,
                stagePadding:100,
            }
        }
    })

    $('#' + galleryId + ' .owl-carousel').on('changed.owl.carousel', function(event) {
        showPageDescription(galleryId);
        console.log("current: ", $(event.relatedTarget).attr('data-description-id'))
    });

    $('#' + galleryId + ' .owl-carousel').on('refreshed.owl.carousel', function(event) {
        showPageDescription(galleryId);
    });


    showPageDescription(galleryId);
});

function showPageDescription(galleryId) {
    $("#" + galleryId + ' .owl-carousel .owl-item.active.center .item').each(function(){
        $("#" + galleryId + ' .gallery-description').hide();
        var center = $(this);
        console.log(center.attr('data-description-id'));
        $('#'+center.attr('data-description-id')).show();
    });
}

$('.select-nav').on('change', function (e) {
    $('.gallery-section .nav-tabs li a').eq($(this).val()).tab('show');
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})





