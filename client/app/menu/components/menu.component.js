const menu = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<h1> menu </h1>
<h3> We are super duper cool </h3>`
};

angular.module('5340-site.menu')
	.component('menu', menu);

about.$inject = [];
