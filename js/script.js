//Constructor
function Pizza(size, toppings, crust, total, orderNo){
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total;
  this.order = orderNo;

}

//Create instances of the Pizza object
let firstPizza = new Pizza("large", "pepperoni", "crispy", 1200, 1);
let secondPizza = new Pizza("medium", "cheese", "gluten-free", 800, 2);
let thirdPizza = new Pizza("small", "onions", "soft", 500, 3);
