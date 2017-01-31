angular.module("shoppingCart")
	.directive('yourPurchases', function() {
  return {
      restrict: 'E',
      replace: 'true',
      template: '<h2>Your Purchases</h2>'
  };
});