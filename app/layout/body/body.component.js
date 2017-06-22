const bodyComponent = {
	bindings: {

	},
	controller: function () {

	},
	template: `<div>Body</div><ui-view></ui-view>`
};

angular.module('bc-site.layout')
.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];