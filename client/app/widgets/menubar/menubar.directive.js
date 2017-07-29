function coffeeMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-bar">
    <h1>Menu Bar</h1>
    <coffee-menu-button data="{{button}}" ng-repeat="button in menuButtons"></div>
</div>`,
	};
	return directive;

	function link(scope, element, attrs) {
		scope.menuButtons = [
			{
				name: 'Home',
				sref: 'app'
			},
			{
				name: 'About',
				sref: 'app.about'
			},
			{
				name: 'Events',
				sref: 'app.events'
			},
			{
				name: 'Menu',
				sref: 'app.menu'
			},
			{
				name: 'Get Here',
				sref: 'app.gethere'
			},
		];

	}
}

angular
	.module('5340-site.widgets')
	.directive('coffeeMenuBar', coffeeMenuBar);
