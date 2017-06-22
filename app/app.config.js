function bcSiteConfig($locationProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}

angular.module('bc-site')
	.config(bcSiteConfig);

bcSiteConfig.$inject = ['$locationProvider', '$urlRouterProvider'];