'use strict';

var benJControllers = angular.module('MessageControllers', []);

benJControllers.controller('MessageCtrl', ['$scope', '$log', 'MessageService',
	function($scope, $log, MessageService) {
		$scope.messages = [];
		MessageService.get({}, function(success) {
			$scope.messages = success;
		});
		
		$scope.getDate = function(date) {
			var d = new Date();
			d.setTime(date);
			var day = d.getDate();
			var monthIndex = d.getMonth() + 1;
			var year = d.getFullYear();
			return day + "/" + monthIndex + "/" + year;
		};
		
		$scope.deleteMsg = function(msgId) {
//			MessageService.deleteMsg({}, msgId, function(success) {
//				angular.forEach(messages, function(msg, index){
//					if(angular.equals(msg.id, msgId)) {
//						$scope.messages.array.splice(index, 1);
//					}
//				});
//			});
		};
	}
]);
