function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app',
			url: '/',
			component: 'home'
		});
}

angular.module('bc-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];