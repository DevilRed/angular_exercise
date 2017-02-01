/**
 * @class shoppingCart
 * @author Christian Quispe Rojas
 * @desc module for managing shopping cart, listing a list for purchased orders
 * @param ngStorage, jcs-autoValidate
 */
var app = angular.module('shoppingCart', ['ngStorage', 'jcs-autoValidate']);


app.value('products', [
	{title: 'TV', stock: 10, price: 500},
	{title: 'Radio', stock: 10, price: 80},
	{title: 'Microwave', stock: 10, price: 150},
	{title: 'ChromeCast', stock: 10, price: 70},
]);
app.value('soldProducts', (localStorage.getItem('sold_products')!==null) ? JSON.parse(localStorage.getItem('sold_products')) : [
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