angular.module('MainCtrl', ['ngMaterial']).controller('MainController', function($scope, $mdSidenav, $mdMedia) {
  
    $scope.screenGtMd = function(){return $mdMedia('gt-md')};

    $scope.toggleLeft = function() {
    	$mdSidenav('leftSideNav').toggle()
    	.then(function(){
    	});
    };

});