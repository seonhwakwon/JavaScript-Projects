function Vote_Function() {
  var Age, Can_vote; // declare variable age and Can_vote
  Age = document.getElementById("Age").value;// search id="age" and then get a input value into Age
  Can_vote = (Age < 18 ) ? "You are not old enough to vote " : "You can vote."; //  if age < 18, put a value into Can_vote "You are too young", but if age is not age < 18, put a value into Can_vote "You are old enough".(using ternary operator) 
  document.getElementById("Vote").innerHTML = Can_vote;//search id=vote and return "Can_vote" + to vote.
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; //
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color =Color;
}//create constructor function "Vehicle"
var Jack = new Vehicle("Dodge", "Viper",2020, "Red"); //create new object of Vehicle and put a new obect in varaible "Jack"
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//create new object of Vehicle and put a new obect in varaible "Emily"
var Erik = new Vehicle("Ford", "PInto", 1971, "Mustard");//create new object of Vehicle and put a new obect in varaible "Erik"
function myFunction() {
  document.getElementById("New_and_This").innerHTML = "Erik drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +"manufactured in" + Erik.Vehicle_Year;
} //search id "New_and_This" and return "Erik drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +"manufactured in" + Erik.Vehicle_Year;

function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}//search id "Nested_function" return Function "Count()"and create Function "Count()" :  create Function "Plus_one()" and  increase +1 variable "Staring_point"(using Nested Function).