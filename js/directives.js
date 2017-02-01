angular.module("shoppingCart")
	.directive('yourPurchases', ['$localStorage', function($localStorage) {
	  return {
	      restrict: 'E',
	      scope: true,
	      templateUrl: 'partials/purchases.html',
	      controller: function(){
	      	var localOrders = $localStorage.confirmed_orders;
	      	// console.log(localOrders);
	      	angular.forEach(localOrders, function(val, key){
	      		// console.log(val);
	      		localOrders.total = 0;
	      		// console.log(localOrders);
	      		angular.forEach(val, function(val, key){
	      			// console.log(val)
	      			// val.total += val.price;
	      		});
	      	});
	      	this.orders = localOrders;
	      },
	      controllerAs: 'purchasesCtrl'
	  };
	}]);