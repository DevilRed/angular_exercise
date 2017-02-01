'use strict';
angular.module("shoppingCart")
	.service('soldProductsService', ['products', 'soldProducts', 'order', '$localStorage', function (products, soldProducts, order, $localStorage){
			var soldProducts = $localStorage.sold_products;
			this.getSoldProducts = function (){
				// console.log(soldProducts);
				// soldProducts = JSON.parse(localStorage.getItem('sold_products'));
				return soldProducts;
			};
		}])
	;