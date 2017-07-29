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
