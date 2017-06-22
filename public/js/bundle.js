angular.module('bc-site.about', []);
angular.module('bc-site', [
    'ui.router',
	'bc-site.layout',
	'bc-site.common',
    'bc-site.home',
    'bc-site.about'
]);
// angular.module('bootApp', ['ngRoute'])
//     .config(angularRouter)
//
// angularRouter.$inject = ['$routeProvider']
// function angularRouter ($routeProvider) {
//     $routeProvider
//         .when('/',
//             {
//                 templateUrl: '/partials/placeholder.html',
//                 controller: 'bootcamperController',
//                 controllerAs: 'bCtl',
//             })
//
//         .when('/about',
//             {
//                 templateUrl: '/partials/about.html',
//             })
//
//         .when('/auth', {
//                 templateUrl : '/partials/auth.html',
//                 controller : 'authController',
//                 controllerAs : 'auth'
//                 })
//
//         .when('/events', {
//                 templateUrl : '/partials/event.html',
//                 });
//
// }

angular.module('bc-site.common', []);
angular.module('bc-site.home', []);
angular.module('bc-site.layout', []);
const about = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<div>About</div>`
};

angular.module('bc-site.about')
	.component('about', about);

about.$inject = [];
function aboutRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.about',
			url: 'about',
			component: 'about'
		});
}

angular.module('bc-site.about')
	.config(aboutRoute);

aboutRoute.$inject = ['$stateProvider'];
function bcSiteConfig($locationProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}

angular.module('bc-site')
	.config(bcSiteConfig);

bcSiteConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
function bcSiteRun () {
	console.log('bcSiteRun');
}

angular.module('bc-site')
	.run(bcSiteRun);
// angular.module('bootApp')
//   .controller('authController', authCtrl);
//
// authCtrl.$inject = ['$http', 'authFactory'];
//
// function authCtrl ($http, authFactory){
//   var auth = this;
//
//   auth.greeting = "hello world";
//
//   auth.register = function (){
//       if(auth.registerPassword != auth.confirmPassword){
//           console.log('nope')
//       } else {
//           authFactory
//             .register(auth.firstName, auth.registerEmail, auth.registerPassword)
//             .then()
//       };
//
//   };
// };
// angular.module('bootApp')
//   .factory('authFactory', authFactory)
//
//   authFactory.$inject = ['$http'];
//
//
//   function authFactory($http){
//
//       function register(name,email,password){
//         return $http({
//             method: 'POST',
//             url: '/register',
//             data: {
//             name:name,
//             email:email,
//             password:password
//             }
//         })
//         }
//
//
//       return{
//           register:register
//       };
//
//   };
// angular.module('bootApp')
//       .controller('bootcamperController', bootcampersFunction)
//
// // bootcamperController.$inject = ['bootcamperFact'];
//
// bootcampersFunction.$inject = ['$http'];
//
// function bootcampersFunction($http) {
//     var bCtl = this;
//
//     bCtl.title = "test!";
//
//     bCtl.data = '';
//
//     bCtl.signUp = function () {
//
//           $http.post('/signUp', bCtl.data)
//                .then(function success(response) {
//                       console.log("Sent Email!");
//                       bCtl.message = response.data;
//                 }
//               )
//               .catch(function(err){console.log("Update via put failed, caught error: ",err)})
//     }
//
// }

// angular.module('bootApp')
//     .factory('bootcamperFact', bootFactory);
//
// hacktory.$inject = ['$http'];
//
// function hacktory($http) {
//
//     function getThings() {
//         return $http.get('/api/things');
//     }
//
//     function postThings(thingData) {
//         return $http.post('/api/things', thingData);
//     }
//
//
//
//     return {
//         getThings:    getThings,
//         postThings:   postThings,
//
//     }
// };

const home = {
	bindings: {
		
	},
	controller: function () {
		let ctrl = this;
		ctrl.title = 'Bootcampers Collective';
		
		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: ` <h1>{{$ctrl.title}}</h1>
<layout-component></layout-component>`
};

angular.module('bc-site.home')
	.component('home', home);

home.$inject = [];

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
const bodyComponent = {
	bindings: {

	},
	controller: function () {

	},
	template: `<div>Body</div><ui-view></ui-view>`
};

angular.module('bc-site.layout')
.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
const footerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>footer</div>`
};

angular.module('bc-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>Header</div>`
};

angular.module('bc-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
const layoutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init layout');
		};
	},
	template: `<header-component></header-component>
<body-component></body-component>
<footer-component></footer-component>`
};

angular.module('bc-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];
var images = ['./images/placeholderLogo.png','./images/eventImage1.jpg', './images/eventImage2.jpg', './images/placeholderLogo.png'];
var counter = 0;
function switchImages () {
	if(counter < images.length-1) {

		counter++

		for ( image in images ) {
			$('#logo').attr("src",images[counter]);
		}
	}
}
//On HOVER the carousel will start
function placeholder () {
		$('#logo').hover(setInterval(switchImages,3000));
	};

placeholder();

//# sourceMappingURL=bundle.js.map