function coffeeMenuButton() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-button">
    <a ui-sref="{{button.sref}}">{{button.name}}</a>
</div>`,
	};
	return directive;

	function link(scope, element, attrs) {
		scope.button = scope.$eval(attrs.data);
	}
}

angular
	.module('5340-site.widgets')
	.directive('coffeeMenuButton', coffeeMenuButton);
