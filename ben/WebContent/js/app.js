'use strict';

/* App Module */

var benApp = angular.module('benApp', [
  'angular-carousel',
  'ui.router',
  'angular-inview',
  'ngSanitize',
  'ngMap',
  'benJControllers',
  'hobbyControllers',
  'benJDirectives',
  'benJServices',
  'hmTouchEvents'
]);

benApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
	// Now set up the states
	$stateProvider
	.state('benJ', {
		url: '/benJ',
		templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
	})
	.state('cv', {
		url: '/cv',
		templateUrl: 'views/cv/cv.html',
		controller: 'CvCtrl'
	})
	.state('resume', {
		url: '/resume',
		templateUrl: 'views/resume/resume.html',
		controller: 'ResumeCtrl'
	})
	.state('experience_pro', {
		url: '/experience_pro',
		templateUrl: 'views/cv/expPro.html',
		controller: 'ExperienceCtrl'
	})
	.state('privacy', {
		url: '/privacy',
		templateUrl: 'views/privacy/privacy.html',
		controller: 'GlobalCtrl'
	})
	.state('todo', {
		url: '/todo',
		templateUrl: 'views/todo.html',
		controller: 'GlobalCtrl'
	});
	 // For any unmatched url, redirect to /benJ
	$urlRouterProvider.otherwise("/benJ");
}]);
