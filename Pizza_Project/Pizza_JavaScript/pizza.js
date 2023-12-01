
function getReceipt() {
  //This initializes our string so it can get passed from
  //function to function, growing line by line a full receipt
  var text1 = "<h3>You ordered:</h3>";
  //for price
  var runningTotal = 0;
  //for size
  var sizeTotal= 0;
  //get a value of size
  var sizeArray = document.getElementsByClassName("size");
  //if checkbox is checked, get a size and put a text value.
  for(var i = 0; i< sizeArray.length; i++) {
    if(sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1+selectedSize+"<br>";
    }
  }
  //get a value of the checked size.
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  }
  else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  }
  else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  //put sizeTotal in the runningTotal.
  runningTotal = sizeTotal;
  console.log(selectedSize+" = $"+sizeTotal+".00");
  console.log("size text1: "+ text1);
  console.log("subtotal: $" + runningTotal+".00")
  //call the function
  getTopping(runningTotal, text1);
}

//get a value of topping and return a value of checked pizza and topping and totalprice.
function getTopping(runningTotal, text1) {
   //number os topping  
  var toppingTotal = 0 ;
  //value of checked toppings 
  var selectedTopping = [];
  //return value of topping in toppingArray.
  toppingArray = document.getElementsByClassName("toppings");
  //if topping is checked, get a value of topping and put a text.
  //There is value of pizza in the text1
  for(var j = 0; j <toppingArray.length; j++ ) {
    if(toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      console.log("selected topping item:  (" +toppingArray[j].value+")");
      text1 = text1 + toppingArray[j].value + "<br>";
    }
  }
  //length of SelectedTopping 
  var toppingCount = selectedTopping.length;

  //topping is more than 1, subtract 1.
  if (toppingCount > 1) {
    toppingTotal =(toppingCount -1);
  }else { //topping is 0
    toppingTotal = 0;
  }
  //add a pizza price and number of topping and put in runningTotal.
  runningTotal = (runningTotal + toppingTotal);
  console.log("total selected topping items:" + toppingCount);
  console.log(toppingCount+ "topping - 1 free topping =" +"$" + toppingTotal +".00");
  console.log("topping text1:  " + text1);
  console.log("Purchase Total:  " +"$"+runningTotal+".00");
  //search id showText and return value pizza and topping. 
  document.getElementById("showText").innerHTML=text1;
  //search id totalPrice and retrun tptalprice.
  document.getElementById("totalPrice").innerHTML = "<h3>Total : <strong>$"+runningTotal+".00"+"</strong></h3>";
  }

  //get a value checked pizza and topping, unchecked all. 
function getReset() {
  var size_length = document.getElementsByClassName("size");
  var topping_length =document.getElementsByClassName("toppings");
  for(var i = 0; i< size_length.length; i++) {
    size_length[i].checked =false;
  }
  for(var j = 0; j <topping_length.length; j++ ) {
    topping_length[j].checked =false;
  }
  document.getElementById("showText").innerHTML="";
  document.getElementById("totalPrice").innerHTML="";
} 
  