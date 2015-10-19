'use strict';

angular.module('benJResources', ['ngResource']).
factory('UserService', function ($resource) {
	return $resource('/', {}, {
    	'get': { method: 'GET', isArray: true, url: '/users' }
	});
}).
factory('MessageService', function ($resource) {
	return $resource('/message', {}, {
		'create': {method:'PUT', url: '/message/addMessage'},
    	'get': { method: 'GET', isArray: true, url: '/message/messages' },
    	'deleteMsg': {url: '/message/delete' }
	});
});