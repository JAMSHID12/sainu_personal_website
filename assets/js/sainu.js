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
      items: 9, // Set the default number of items to show
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 5 
        },
        1000: {
          items: 7
        }
      }
    });
});




// Check URL parameters
const urlParams = new URLSearchParams(window.location.search);
const passwordParam = urlParams.get('password');
const section1 = document.getElementById('visible-section');
const section2 = document.getElementById('hide-section');

// If the 'password' parameter is present, hide the first section and show the second section
if (passwordParam && passwordParam.toLowerCase() === 'sainu') {
    section2.classList.remove('grid-item');
    section1.style.display = 'none';
    section2.style.display = 'inline'; // Display the second section
} else {
    section2.style.display = 'none';
    
}




