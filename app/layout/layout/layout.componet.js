const layoutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init layout');
		};
	},
	template: `<div class="container-main">
<div class="container-left">
<header-component></header-component>
<footer-component></footer-component>
</div>
<div class="container-right">
<body-component></body-component>
</div>
</div>`
};

angular.module('5340-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];
