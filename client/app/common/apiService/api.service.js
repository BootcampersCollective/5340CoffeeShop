function apiService($q, $http) {
	// This variable is for service level storage, it will not survive a browser reload
	// let variable = {};
	const service = {
		getMenu: getMenu,
		setSomething: setSomething
	};
	return service;

	function getMenu() {
		return $http({
			method: 'GET',
			url: '/api/menu'
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
