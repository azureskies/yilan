// Site navigation, scroll effects, and animations
$(document).ready(function () {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var fixedTop = $('.navbar');
            var offset = fixedTop.outerHeight();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;

            });
        } // End if
    });

    // Go-to-top button
    $("#gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

    // AOS Animate On Scroll
    AOS.init({
        duration: 800,
        once: true
    });
});
