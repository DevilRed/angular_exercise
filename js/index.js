angular.module("shoppingCart")

.controller("CartController", ['productService', '$scope', function(productService, $scope){

    this.items = productService.getProducts();

    this.remove = function(index) {
        this.items.splice(index, 1);
    };
}])

.controller('addController', ['$scope', 'productService', function ($scope, productService){
	this.title = 'Add Products form';
	this.offeredProducts = productService.getOfferedProducts();

	this.save = function ($event){
    	$event.preventDefault();
    };
}]);