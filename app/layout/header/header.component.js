const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>Header</div>`
};

angular.module('bc-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];