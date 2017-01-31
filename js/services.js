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
		this.confirmOrder = function(items){
			var oldItems = JSON.parse(localStorage.getItem('confirmed_orders')) || [];
			console.log(oldItems);
			order = JSON.parse(localStorage.getItem('current_order'));
			order.date = getCurrentDate();
			console.log(order);
			oldItems.push(order);
			console.log(oldItems);

			// localStorage.removeItem('confirmed_orders');
			localStorage.setItem('confirmed_orders', JSON.stringify(oldItems));
			localStorage.removeItem('sold_products');
			soldProducts = [];
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