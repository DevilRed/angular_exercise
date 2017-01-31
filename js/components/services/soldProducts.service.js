'use strict';
angular.module("shoppingCart")
	.service('soldProductsService', ['products', 'soldProducts', 'order', function (products, soldProducts, order){
			// var soldProducts = JSON.parse(localStorage.getItem('sold_products'));
			this.getSoldProducts = function (){
				// console.log(soldProducts);
				// soldProducts = JSON.parse(localStorage.getItem('sold_products'));
				return soldProducts;
			};
		}])
	;