// funtion for count 1-10
function Call_Loop() {
  //declare string variable "Digit"
  var Digit =""; 
  //decalre variable and put 1.
  var X =  1;
  //stack a value of X in variable "Digit" until X is not greater than 11 and increases value of X by 1.
  while (X < 11) {
    Digit += "<br>" + X; 
    X++;
  }
  //search the id "Loop" and return Digit of value.
  document.getElementById("Loop").innerHTML = Digit;
}
/* return the length of string*/
function string_length() {
  //declare variable letters and put "JavaScript and HTML".
  let letters = "JavaScript and HTML";
  //return the length of letters in string_length.
  let string_length =letters.length;
  //search the id "length" and return string_length of value.
  document.getElementById("length").innerHTML = string_length;
}

//crate Instruments list. 
const Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
//declare variable "Content"
let Content = "";
function for_Loop() {
  //stack a value of items in Instruments until there is value in the list.
  for(const item of Instruments){
    Content += item +"<br>";
  }
  //search id "List_of_Instruments" and return value of Content.
  document.getElementById("List_of_Instruments")
.innerHTML = Content;
}

/*Array */
function cat_pics(){
  //declare array variable "Cat_Picture"
  var Cat_Picture = []; 
  //put the values in Car_Picture
  Cat_Picture[0] = "sleeping";
  Cat_Picture[1] = "playing";
  Cat_Picture[2] = "eating";
  Cat_Picture[3] = "purring";
  //search id "cat" and return a value.
  document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
  }

//add and replace array*/ 
function constant_function() {
  //create array "Musical_Instrument"
  const Musical_Instrument ={type:"guitar", brand:"Fender", color:"black"}; 
  //replace the color to "blue"
  Musical_Instrument.color ="blue";
  //add the price (900)
  Musical_Instrument.price ="$900";
  //search id "Constant" and return a value.
  document.getElementById("Constant").innerHTML ="The cost of the " +Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//declare global variable A
var A = 82;
//display 82
document.write("<br>" +A);
  {
    //In a block, declare local variable "A"
    let A=33;
    //display 33
    document.write("<br>" + A);
  }
  //display 82
document.write("<br>" + A );

//declare global variable B
var B = 82;
document.write("<br>" +B);
  {
     //In a block, declare local variable "A"
    var B=33;
    //display 33
    document.write("<br>" + B);
  }
  //display 33 because var cannot have a block scope.
document.write("<br>" + B );

//return myfunction("john")
document.getElementById("return").innerHTML = myFunction("John")

//return Hello Jonh
function myFunction(name) {
  return "Hello" +  name
}
//create object
let car = {
  make: "Dodge",
  model: "Viper",
  year: "2021",
  color: "red",
  
  //return the "The car is a " + this.year + this.color + this.make + this.model; 
  description: function(){
    return "The car is a " + this.year + this.color + this.make + this.model; 
  }
};
// search id "Car_Object" and return car.description
document.getElementById("Car_Object").innerHTML = car.description();

function function_break() {
  //declare string variable "text_1"
  let text_1 =""; 
  //for i from 0 to 9 
  for(let i = 0; i < 10; i++) { 
    //if i is 3, ends the loop 
    if( i===3 ) { break; }
    //if i is not 3, stack the value in the text_1.
    text_1 += "The number is " + i + "<br>"
  }
  //search id break, return the value of text_1.
  document.getElementById("break").innerHTML = text_1;
}
function function_continue(){
  //declare string variable "text_2"
  let text_2 ="";
  ////for i from 0 to 9 
  for(let j = 0; j < 10; j++) {
    //j is 3, skip the value of 3
    if( j===3 ) { continue; }
    //if j is not 3, stack the value in the text_2
    text_2 += "The number is " + j + "<br>"
  }//search id continue, return the value of text_2.
  document.getElementById("continue").innerHTML = text_2;
}