/**
 * Utility function for triggering animate.css animations
 */
$.fn.animateOnce = function( className ) {
	var animEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		animClass    = 'animated ' + className;

	this
		.addClass( animClass )
		.off( animEndEvent )
		.one( animEndEvent, function() {
			$( this ).removeClass( animClass );
		});

	return this;
};