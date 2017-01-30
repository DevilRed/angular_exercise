angular.module("shoppingCart")
	.service('productService', [function (){
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