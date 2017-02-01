angular.module("shoppingCart")
	.service('cartTotalService', [ function(){
		this.getCartTotal = function(soldItems){
			var total = 0;
			angular.forEach(soldItems, function(val, key){
				var productTotal = val.quantity * val.price;
				total += productTotal;
			});
			return total;
		};
	}])
	;