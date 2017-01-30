'use strict';
angular.module("shoppingCart")

.controller("CartController", ['productService', '$scope', function(productService, $scope){

    this.items = productService.getSoldProducts();

    this.remove = function(index) {
        this.items.splice(index, 1);
    };
}])

.controller('addController', ['$scope', 'productService', function ($scope, productService){
	this.selected = {};
	this.title = 'Add Products form';
	this.offeredProducts = productService.getOfferedProducts();
	this.product = {};

	this.save = function ($event){
  	$event.preventDefault();
  	this.product.title = this.selected.title;
  	this.product.quantity = this.quantity;
  	this.product.price = this.quantity * this.selected.price;
  	productService.addProduct(this.product);
  };
}]);