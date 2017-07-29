const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="container-menu">
<div>Header</div>
</div>`
};

angular.module('5340-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
