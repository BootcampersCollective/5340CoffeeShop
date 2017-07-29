const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="container-menu">
<div>Header</div>
    <coffee-menu-bar></coffee-menu-bar>
</div>`
};

angular.module('5340-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
