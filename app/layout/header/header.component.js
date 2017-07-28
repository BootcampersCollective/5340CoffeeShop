const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div>Header</div>
<div class="container-menu"></div>`
};

angular.module('5340-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
