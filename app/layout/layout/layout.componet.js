const layoutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init layout');
		};
	},
	template: `<header-component class="comp1"></header-component>
<body-component></body-component>
<footer-component></footer-component>`
};

angular.module('5340-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];
