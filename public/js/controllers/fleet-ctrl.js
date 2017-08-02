angular.module('FleetCtrl', ['ngMaterial', 'uiGmapgoogle-maps']).controller('FleetController', function($scope, FleetService, $mdSidenav, $mdMedia) {
    

    $scope.randomMarkers = [];
    $scope.randomMarkers = $scope.randomMarkers.concat(FleetService.getMapEntries("gasPumps"));
    $scope.randomMarkers = $scope.randomMarkers.concat(FleetService.getMapEntries("trucks"));
    $scope.randomMarkers = $scope.randomMarkers.concat(FleetService.getMapEntries("plants"));
    $scope.randomMarkers = $scope.randomMarkers.concat(FleetService.getMapEntries("trailers"));
    
    $scope.map = {
        center: {
            latitude: 40.1451,
            longitude: -99.6680
        },
        zoom: 4,
        bounds: {}
    };

    $scope.map.markersEvents = {
        mouseover: function (marker, eventName, model, args) {
            model.show = true;
            $scope.$apply();
        },
        mouseout: function (marker, eventName, model, args) {
            model.show = false;
            $scope.$apply();
        }
    };
    $scope.options = {
        scrollwheel: false
    };

    $scope.$watch(function() {
        return $scope.map.bounds;
    }, function(nv, ov) {

    }, true);


});

