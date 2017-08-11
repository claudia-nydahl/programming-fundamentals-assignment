var bun = ['plain', 'wholewheat', 'sesame seed', 'portuguese', 'rye'];
var meat = ['beef', 'chicken', 'ostrich', 'vegetarian'];
var topping = ['tomato', 'cucumber', 'cheddar', 'bacon', 'avocado', 'rocket', 'mushroom', 'caramelized onion', 'jalapeno'];
var sauce = ['mayo', 'red wine reduction', 'mushroom', 'pepper', 'barbeque'];

function checkOnly(stayChecked) {
	var elements = document.getElementsByName(stayChecked.name);
	for(i = 0; i < elements.length; i++) {
		if(elements[i].checked == true && elements[i] != stayChecked) {
			elements[i].checked = false;
		} 
	}
 }

var selected_toppings = [];
function checkTopping(topping) {
	if (topping.checked) {
		// add topping to list 
		if (selected_toppings.length < 3) {
			selected_toppings.push(topping);
		}
	} else {
		// remove topping from list
		var index = selected_toppings.indexOf(topping);
		selected_toppings.splice(index, 1);
	}

	var elements = document.getElementsByName(topping.name);
	for(i = 0; i < elements.length; i++) {
		if(selected_toppings.length == 3 && elements[i].checked == true && selected_toppings.indexOf(elements[i]) == -1) {
			elements[i].checked = false;
		}
	}
	console.log(selected_toppings);
}

var order_items = {};
var order_html = '';
function getOrder() {
 	var inputs = document.getElementsByTagName('input');
 	for (i = 0; i < inputs.length; i++) {
 		if (inputs[i].checked) {
 			console.log(inputs[i]);
 			if (! order_items[inputs[i].name]) {
 			order_items[inputs[i].name] = [];
 			}
 			order_items[inputs[i].name].push(inputs[i].value);
 			//order_items.push(inputs[i].value);
 		}
 	}
	console.log(order_items);
	document.getElementById("header").innerHTML = 'ORDER:';

	for(i in order_items) {
		order_html += i + ': ' + order_items[i].join(', ') + '<br>';
	}
	// Add to page
	document.getElementById("myOrder").innerHTML = order_html;
 }

 function totalCost() {
 	var toppingsCount = selected_toppings.length;
 	var toppingsPrice = toppingsCount * 22;
 	var burgerPrice = 38;
 	var totalPrice = toppingsPrice + burgerPrice;
 	console.log('Burger price: R' + burgerPrice);
 	console.log('Toppings price: R' + toppingsPrice);
 	console.log('Total price: R' + totalPrice);
 	document.getElementById("price").innerHTML = 'PRICE';
 	document.getElementById("cost1").innerHTML = 'Burger Price: R' + burgerPrice;
 	document.getElementById("cost2").innerHTML = 'Toppings Price (R22 each): R' + toppingsPrice;
 	document.getElementById("totalCost").innerHTML = 'Total Price: R' + totalPrice;
} 

function unhide(clickedButton, divID) {
var item = document.getElementById("submitOrder");
if (item) {
    if(item.className=='hidden'){
        item.className = 'unhidden' ;
        clickedButton.value = 'hide'
    }else{
        item.className = 'hidden';
        clickedButton.value = 'unhide'
    }
}}









