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
			// $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
		var soldProducts = (localStorage.getItem('sold_products')!==null) ? JSON.parse(localStorage.getItem('sold_products')) : [
				{title: 'TV', quantity: 1, price: 500},
				{title: 'Radio', quantity: 1, price: 80}
			];
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
			var soldProducts = fetch();
			angular.forEach(soldProducts, function (val, key){
				console.log(val.title);
				if(val.title === product.title) {
					flag = true;
					toEdit = key;
				}
			});
			if(flag === false ){
				soldProducts.push(product);
				console.log(soldProducts);
				flag = true;
				localStorage.setItem('sold_products', JSON.stringify(soldProducts));
			} else{
				console.log(toEdit);
				soldProducts[toEdit].quantity = product.quantity;
				var toEdit;
				product = {};
			}
		};
		function fetch(){
			return soldProducts;
		};
	}])
	;