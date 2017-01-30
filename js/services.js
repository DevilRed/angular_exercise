angular.module("shoppingCart")
	.service('productService', [function (){
		this.getOfferedProducts = function (){
			var products = [
				{title: 'TV', stock: 10, price: 500},
				{title: 'Radio', stock: 10, price: 80},
				{title: 'Microwave', stock: 10, price: 150},
				{title: 'ChromeCast', stock: 10, price: 70},
			];
			return products;
		};
		this.getProducts = function (){
			var products = [
				{title: 'TV', quantity: 1, price: 500},
				{title: 'Radio', quantity: 1, price: 80}
			];
			// console.log(products);
			return products;
		};
	}])
	;