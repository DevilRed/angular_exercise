var shoppingCart = angular.module("shoppingCart", []);

shoppingCart.controller("CartController", ['$scope', function($scope){

    $scope.items = [
        {title: 'TV', quantity: 1, price: 500},
        {title: 'Radio', quantity: 1, price: 80}
    ];

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
}]);

shoppingCart.controller('addController', ['$scope', function ($scope){
	this.title = 'Add Products form';
}]);