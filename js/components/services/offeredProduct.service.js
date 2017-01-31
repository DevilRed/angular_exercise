'use strict';
angular.module("shoppingCart")
	.service('offeredProductsService', ['products', 'soldProducts', 'order', function (products, soldProducts, order){
			this.getOfferedProducts = function (){
				return products;
			};
		}])
	;