const layoutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init layout');
		};
	},
	template: `<header-component></header-component>
<body-component></body-component>
<footer-component></footer-component>`
};

angular.module('bc-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];