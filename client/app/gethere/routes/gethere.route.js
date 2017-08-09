function gethereRoute($stateProvider) {
    $stateProvider
        .state({
            name: 'app.gethere',
            url: 'gethere',
            component: 'gethere'
        });
}

angular.module('5340-site.gethere')
    .config(gethereRoute);

gethereRoute.$inject = ['$stateProvider'];