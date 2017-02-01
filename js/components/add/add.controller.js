'use strict';
angular.module("shoppingCart")

.controller('addController', ['$localStorage', 'productService', 'offeredProductsService', '$window', function ($localStorage, productService, offeredProductsService, $window){
	this.selected = {};
	this.title = 'ADD PRODUCTS';
	this.offeredProducts = offeredProductsService.getOfferedProducts();
	this.product = {};
	this.quantity = 1;
  this.initialValue = this.offeredProducts[0].title;
  this.selected = this.offeredProducts[0];

	this.save = function ($event){
  	$event.preventDefault();
  	this.product.title = this.selected.title;
  	this.product.quantity = this.quantity;
  	this.product.price = this.quantity * this.selected.price;
  	productService.addProduct(this.product);
  	// cleaning data
  	this.quantity = 1;
  	this.initialValue = this.offeredProducts[0].title;
    console.log(this.quantity);
    $window.location.reload();
  };
}]);