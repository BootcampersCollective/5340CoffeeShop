function coffeeMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-bar">
                <div id="nav-img"></div>
    <h1>Menu Bar</h1>
    <coffee-menu-button data="{{button}}" ng-repeat="button in menuButtons"></div>
		<div><a href="https://www.facebook.com/5340Coffee/"><img src="images/facebook.png" alt="facebook" /></a>
		<a href="https://twitter.com/40weightarvada?lang=en"><img src="images/twitter.png" alt="twitter" /></a>
		<a href="mailto:info@40weightcoffee.com"><img src="images/email.png" alt="email" /></a>
		</div>
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
