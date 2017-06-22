function coffeeMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: ``,
	};
	return directive;

	function link(scope, element, attrs) {

	}
}

angular
	.module('5340-site.widgets')
	.directive('coffeeMenuBar', coffeeMenuBar);
