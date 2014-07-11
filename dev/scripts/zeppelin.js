;(function(window, document) {
	'use strict';
	window.onload = function() {
		var zeppelin = new Headroom(document.querySelector('header'), {
			'tolerance': 5,
			'offset': 80,
			'classes': {
				'initial': 'z_animated',
				'pinned': 'z_slide-down',
				'unpinned': 'z_slide-up',
				'top': 'z_top',
				'notTop': 'z_top'
			}
		});
		zeppelin.init();
	};
}(window, document));
