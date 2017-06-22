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
