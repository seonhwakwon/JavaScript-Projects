document.write(typeof "string" +  "<br>");//"string" data type of variable
document.write(typeof 10 + "<br>") ; //"number" data type of varaiable

document.write("10" +5)//Type Coercion

document.write('<br>' + 2E310);//infinite
document.write('<br>' + -3E310);//-infinite
document.write('<br>');
document.write( 10>2);//The result is  True.
document.write('<br>');
document.write( 10<2); //The result is False.

document.write('<br>');
document.write(20==10); //It is not equal 20 and 10. It returns false.
document.write('<br>');
document.write(20==20);//It is equal 20 and 20. It returns True.
document.write('<br>');

X = 10;
Y = 10;
document.write(X === Y); // a. Return true by ensuring to match the data and value
document.write('<br>');

A = 12;
B = '13';
document.write(A === B);
document.write('<br>'); //b. Return false by writing a different data type and different value

C = 82;
D  ="82";
document.write(C === D); //c. Return false by writing a different type but the same value for both.
document.write('<br>'); 

E = "10";
F = "15";
document.write(C === D)
document.write('<br>'); //d. return false by writing the same data type but a different value for both.

document.write(5>2 && 10>4); //5>2 is true and 10>4 is true:both are true. The reuslt is true.
document.write('<br>'); 

document.write(5>10 && 10>4); // 5>10 is false and 10>4 is true:Only one is ture(and operator must be true both.), so the reuslt is false.
document.write('<br>'); 

document.write(5>10 || 10>4); // 5>10 is false and 10>4 is true: One is true(Or operator is ture even if onlt one is true.), so the result is ture.
document.write('<br>'); 

document.write(5>10 || 10>20); //5>10 is false and 10>20 is false, the reuslt is false.
document.write('<br>'); 

function my_function_1() {
  document.getElementById("Test_1").innerHTML = 0/0; 
} //  0/0 is a not a number. The result is NaN.
function my_function_2() {
  document.getElementById("Test_2").innerHTML =isNaN('This is a string');
} //This is a string is a not a number. The result is True.

function my_function_3() {
  document.getElementById("Test_3").innerHTML =isNaN('007'); 
}//007 is a number.The result is False.

function not_Function_1() {
  document.getElementById("Not_1").innerHTML = !(20 > 10);
} //If id is Not_1, return false. ! operator means not. The result is false.

function not_Function_2() {
    document.getElementById("Not_2").innerHTML = !(5 > 10);
} //If id is Not_2, return true. 20>10 is false, but ! operator means not. The result is true.