'use strict';
angular.module("shoppingCart")

.controller('addController', ['$localStorage', 'productService', '$window', function ($localStorage, productService, $window){
	this.selected = {};
	this.title = 'Add Products form';
	this.offeredProducts = productService.getOfferedProducts();
	this.product = {};
	this.quantity = 0;

	this.save = function ($event){
  	$event.preventDefault();
  	this.product.title = this.selected.title;
  	this.product.quantity = this.quantity;
  	this.product.price = this.quantity * this.selected.price;
  	productService.addProduct(this.product);
  	// cleaning data
  	this.quantity = 0;
  	this.selected = {};
      $window.location.reload();
  };
}]);