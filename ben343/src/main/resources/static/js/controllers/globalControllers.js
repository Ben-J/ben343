'use strict';

var benJControllers = angular.module('GlobalControllers', []);

benJControllers.controller('GlobalCtrl', ['$scope', '$log',
	function($scope, $log) {
		$scope.showFooter = true;
		$scope.error = {
				msg: 'Hey mec !!! Tu demandes une page inaccessible là !!!'
		}
	}
]);