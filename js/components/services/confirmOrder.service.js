'use strict';
angular.module("shoppingCart")
	.service('confirmOrderService', ['products', 'soldProducts', 'order', function (products, soldProducts, order){
		this.confirmOrder = function(items){
			var oldItems = JSON.parse(localStorage.getItem('confirmed_orders')) || [];
			// console.log(oldItems);
			order = JSON.parse(localStorage.getItem('current_order'));
			order.date = getCurrentDate();
			// console.log(order);
			oldItems.push(order);
			// console.log(oldItems);

			// localStorage.removeItem('confirmed_orders');
			localStorage.setItem('confirmed_orders', JSON.stringify(oldItems));
			localStorage.removeItem('sold_products');
			soldProducts = [];
		};

		function getCurrentDate (){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!

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