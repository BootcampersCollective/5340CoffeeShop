function coffeeMenuButton() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-button">
    <p>Menu Button {{}}</p>
</div>`,
	};
	return directive;

	function link(scope, element, attrs) {
		console.log('coffeeMenuButton attrs', attrs);
	}
}

angular
	.module('5340-site.widgets')
	.directive('coffeeMenuButton', coffeeMenuButton);
