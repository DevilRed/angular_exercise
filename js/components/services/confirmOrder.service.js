'use strict';
angular.module("shoppingCart")
	.service('confirmOrderService', ['products', 'soldProducts', 'order', '$localStorage', function (products, soldProducts, order, $localStorage){
		this.confirmOrder = function(items){
			var oldItems = $localStorage.confirmed_orders || [];
			order = $localStorage.current_order;
			order.date = getCurrentDate();
			oldItems.push(order);

			$localStorage.confirmed_orders =oldItems;
			localStorage.removeItem('sold_products');
			$localStorage.sold_products = [];
		};

		function getCurrentDate (){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;

			var yyyy = today.getFullYear();
			if(dd<10){
				dd='0'+dd;
			}
			if(mm<10){
				mm='0'+mm;
			}
			var today = dd+'/'+mm+'/'+yyyy;
			return today;
		}
	}])
	;