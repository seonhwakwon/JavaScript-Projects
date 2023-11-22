function countdown() {
  var seconds = document.getElementById("seconds").value;
//declare variable "seconds" and return seconds.value in seconds.
  function tick() {
    seconds =seconds - 1;//put seconds -1 in seconds.
    timer.innerHTML = seconds; //search time and return value of seconds.
    var time = setTimeout(tick, 1000); // calls functioon "tick()"after 1second.
    if (seconds == -1) {//if seconds is -1, 
       alert("Time's up!"); //call alert
       clearTimeout(time); //clears a timeer set with the setTimeout() method. 
       timer.innerHTML ="";// search timer return "".
    }
  }
  tick(); //call function tick()
}

let slideIndex = 1; // declare variable slideIndex and put "1" in slideIndex.
showSlides(slideIndex);//call showSlides.

function plusSlides(n) {
  showSlides(slideIndex += n);
} //call function "showSlides()"with increasing slideIndex + n and .

function currentSlide(n) {
  showSlides(slideIndex = n);
}//call the function "showSlides" with slideIndex =n .

function showSlides(n) {
  let i ; //declare variable i
  let slides = document.getElementsByClassName("mySlides");//search the classname "myslides" and return a value in slides.
  let dots = document.getElementsByClassName("dot");//search the classname "dots"and return a value in dots
  if( n > slides.length) {slideIndex = 1} //if n is greater than total length of slide, set the slideIndex to 1. 
  if(n < 1) {slideIndex = slides.length} //if n is less than total number of slides, set value of slidesIndex to slides.length
  for(i = 0; i < slides.length; i++) { //before i is bigger than slides.length 
    slides[i].style.display = "none";//Hide each of the slides
  }
  for(i = 0; i < dots.length; i++) {//before i is bigger than dots.length 
    dots[i].className = dots[i].className.replace(" active", "");
  } //Replace each of the dots with the class "active" with ""
  slides[slideIndex-1].style.display = "block"; // Set the current slide to display as a block element
  dots[slideIndex-1].className +=" active"; //Set the current slide's dot to the "active" class
}