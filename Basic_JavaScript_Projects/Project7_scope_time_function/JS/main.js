var X= 10; //declare global variable "X"
function Add_numbers_1(){
  document.write(20 + X + "<br>");
}//create function Add_numbers_1 and display 20+10 =30.
function Add_numbers_2(){
  document.write(X +100 +"<br>");
}//create function Add_numbers_2 and display 10+100 =110.
Add_numbers_1(); //call function Add_numbers_1
Add_numbers_2(); //call function Add_numbers_2


function Add_numbers_3(){
  var Y= 10;
  document.write(20 + 10 + "<br>");
}//create function Add_numbers_3 and display 20+10 =30.
/*function Add_numbers_4(){
  document.write(Y +100);
}create function Add_numbers_4 and display nothing because Y is not defined.(error)*/

Add_numbers_3(); //call function Add_numbers_3
//Add_numbers_4(); //call function Add_numbers_4

//console.log(Y); write a function with an error in it and use console.log() method to debug it within the consle in Chrome Dev Tools.

function get_Date() {
  if (new Date().getHours() < 18 ){
    document.getElementById("Greeting").innerHTML ="How are you today?";//if return time is eariler than 18. search the id "Greeting" and return "How are you today?".  
  }
}
if (1 < 2){
  document.write("The left number is smaller than the number on the right.");//if 1 is smaller than 2, disply "The left number is smaller than the number on the right.".
}

/*my If statment*/
function comparision(){//create function "comparision"
  var A_number, B_number;//declare two variable
  A_number = document.getElementById("A").value; //put a value in the A_number
  B_number = document.getElementById("B").value;//put a value in the B_number
  if (A_number < B_number){
    sentence ="A is samller than B.";
  }//if A_number is smaller than B_number, put "A is smaller than B." in the variable "sentece".
  else if (A_number === B_number){
    sentence ="A and B is same number."; 
  }//if A_number is same with B_number, put "A and B is same number. " in the variable "sentece". 
  else{
    sentence =" A is bigger than B.";
  } //if A_number is not smaller than B_number and A_number is same with B_number, put "A is bigger than B."in the variable "sentece".
  document.getElementById("small_or_big").innerHTML= sentence;
  // search id "small_or_big and return variable "sentence".
}

function Age_Function() {
  Age = document.getElementById("Age").value; //search id="Age" and return value in Age.
  if(Age >= 18) {
    Vote = "You are old enough to vote!" ;
  } //if age is same and older than 18, put "You are old enough to vote!" in variable "Vote".
  else{
    Vote ="You are not old enough to vote!";
  } // if age is same and older than 18, put "You are not old enough to vote!" in variable "Vote".
  document.getElementById("How_old_are_you?").innerHTML = Vote; //search id "How_old_are_you?" and return variable "Vote" value.
} 

function Time_function() {
  var Time = new Date().getHours(); //return current time in variable "Time".
  var Reply; //declare variable "Reply"
  if (Time < 12 == Time > 0 ) {
    Reply = "It is morning time!";
  } //if Time is earlier than 12 and later than 0, put "It is morning time!"  in variable "Reply".
  else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon."
  } //if Time is same and later than and Time is eariler than 18, put  "It is afternoon." in variable "Reply".
  else {
    Reply = "It is evening time.";
  } //If not the conditions in front, put "It is evening time." in varaiable "Reply".
  document.getElementById("Time_of_day").innerHTML = Reply;//search id "Time_of_day" and return variable "Reply" value.
}