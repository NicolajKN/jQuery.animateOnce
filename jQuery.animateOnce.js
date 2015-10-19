/* global jQuery */

/**
 * Utility function for triggering animate.css animations
 */

(function ( $ ) {
	'use strict';

	$.fn.animateOnce = function( className, cb ) {
		var animEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			animClass    = 'animated ' + className,
			callback     = cb || function(){};

		this
			.addClass( animClass )
			.off( animEndEvent )
			.one( animEndEvent, function() {
				$( this ).removeClass( animClass );
				callback.call( this );
			});

		return this;
	};
})( jQuery );
