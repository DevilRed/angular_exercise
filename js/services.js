angular.module("shoppingCart")
	.service('productService', [function ($localStorage){
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
		this.getOfferedProducts = function (){
			return products;
		};
		this.getSoldProducts = function (){
			return soldProducts;
		};
		this.addProduct = function (product){
			// console.log(product.title);
			var flag = false;
			angular.forEach(soldProducts, function (val, key){
				// console.log(val.title);
				if(val.title === product.title) {
					flag = true;
					val.quantity = product.quantity;
				}
			});
			if(flag === false)
				soldProducts.push(product);
		};
	}])
	;