BUT-IT-NOW website
==================

BUY-IT-NOW store is requiring a website to sell their products.
List of products sold by BUY-IT-NOW:
TV = $500
Radio = $80
Microwave = $150
ChromeCast = $70

There is an initial mockup of BUY-IT-NOW web store, so please complete the below requirements.
Feel free to add Styles, or update the HTML code.
The final product should contain three areas:
"ADD PRODUCTS" form
"YOUR SHOPPING CART" list
"YOUR PURCHASES" list.



Requirements
============

"ADD PRODUCTS" form
1. Create an small form above of "YOUR SHOPPING CART" list.
2. The form will let users to add new items into the shopping cart.
3. The form should contain a dropdown with offered prodcuts by BUT-IT-NOW.
4. The form should contain a text field that only allow numbers for the Quantity.
5. The form should contain a text field that display the Price (read only).
6. Add a SUBMIT action to Add Items into "YOUR SHOPPING CART" list (Use validations).
6. If user tries to add a product that is already in "YOUR SHOPPING CART" table then this should be updated.
7. The new items added should be automatically displayed in "YOUR SHOPPING CART" list, and form cleanned.

"YOUR SHOPPING CART" list
1. Add headers to the columns in "YOUR SHOPPING CART" table (Product, Quantity, Price, Total).
2. Create a service that will be used for CART TOTAL calculation, and display the CART TOTAL in the last row of "YOUR SHOPPING CART" table.
3. Create a SUBMIT action to place the order.
4. The ubmitted items should be stored in browser's localStorage.

"YOUR PURCHASES" list.
1. Create a directtive/component to display  in a list the submitted orders (READ ONLY view).
2. The submitted orders should only displays: date of submission, Total of purchase, brief summary of purchased items.
