const about = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<h1> About </h1>
<h3> We are super duper cool </h3>`
};

angular.module('bc-site.about')
	.component('about', about);

about.$inject = [];