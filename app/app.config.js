function bcSiteConfig($locationProvider, $urlRouterProvider){
	$locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise('/');
}

angular.module('5340-site')
	.config(bcSiteConfig);

bcSiteConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
