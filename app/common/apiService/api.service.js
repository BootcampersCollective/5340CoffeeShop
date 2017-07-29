function apiService($q, $http) {
	// This variable is for service level storage, it will not survive a browser reload
	// let variable = {};
	const service = {
		getSomething: getSomething,
		setSomething: setSomething
	};
	return service;

	function getSomething() {
		return $http({
			method: 'GET',
			url: '/api/something'
		});
	}

	function setSomething() {

	}

	function internalFunction() {

	}
}

angular.module('5340-site.common')
	.factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
