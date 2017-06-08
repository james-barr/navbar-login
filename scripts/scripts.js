$( document ).ready(function() {

$('[data-toggle="tooltip"]').tooltip();

(function($) {
    "use strict"; // Start of use strict

  $(document).scroll(function () {
	  var $nav = $("#mainNav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


  // Collapse the navbar when page is scrolled
$(window).scroll(function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
});


})(jQuery); // End of use strict

});
