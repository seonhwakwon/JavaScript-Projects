function my_Dictionary_Dog() {
  var Animal_Dog = {
    species: "Dog",
    Color: "Black",
    Breed: "Labrador",
    Age: 5,
    Sound:"Bark!"
  }
  document.getElementById("Dictionary_Dog").innerHTML = Animal_Dog.Sound;
}//create my_Dictionary_Dog function and rethurn the Anaimal_dog.Sounds

function my_Dictionary_Cat() {
  var Animal_Cat = {
    species: "Cat",
    Color: "Brown",
    Breed: "Sphynx",
    Age: 3,
    Sound:"Meow!"
  }
  delete Animal_Cat.Sound;
  document.getElementById("Dictionary_Cat").innerHTML = Animal_Cat.Sound;
} //create my_Dictionary_Dog function and delete a KVP of the Animal.Sound return undefined