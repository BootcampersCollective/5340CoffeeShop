function menuRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.menu',
			url: 'menu',
			component: 'menu'
		});
}

angular.module('5340-site.menu')
	.config(menuRoute);

menuRoute.$inject = ['$stateProvider'];
