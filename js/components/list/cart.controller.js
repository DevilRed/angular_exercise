'use strict';
angular.module("shoppingCart")

.controller("CartController", ['productService', 'soldProductsService', 'confirmOrderService', 'cartTotalService', '$scope', '$window', function(productService, soldProductsService,confirmOrderService, cartTotalService, $scope, $window){

    this.items = soldProductsService.getSoldProducts();
    this.cart_total = cartTotalService.getCartTotal(this.items);
    function getValue(){
        return soldProductsService.getSoldProducts();
    };

    this.remove = function(index, item) {
        this.items.splice(index, 1);
        this.cart_total = cartTotalService.getCartTotal(this.items);
        var purchasedItems = JSON.parse(localStorage.getItem('sold_products'));
        var toDelete = -1;
        angular.forEach(purchasedItems, function (val, key){
        	if(val.title === item.title){
        		toDelete = key;
        	}
        });
        if(toDelete > -1){
        	purchasedItems.splice(toDelete,1);
        	localStorage.setItem('sold_products', JSON.stringify(purchasedItems));
        }
    };
    this.confirmOrder = function($event, items){
      $event.preventDefault();
      confirmOrderService.confirmOrder(items);
      $window.location.reload();
    };
}]);