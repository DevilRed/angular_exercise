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
        // $window.location.reload();
    };
    this.confirmOrder = function($event, items){
      $event.preventDefault();
      // console.log(items);
      confirmOrderService.confirmOrder(items);
      $window.location.reload();
    };
}]);