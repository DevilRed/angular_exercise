angular.module("shoppingCart")
	.directive('yourPurchases', ['$localStorage', function($localStorage) {
	  return {
	      restrict: 'E',
	      scope: true,
	      templateUrl: 'partials/purchases.html',
	      controller: function(){
	      	var localOrders = $localStorage.confirmed_orders;
	      	angular.forEach(localOrders, function(val, key){
	      		localOrders.total = 0;
	      	});
	      	this.orders = localOrders;
	      },
	      controllerAs: 'purchasesCtrl'
	  };
	}]);