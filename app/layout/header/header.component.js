const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>Header</div>`
};

angular.module('5340-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
