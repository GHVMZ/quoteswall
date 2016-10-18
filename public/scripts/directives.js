'use strict';

// Header
angular.module('quotesWall').directive('qwHeader', function qwHeader () {
	return {
		templateUrl: 'templates/header.html',
		replace: true,
		controller: 'quoteCtrl'
	}
});

// Content
angular.module('quotesWall').directive('qwContent', function qwContent () {
	return {
		templateUrl: 'templates/content.html',
		replace: true,
		controller: 'quoteCtrl'
	}
});

// Footer
angular.module('quotesWall').directive('qwFooter', function qwFooter () {
	return {
		templateUrl: 'templates/footer.html',
		replace: true,
		controller: 'quoteCtrl'
	}
});
