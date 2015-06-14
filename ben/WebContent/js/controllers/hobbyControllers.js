'use strict';

var benJControllers = angular.module('hobbyControllers', []);

benJControllers.controller('HobbyCtrl', ['$scope', '$log',
	function($scope, $log) {

		$scope.video = {title: 'Ma dernière video'};
		
		$scope.playVideo = function() {
			
		};
	}
]);