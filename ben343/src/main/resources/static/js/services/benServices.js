'use strict';

angular.module('benJResources', ['ngResource']).
	factory('UserService', function ($resource) {
		return $resource('/', {}, {
        	'get': { method: 'GET', isArray: true, url: '/users' }
		});
	}).
	factory('MessageService', function ($resource) {
		return $resource('/addMessage', {}, {
			'create': {method:'PUT'}
		});
	});