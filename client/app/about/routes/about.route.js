function aboutRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.about',
			url: 'about',
			component: 'about'
		});
}

angular.module('5340-site.about')
	.config(aboutRoute);

aboutRoute.$inject = ['$stateProvider'];
