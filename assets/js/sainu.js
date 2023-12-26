// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$(document).ready(function(){
    $("#owl-carousel").owlCarousel({
        items: 10, // Number of items to display
        loop: true, // Infinite loop
        margin: 10, // Space between items
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
            1300:{
                items:7
            },
            1600:{
                items:9
            },
            1900:{
                items:11
            }
        }
    });
});


