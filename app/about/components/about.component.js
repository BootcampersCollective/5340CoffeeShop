const about = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<h1> About </h1>
<h3> We are super duper cool </h3>

<h2>Newsletter</h2>
<p>Subscribe to our newsletter</p>
<form>
    <input type="email" ng-model="">
    <button ng-click="">Sign Me Up!</button>
</form>`
};

angular.module('5340-site.about')
	.component('about', about);

about.$inject = [];
