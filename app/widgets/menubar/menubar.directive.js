function bcMenuBar() {
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
	.module('bc-site.widgets')
	.directive('bcMenuBar', bcMenuBar);