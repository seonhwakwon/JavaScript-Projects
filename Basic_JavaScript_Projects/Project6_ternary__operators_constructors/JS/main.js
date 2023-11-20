function Vote_Function() {
  var Age, Can_vote; // declare variable age and Can_vote
  Age = document.getElementById("Age").value;// search id="age" and then get a input value into Age
  Can_vote = (Age < 18 ) ? "You are not old enough to vote " : "You can vote."; //  if age < 18, put a value into Can_vote "You are too young", but if age is not age < 18, put a value into Can_vote "You are old enough". 
  document.getElementById("Vote").innerHTML = Can_vote;//search id=vote and return "Can_vote" + to vote.
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color =Color;
}
var Jack = new Vehicle("Dodge", "Viper",2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "PInto", 1971, "Mustard");
function myFunction() {
  document.getElementById("New_and_This").innerHTML = "Erik drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +"manufactured in" + Erik.Vehicle_Year;
}

function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}