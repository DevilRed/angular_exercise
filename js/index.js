'use strict';
angular.module("shoppingCart")

.controller("CartController", ['productService', '$scope', function(productService, $scope){

    this.items = productService.getSoldProducts();

    this.remove = function(index, item) {
        this.items.splice(index, 1);
        var purchasedItems = JSON.parse(localStorage.getItem('sold_products'));
        // console.log(purchasedItems);
        var toDelete = -1;
        angular.forEach(purchasedItems, function (val, key){
        	// console.log(val);
        	if(val.title === item.title){
        		toDelete = key;
        	}
        });
        if(toDelete > -1){
        	purchasedItems.splice(toDelete,1);
        	localStorage.setItem('sold_products', JSON.stringify(purchasedItems));
        }
    };
}])

.controller('addController', ['$localStorage', 'productService', function ($localStorage, productService){
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
  };
}]);