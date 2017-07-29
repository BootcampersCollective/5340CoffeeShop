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
	template: `
		<div class="home-container">
			
		</div>
	`

};

angular.module('5340-site.home')
	.component('home', home);

home.$inject = [];
