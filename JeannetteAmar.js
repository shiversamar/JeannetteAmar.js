//Write a function named greaterNum that:
//*takes 2 arguments, both numbers.
//returns whichever number is the greater (higher) number.
//Test the function 2 times with different number pairs.

//Purpose: takes 2 arguments, both numbers.
//Signature:(integers,integers) --> interger (find whichever number of the 2 is greater.)
//Examples: greaterNum (25,50) --> 50


function greaterNum(int1, int2) {
if (int1 > int2){
  alert(int1 + " is the greater number");
} else {
  alert(int2 + " is the greater number");
  }
}


//Takes 1 arguments, a language code (e.g. "es" "de" "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//Test the function for each of the supported languages

//Purpose : Takes 1 agrument, a language code (e.g. "es", "de", "en")
//Signature:(three strings) --> appeared in the screen
//Examples:

function worldHello(language){
  if (language == "spanish"){
      alert("Hola");
  } if (language =="German"){
  alert("Hallo");
} if(language=="English"){
     alert("Hello")
  }else {
    alert("This is not un option!");
  }
}
//Javascript Hi/Lo Game
// Purpose: 1. Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// 2. If the user's guess is too high or too low, the computer notifies them of that
//3. Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
//Signature:

function random() {
  var random = Math.floor((Math.random() * 100) + 1);
  //alert(random);
  //=Math.floor is the formula weve copy in W3school
  var userGuess = prompt ("Pick a random number between 1 and 100");

  while(random != parseInt(userGuess)){
    if (random < parseInt(userGuess)) {
      alert("Your guess is too high!");
      userGuess = prompt ("Pick a random number between 1 and 100");
    }
    if (random > parseInt(userGuess)) {
      alert("Your guess is too low!");
      userGuess = prompt ("Pick a random number between 1 and 100");
    }
  }
  if (random === parseInt(userGuess)) {
    alert("You guessed it!");
  }
}




function random (){
  var random = Math.floor((Math.random() * 100) + 1);
  var userGuess = prompt ("Pick a random number between 1 and 100");

do (random > userGuess); {
    alert("Your guess is too high!");
}
while (random < userGuess){
    alert("Your guess is too low!");
}
}
