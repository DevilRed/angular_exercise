angular.module("shoppingCart")
	.service('productService', ['products', 'soldProducts', 'order', function (products, soldProducts, order){
		this.addProduct = function (product){
			// console.log(product.title);
			var flag = false;
			var toEdit;
			order.date = getCurrentDate();
			order.total = 0;
			angular.forEach(soldProducts, function (val, key){
				if(val.title === product.title) {
					flag = true;
					toEdit = key;
				}
			});
			if(flag === false ){
				if(soldProducts === null){
					soldProducts = [];
				}
				soldProducts.push(product);
				flag = true;
				localStorage.setItem('sold_products', JSON.stringify(soldProducts));
			} else{
				soldProducts[toEdit].quantity = product.quantity;
				var toEdit;
				product = {};
			}
			// console.log(soldProducts);
			angular.forEach(soldProducts, function(val, key){
				order.total += (val.price * val.quantity);
			});
			order.sold_products = soldProducts;
			console.log(order);
			localStorage.setItem('current_order', JSON.stringify(order))
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