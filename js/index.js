angular.module("shoppingCart")

.controller("CartController", ['productService', '$scope', function(productService, $scope){

    this.items = productService.getProducts();


    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
}])

.controller('addController', ['$scope', 'productService', function ($scope, productService){
	this.title = 'Add Products form';
	this.offeredProducts = productService.getProducts();
}]);