function coffeeMenuButton() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-button">
    <a ui-sref="{{sref}}">{{name}}</a>
</div>`,
	};
	return directive;

	function link(scope, element, attrs) {
		console.log('coffeeMenuButton attrs', attrs.data);

		scope.name = attrs.data.name;
		console.log('coffeeMenuButton scope.name', scope.name);
		scope.sref = attrs.data.sref;
	}
}

angular
	.module('5340-site.widgets')
	.directive('coffeeMenuButton', coffeeMenuButton);
