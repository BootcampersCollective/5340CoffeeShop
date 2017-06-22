const home = {
	bindings: {
		
	},
	controller: function (authService) {
		let ctrl = this;
		ctrl.title = 'Bootcampers Collective';
		
		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: ` <h1 class="home-title">{{$ctrl.title}}</h1>
<layout-component></layout-component>`
};

angular.module('bc-site.home')
	.component('home', home);

home.$inject = ['authService'];
