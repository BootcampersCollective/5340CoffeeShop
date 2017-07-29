function coffeeMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-bar">
    <h1>Menu Bar</h1>
    <coffee-menu-button data="button" ng-repeat="button in menuButtons"></div>
</div>`,
	};
	return directive;

	function link(scope, element, attrs) {
		scope.menuButtons = ['one', 'two', 'three'];

	}
}

angular
	.module('5340-site.widgets')
	.directive('coffeeMenuBar', coffeeMenuBar);
