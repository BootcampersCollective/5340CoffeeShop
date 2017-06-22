angular.module('5340-site.about', []);

angular.module('5340-site', [
    'ui.router',
	  '5340-site.login',
	  '5340-site.layout',
	  '5340-site.common',
      '5340-site.widgets',
      '5340-site.home',
      '5340-site.about',
      '5340-site.events'
]);

angular.module('5340-site.common', []);

angular.module('5340-site.events', []);

angular.module('5340-site.home', []);

angular.module('5340-site.layout', []);

angular.module('5340-site.login', []);

angular.module('5340-site.widgets', []);

const about = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<h1> About </h1>
<h3> We are super duper cool </h3>`
};

angular.module('5340-site.about')
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

angular.module('5340-site.about')
	.config(aboutRoute);

aboutRoute.$inject = ['$stateProvider'];

function bcSiteConfig($locationProvider, $urlRouterProvider){
	$locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise('/');
}

angular.module('5340-site')
	.config(bcSiteConfig);

bcSiteConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

function SiteRun () {
	console.log('5340 Coffee Shop Site Up and Running');
}

angular.module('5340-site')
	.run(SiteRun);


const events = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<h1> Events </h1>
<h3> We have super duper cool events </h3>`
};

angular.module('5340-site.events')
	.component('events', events);

about.$inject = [];

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

const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;
		ctrl.title = '5340 Coffee and Events';

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `<h1 class="home-title">{{$ctrl.title}}</h1>
<layout-component></layout-component>`
};

angular.module('5340-site.home')
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

angular.module('5340-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];

const bodyComponent = {
	bindings: {

	},
	controller: function () {

	},
	template: `<div>Body</div><ui-view></ui-view>`
};

angular.module('5340-site.layout')
.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];

const footerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>footer</div>`
};

angular.module('5340-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];

const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>Header</div>`
};

angular.module('5340-site.layout')
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

angular.module('5340-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];

const loginComponent = {
	bindings: {},
	controller: function ($state, authService, errorService) {
		let ctrl = this;

		//DECLARE CONTROLLER VARIABLES
		ctrl.greeting = "hello world";
		ctrl.registerObj = null;

		//DECLARE PUBLIC FUNCTIONS
		ctrl.register = register;

		//LIFECYCLE FUNCTIONS
		ctrl.$onInit = function () {
		};
		ctrl.$postLink = function () {
		};
		ctrl.$onChange = function () {
		};
		ctrl.$onDestroy = function () {
		};

		//FUNCTIONS
		function register () {
			if (ctrl.registerPassword !== ctrl.confirmPassword) {
				console.log('nope');
			} else {
				authService
					.register(ctrl.registerObj)
					.then(navHome)
					.catch(showError);
			}
		}

		function navHome (res) {
			if(res){
				$state.go('home');
			}
		}

		function showError (err) {
			console.log('login Error', err);
			errorService.loginError(err);
		}
 	},
	template: `<div class='login-background'>

    <form class="login-modal" ng-hide='auth.create'>
        <a href="#!/"><h1 class='cursor pull-right'>X</h1></a>
        <h1 class='form-title'>Login</h1>
        <div class="form-group">

            <div class="form-group">
                <label for="Email">Email address</label>
                <input type="email" class="form-control" id="Email" placeholder="Email" ng-model='auth.email'>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type='password' class="form-control" id="password" placeholder="Password"
                       ng-model='auth.password'>
            </div>

            <!-- <div class="form-group"> -->
            <button type="submit" class="btn btn-default" ng-click='auth.login()'>Submit</button>
            <h3>{{auth.loginError}}</h3>
        </div>
        <h4 ng-click='auth.create =! auth.create' class='exitCursor signup'>Create Account</h4>
    </form>


    <!-- User Sign Up -->

    <form class="login-modal" ng-show='auth.create'>
        <a href="#!/"><h1 class='cursor pull-right'>X</h1></a>
        <h1 class='form-title'>Register</h1>
        <div class="form-group">

            <div class="form-group">
                <label for="Name">First Name?</label>
                <input type="text" placeholder="First Name" ng-model='auth.firstName' class="form-control" required>
            </div>

            <div class="form-group">
                <label for="Email">Email address</label>
                <input ng-class='{red: auth.emailField === true}' type="email" class="form-control" placeholder="Email"
                       ng-model='auth.registerEmail' required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input ng-class='{red: auth.noPassMatch === true}' type='password' class="form-control"
                       placeholder="Password" ng-model='auth.registerPassword' required>
            </div>

            <div class="form-group">
                <label for="password">Confirm Password</label>
                <input ng-class='{red: auth.noPassMatch === true}' type='password' class="form-control"
                       placeholder="Confirm Password" ng-model='auth.confirmPassword' required>
            </div>

            <button type="submit" class="btn btn-default" ng-click='auth.register()'>Submit</button>
            <h3>{{auth.tryAgain}}</h3>
        </div>
    </form>
</div>`
};

angular.module('5340-site.login')
	.component('loginComponent', loginComponent);

loginComponent.$inject = ['$state', 'authService', 'errorService'];

function loginRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'login',
			url: '/login',
			component: 'loginComponent'
		});
}

angular.module('5340-site.login')
	.config(loginRoute);

loginRoute.$inject = ['$stateProvider'];

function coffeeMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: ``,
	};
	return directive;

	function link(scope, element, attrs) {

	}
}

angular
	.module('5340-site.widgets')
	.directive('coffeeMenuBar', coffeeMenuBar);

//# sourceMappingURL=bundle.js.map