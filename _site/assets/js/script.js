	(function ($) {
    'use strict';

    jQuery(document).ready(function () {

	    $( "#menu-btn" ).click(function() {
        $( ".mobile_menu_holder" ).slideToggle();
            });

	            $('a.smooth-scrolling').on("click", function (e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 50
                }, 1000);
                e.preventDefault();
            });

	        var btn = $('.back_to_top');

        	$(window).scroll(function() {
        	  if ($(window).scrollTop() > 300) {
        	    btn.addClass('show');
        	  } else {
        	    btn.removeClass('show');
        	  }
        	});

        	btn.on('click', function(e) {
        	  e.preventDefault();
        	  $('html, body').animate({scrollTop:0}, '300');
        	});
});

    $(window).resize(function() {
	    if ($(window).width() > 950) {
		   	$('.mobile_menu_holder').hide();
		}
	});

})(jQuery);

