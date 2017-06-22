const bodyComponent = {
	bindings: {

	},
	controller: function () {

	},
	template: `<div>Body</div><ui-view></ui-view>`
};

angular.module('5340-site.layout')
.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
