const menu = {
	bindings: {},
	controller: function (apiService) {
		let ctrl = this;
		ctrl.menu = null;

		ctrl.$onInit = function () {
			apiService.getMenu()
				.then(function (res) {
					console.log('getMenu res', res);
					ctrl.menu = res.data;
				})
				.catch(function (err) {
					console.log('getMenu Error', err);
				});
		};

	},
	template: `<div class="container-menu">
    <h1> menu </h1>
    <h3> We are super duper cool </h3>
    <div class="menu-wrapper">
        <div class="menu-item" ng-repeat="item in $ctrl.menu">{{item.Item}}</div>
    </div>
</div>`
};

angular.module('5340-site.menu')
	.component('menu', menu);

menu.$inject = ['apiService'];
