const footerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="container-footer">footer</div>`
};

angular.module('5340-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
