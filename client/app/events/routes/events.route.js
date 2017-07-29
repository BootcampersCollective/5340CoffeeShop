function eventsRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.events',
			url: 'events',
			component: 'events'
		});
}

angular.module('5340-site.events')
	.config(eventsRoute);

aboutRoute.$inject = ['$stateProvider'];
