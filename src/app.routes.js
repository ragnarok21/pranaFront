
var app = angular
    .module("pranaFront",["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when('/view1', {
        templateUrl: '/views/view1/view1.html',
        controller: 'View1Ctrl'
    });

    $routeProvider.when('/view2', {
        templateUrl: '/views/view2/view2.html',
        controller: 'View2Ctrl'
    });

    $routeProvider.when('/', {
        templateUrl: '/views/view2/view2.html',
        controller: 'View2Ctrl'
    });

    $routeProvider.otherwise({redirectTo:"/"});
});
