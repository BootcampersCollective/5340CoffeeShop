function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'home'
		});
}

angular.module('5340-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];
