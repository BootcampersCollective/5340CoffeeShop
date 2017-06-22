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
