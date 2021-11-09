//Constructor
function Pizza(size, toppings, crust, total, orderNo){
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total;
  this.order = orderNo;

}

//Create prototype
Pizza.prototype.myOrderDetails = function(){
  console.log("Thank you! Your order for a "+ this.size + " pizza with " + this.toppings + " toppings on a " + this.crust + " crust has been received.")
}

//User Interface Logic
$(document).ready(function() {
  $('button#orderDetails').click(function(){
    var sizeOfPizza = $('.pizza-size option:selected').val();
    var toppingsOfPizza = $('.pizza-toppings option:selected').val();
    var crustOfPizza = $('.pizza-crust option:selected').val();

    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

    $('#orderNo').html(order);
    $('#size').html(sizeOfPizza);
    $('#toppings').html(toppingsOfPizza);
    $('#crust').html(crustOfPizza);
    $('#total').html(total);

  });

});