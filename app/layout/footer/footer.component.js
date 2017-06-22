const footerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>footer</div>`
};

angular.module('bc-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];