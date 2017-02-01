'use strict';
angular.module("shoppingCart")
	.service('confirmOrderService', ['products', 'soldProducts', 'order', '$localStorage', 'utilitiesService', function (products, soldProducts, order, $localStorage, utilitiesService){
		this.confirmOrder = function(items){
			var oldItems = $localStorage.confirmed_orders || [];
			order = $localStorage.current_order;
			order.date = utilitiesService.getCurrentDate();
			oldItems.push(order);

			$localStorage.confirmed_orders =oldItems;
			localStorage.removeItem('sold_products');
			$localStorage.sold_products = [];
		};
	}])
	;