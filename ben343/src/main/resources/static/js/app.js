'use strict';

/* App Module */

var benApp = angular.module('benApp', [
  'angular-carousel',
  'ui.router',
  'ui.select',
  'angular-inview',
  'ngSanitize',
  'ngMap',
  'benJControllers',
  'benJResources',
  'GlobalControllers',
  'ProjectControllers',
  'FifaControllers',
  'SkillControllers',
  'benJDirectives',
  'benJServices',
  'hmTouchEvents',
  'chart.js'
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
		templateUrl: 'views/resume/cv.html',
		controller: 'CvCtrl'
	})
	.state('resume', {
		url: '/resume',
		templateUrl: 'views/resume/resume.html',
		controller: 'ResumeCtrl'
	})
	.state('loisirs', {
		url: '/loisirs',
		templateUrl: 'views/resume/carousel.html',
		controller: 'CarouselCtrl'
	})
	.state('experience_pro', {
		url: '/experience_pro',
		templateUrl: 'views/cv/expPro.html',
		controller: 'ExperienceCtrl'
	})
	.state('privacy', {
		url: '/privacy',
		templateUrl: 'views/privacy/privacy.html',
		controller: 'PrivacyCtrl'
	})
	.state('skills', {
		url: '/skills',
		templateUrl: 'views/home/parts/skills/skills.html',
		controller: 'SkillCtrl'
	})
	.state('projects', {
		url: '/projects',
		templateUrl: 'views/home/parts/projects/ups-projects.html',
		controller: 'ProjectCtrl'
	})
	.state('fifaCup', {
		url: '/fifaCup',
		templateUrl: 'views/fifa/fifaCup.html',
		controller: 'FifaCtrl'
	})
	.state('error', {
		url: '/error',
		templateUrl: 'views/error.html',
		controller: 'GlobalCtrl'
	});
	 // For any unmatched url, redirect to /benJ
	$urlRouterProvider.otherwise("/benJ");
}]);
