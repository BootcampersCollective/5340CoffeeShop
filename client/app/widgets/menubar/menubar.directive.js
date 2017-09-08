function coffeeMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-bar">
                <a href="app.home"><div id="nav-img"></div></a>
    <coffee-menu-button data="{{button}}" ng-repeat="button in menuButtons"></div>
		<div class= "social-media-links"><a href="https://www.facebook.com/5340Coffee/" target="_blank"><img src="images/facebook.png" alt="facebook" /></a>
		<a href="https://twitter.com/40weightarvada?lang=en" target="_blank"><img src="images/twitter.png" alt="twitter" /></a>
		<a href="mailto:info@40weightcoffee.com" target="_blank"><img src="images/email.png" alt="email" /></a>
		</div>
</div>`,
	};
	return directive;


	function link(scope, element, attrs) {
		scope.menuButtons = [
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
