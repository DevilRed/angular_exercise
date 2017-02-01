var app = angular.module('shoppingCart', ['ngStorage', 'jcs-autoValidate']);

/*app.config(['$localStorageProvider',
    function ($localStorageProvider) {
        $localStorageProvider.set('sold_products', []);
    }]);*/

app.value('products', [
	{title: 'TV', stock: 10, price: 500},
	{title: 'Radio', stock: 10, price: 80},
	{title: 'Microwave', stock: 10, price: 150},
	{title: 'ChromeCast', stock: 10, price: 70},
]);
app.value('soldProducts', (localStorage.getItem('sold_products')!==null) ? JSON.parse(localStorage.getItem('sold_products')) : [
				// {title: 'TV', quantity: 1, price: 500},
				// {title: 'Radio', quantity: 1, price: 80}
			]);
app.value('order', {});



angular.module('jcs-autoValidate')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['onlyNumber'] = 'Please use only integers';
        });
    }
]);