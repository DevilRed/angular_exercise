angular.module("shoppingCart")
	.service('productService', ['$localStorage', function ($localStorage){
		var products = [
			{title: 'TV', stock: 10, price: 500},
			{title: 'Radio', stock: 10, price: 80},
			{title: 'Microwave', stock: 10, price: 150},
			{title: 'ChromeCast', stock: 10, price: 70},
		];
		var soldProducts = [
				{title: 'TV', quantity: 1, price: 500},
				{title: 'Radio', quantity: 1, price: 80}
			];
		var soldProducts = (localStorage.getItem('sold_products')!==null) ? JSON.parse(localStorage.getItem('sold_products')) : [
				{title: 'TV', quantity: 1, price: 500},
				{title: 'Radio', quantity: 1, price: 80}
			];
		var order = {};
		this.getOfferedProducts = function (){
			return products;
		};
		this.getSoldProducts = function (){
			// console.log(soldProducts);
			soldProducts = JSON.parse(localStorage.getItem('sold_products'))
			return soldProducts;
		};
		this.addProduct = function (product){
			// console.log(product.title);
			var flag = false;
			var toEdit;
			order.date = Date.now();
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
					soldProducts.push(product);
				} else{
					soldProducts.push(product);
				}
				flag = true;
				localStorage.setItem('sold_products', JSON.stringify(soldProducts));
			} else{
				soldProducts[toEdit].quantity = product.quantity;
				var toEdit;
				product = {};
			}
			// console.log(soldProducts);
			angular.forEach(soldProducts, function(val, key){
				order.total += val.price;
			});
			order.sold_products = soldProducts;
			console.log(order);
		};
		this.confirmOrder = function(items){
			var oldItems = JSON.parse(localStorage.getItem('confirmed_orders')) || [];
			console.log(order);
			// oldItems.push(order);

			// localStorage.removeItem('confirmed_orders');
			localStorage.setItem('confirmed_orders', JSON.stringify(oldItems));
			localStorage.removeItem('sold_products');
			soldProducts = [];
		};
	}])
	;