// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
    // $('#js-body').toggleClass('no-scroll');
    $('#js-menu, #js-menu-screen').toggleClass('is-visible');
    $('#js-menu-trigger').toggleClass('slide close');
    // $('#masthead, #page-wrapper').toggleClass('slide');
    e.preventDefault();
  });
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

// Table of Contents title. Change text to localize
$("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>");

$(document).ready(function() {
  /**
   *
   * Lazy loading via layzr.js
   *
  **/

  import Layzr from 'layzr.js'

  const instance = Layzr({
    threshold: 100         // Load images that are 100% of the screen height away from the bottom of the viewport
  })

  document.addEventListener('DOMContentLoaded', function(event) {
    instance
      .update()           // track initial elements
      .check()            // check initial elements
      .handlers(true)     // bind scroll and resize handlers
  });

})
