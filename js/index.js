angular.module("shoppingCart")

.controller("CartController", ['productService', '$scope', function(productService, $scope){

    /*$scope.items = [
        {title: 'TV', quantity: 1, price: 500},
        {title: 'Radio', quantity: 1, price: 80}
    ];*/
    this.items = productService.getProducts();

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
}])

.controller('addController', ['$scope', function ($scope){
	this.title = 'Add Products form';
}]);