function addition_Function() {
  var addition =2 + 2;
  document.getElementById("Math_1").innerHTML = " 2 + 2 = "+addition;
} //  search id= Math_1 and when call the function return 2 + 2 = 4  

function subtraction_Function() {
  var Subtraction = 5-2;
  document.getElementById("Math_2").innerHTML =" 5- 2 = " + Subtraction;
}//  search id= Math_2 and when call the function return  5- 2 = 3

function multiplication_Function(){
  var multiplication = 6 * 8;
  document.getElementById("Math_3").innerHTML =" 6 * 8 = " + multiplication; 
}//  search id= Math_3 and when call the function return 6 * 8 = 48

function division_Function() {
  var division = 48 /6;
  document.getElementById("Math_4").innerHTML =" 48 / 6 = " + division;
}//  search id= Math_4 and when call the function return  48 / 6 = 6

function more_Math() {
  var simple_Math_1=(1 + 2) * 10 / 2 - 5;
  document.getElementById("Math_5").innerHTML ="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math_1; 
}//  search id= Math_5 and when call the function return  1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals 10

function modulus_operator() {
  var simple_Math_2 = 25 % 6;
  document.getElementById("Math_6").innerHTML ="When you divde 25 by 6 you have a remainder of : " + simple_Math_2;
}//  search id= Math_6 and when call the function return "When you divde 25 by 6 you have a remainder of : 1

function negation_Operator() {
  var x = 10;
  document.getElementById("Math_7").innerHTML = -x
}//search id= Math_4 and when call the function return -10

window.alert(Math.random());
// random between 0 and 1
window.alert(Math.random() * 100);
// random between  0 and 100 

var y= 5;
y++;
document.write('y++ : ' + y + '<br>');
// y : increasing 1

var z= 5.25;
z--;
document.write('z-- : ' + z + '<br>');
//z: decresing 1

