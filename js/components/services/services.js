angular.module("shoppingCart")
	.service('productService', ['products', 'soldProducts', 'order', '$localStorage', function (products, soldProducts, order, $localStorage){
		this.addProduct = function (product){
			var flag = false;
			var toEdit;
			order.date = getCurrentDate();
			order.total = 0;
			var soldProducts = $localStorage.sold_products;
			angular.forEach($localStorage.sold_products, function (val, key){
				if(val.title === product.title) {
					flag = true;
					toEdit = key;
				}
			});
			if(flag === false ){
				if(soldProducts === null || typeof soldProducts === 'undefined'){
					soldProducts = [];
				}
				soldProducts.push(product);
				$localStorage.sold_products = soldProducts;
				flag = true;
				$localStorage.sold_products = soldProducts;
			} else{
				soldProducts[toEdit].quantity = product.quantity;
				var toEdit;
				product = {};
			}
			angular.forEach($localStorage.sold_products, function(val, key){
				order.total += (val.price * val.quantity);
			});
			order.sold_products = soldProducts;
			$localStorage.current_order = order;
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