function authService ($http, $q, $localStorage, $state) {
	let user = null;

	const service = {
		register: register,
		getUser: getUser
	};
	return service;

	function register (regObj) {
		let defer = $q.defer();
		$http({
			method: 'POST',
			url: '/api/v1/register',
			data: regObj
		})
			.then(httpSuccess)
			.catch(error);

		function httpSuccess (res) {
			defer.resolve(res);
			return defer.promise;
		}

		function error (err) {
			defer.reject(err);
			return defer.promise;
		}
	}

	function getUser() {
		if(user){
			return user;
		}
		else if ($localStorage) {
			$http({
				method: 'GET',
				url: 'api/v1/user',
				data: $localStorage
			});
		}
		else {
			$state.go('login');
		}
	}
}

angular.module('bc-site.common')
	.factory('authService', authService);

authService.$inject = ['$http', '$q', '$localStorage', '$state'];
