angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/fleet-overview.html',
            controller: 'FleetController'
        })


        .when('/bi',{
            templateUrl: 'views/reports.html',
            controller : 'ReportsController'
        })

        .otherwise({
            redirectTo: '/'
        });


    $locationProvider.html5Mode(true);

}]);