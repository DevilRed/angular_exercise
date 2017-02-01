angular.module("shoppingCart")
	.service('productService', ['products', 'soldProducts', 'order', '$localStorage', 'utilitiesService', function (products, soldProducts, order, $localStorage, utilitiesService){
		/**
     * @function addProduct
     * @author  Christian Quispe Rojas
     * @param  product
     * @desc service for creating a current order object
     */
		this.addProduct = function (product){
			var flag = false;
			var toEdit;
			order.date = utilitiesService.getCurrentDate();
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
	}])
	;