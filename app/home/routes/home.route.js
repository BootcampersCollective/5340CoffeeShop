function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app',
			url: '/',
			component: 'home'
		});
}

angular.module('5340-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];
