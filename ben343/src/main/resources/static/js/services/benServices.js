'use strict';

angular.module('benJResources', ['ngResource']).
	factory('UserService', function ($resource) {
		return $resource('/', {}, {
        	'get': { method: 'GET', isArray: true, url: '/users' }
		});
	});