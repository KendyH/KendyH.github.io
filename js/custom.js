
/*
$(document).ready(function() {


});

jQuery document.ready method.It's used to make a function available after the page is ready
It is good place to have all the jQuery events & functions inside this document.ready method.


/*========================================================================
                                AOS
========================================================================== */
/* Equivalent to recommended way of calling document.ready() method */
$(function() {
  // animate on scroll
  AOS.init({
     offset: 200,
     duration: 600,
     easing: 'ease-in-sine',
     delay: 100,
   });

});


/*========================================================================
                            ABOUT ME
========================================================================== */
$(function() {

  $("#about").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // adding comma after image & with the code below we set gallery to true for work section
    gallery: {
      enabled: true
    }

  });

});

/*========================================================================
                              ABOUT
========================================================================== */
/* Documentation for owl-carousel-2
 https://owlcarousel2.github.io/OwlCarousel2/docs/started-installation.html */
$(function() {

  $("#about-slider").owlCarousel({
    /* Options Syntax: https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html */
    items: 1

  });

});

/*========================================================================
                          SMOOTH SCROLL
========================================================================== */
var scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {

		// Function. Custom easing pattern
		// If this is set to anything other than null, will override the easing option above

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	},

	// Callback API
	before: function (anchor, toggle) {}, // Callback to run before scroll
	after: function (anchor, toggle) {} // Callback to run after scroll
});
