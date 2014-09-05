// DISABLE HOVER WHILE SCROLL
var disableHoverOnScroll = function() {
	var body = document.body,
		timer,
		addEvent = window.attachEvent || window.addEventListener;
	addEvent('scroll', function() {
		clearTimeout(timer);
		if (!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover');
		}
		timer = setTimeout(function() {
			body.classList.remove('disable-hover');
		}, 500);
	}, false);
};

// FILTERS
var filterSelection = function() {
	if (jQuery('#container').length) {
		jQuery('#container').mixItUp();
	}
};

// COLORBOX
var launchJuryColorbox = function() {
	jQuery('.about').find('a').colorbox({
		iframe: true,
		width: '900px',
		height: '680px',
		innerWidth: '100%',
		innerHeight: '100%',
		initialWidth: '100%',
		initialHeight: '100%',
		maxWidth: '100%',
		scrolling: true,
		maxHeight: '100%'
	});
};

// DOCUMENT READY
jQuery(document).ready(function() {
	disableHoverOnScroll();
	filterSelection();
	launchJuryColorbox();
});