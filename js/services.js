angular.module("shoppingCart", [])
	.service('productService', ['$scope', function ($scope){
		this.getProducts = function (){
			var products = [
				{title: 'TV', quantity: 1, price: 500},
				{title: 'Radio', quantity: 1, price: 80}
			];
			return products;
		};
	}])
	;