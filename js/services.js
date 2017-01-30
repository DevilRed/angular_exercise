angular.module("shoppingCart")
	.service('productService', [function (){
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
			soldProducts.push(product);
			// console.log(soldProducts);
		};
	}])
	;