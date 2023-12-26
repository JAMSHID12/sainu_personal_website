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
    $('.owl-carousel').owlCarousel({
      items: 8, // Set the number of items to show
      loop: true, // Enable loop
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Set autoplay timeout in milliseconds (e.g., 3000 = 3 seconds)
      autoplayHoverPause: false // Disable autoplay pause on hover
    });
});


