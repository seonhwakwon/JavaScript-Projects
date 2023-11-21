function full_Sentence() {
  var part_1 = "I have "; //declare variable part_1 and put "I have " in a variable Part_1.
  var part_2 = "made this ";//declare variable part_2 and put  "made this " in a variable Part_2.
  var part_3 = "into a complete ";//declare variable part_3 and put  "into a complete " in a variable Part_3.
  var part_4 = "sentence.";//declare variable part_4 and put a "sentece " in a variable Part_4.
  var whole_sentence = part_1.concat(part_2, part_3, part_4)//concatenate part_1, part_2, part_3, and part_4, and put in a variable whole_sentence 
  document.getElementById("Concatenate").innerHTML = whole_sentence;// search id "Concatenate" and return whole_sentece's value.
} 

function slice_Method() {
  var Sentece = "All work and no play makes Johnny a dull boy.";//declare variable "Sentece" and put "All work and no play makes Johnny a dull boy." in a Sentece.
  var Section = Sentece.slice(27,33); //extracts the numbers(27-33)in the Sentence. Return the "Johnny" in varaiable "Section"
  document.getElementById("Slice").innerHTML = Section;
 //search "Slice" and return Section's value.
}

/*toUpperCAse() : change to uppercase letters */
let Uppercase_letters = "Complete these actions."; //declare variable  "Uppercase_letters".
let change = Uppercase_letters.toUpperCase();//change Uppercase_letters's value to uppercaseltter and put in change.
document.write(change + "<br>"); // display change's value.

/*serach(): search and return the index */
let Search_letters = "Research and define the search() method."; //declare variable "Search_letters" and put "Research and define the search() method." in Search_letters.
let find_letters = Search_letters.search("define"); //search the index of "define " in  value of Search_letters and return the index in find_letters.
document.write(find_letters); //display fvalue of find_letters.

/*toString() : return a number as string*/
function string_Method() {
  let x = 182; //decalre variable "var" and put 182.
  document.getElementById("Numbers_to_string").innerHTML = x.toString();
//search id "Numbers_to_string" and return value of x(number) to string.
}

/* toPrecision() :fomats a number to a specified length*/
function Precision_Method() {
  let x = 12938.3012987376112; //declare variable "X" and put 12938.3012987376112
  document.getElementById("Precision").innerHTML = x.toPrecision(10);
  //search id "Precision" and return value of x(number) to specified length:10.
}

/*toFixed : coverts a number to string, rounded the string to a specified number of decimals. */
function fixed_Method() {
  let x =7.897787; //declare variable 'x' and put 7.897787.
  document.getElementById("fixed").innerHTML = x.toFixed(2);
  //search id "fixed" and return the converted an number to string, rounded to spicified number of decimals.
}
/*ValueOf() : returns the primitive value of string*/
function value_method(){
  let x = "Research and define the toFixed() method."; //declare variable "x" and put "Research and define the toFixed() method.".
  document.getElementById("value").innerHTML = x.valueOf();
  //search id "value" and return primitive value of x.
}