var where = prompt('Am I from Seattle').toLowerCase();
if((where !== 'yes' && where !== 'no') && (where !== 'y' && where !== 'n')) {
  alert("Please enter 'yes' or 'no'");
} else if(where === 'yes' || where === 'y') {
  alert("No I'm actually from Oklahoma");
} else {
  alert("That's right do I you know you?");
};

var car = prompt('Do you drive?').toLowerCase();
if((where !== 'yes' && where !== 'no') && (where !== 'y' && where !== 'n')) {
  alert("Please enter 'yes' or 'no'");
} else if(where === 'yes' || where === 'y') {
  alert("I do drive, well done!");
} else {
  alert("Actually I like to drive if I can get out of the city!");
};

var house = prompt('Do you live in a house?').toLowerCase();
if((where !== 'yes' && where !== 'no') && (where !== 'y' && where !== 'n')) {
  alert("Please enter 'yes' or 'no'");
} else if(where === 'yes' || where === 'y') {
  alert("Very good");
} else {
  alert("I actually do, I share a house with several other people.");
};

var motorcycle = prompt('Do I like motorcycles?').toLowerCase();
if((motorcycle !== 'yes' && motorcycle !== 'no') && (motorcycle !== 'y' && motorcycle !== 'n')) {
  alert("Please enter 'yes' or 'no'");
} else if(motorcycle === 'yes' || motorcycle === 'y') {
  alert('You got it!');
} else {
  alert('I really do love to ride motorcycles.');
}

var num = 7;
var user = parseInt(prompt("I'm thinking of a number between 1-10. Can you guess what it is?"));
var guessTotal = 1;

while(user !== num){
  if(isNaN(user)){
    guessTotal ++;
    user = parseInt(prompt("C'mon man, just enter a number."))
  } else {
    if(user > num){
      if((user - num) <= 2) {
        user = parseInt(prompt("Close."));
      }
      else if((user - num) > 2){
        user = parseInt(prompt("Nope."));
      }
      guessTotal ++;
    } else {
      if((num - user) <= 2){
        user = parseInt(prompt("Close."));
      }
      else if ((num - user) > 2){
        user = parseInt(prompt("Nope."));
      }
      guessTotal ++;
    }
  }
}
alert("Nailed it! Well done. That only took " + guessTotal + " guesses.")

var motorcyclesOwned = ['suzuki', 'honda', 'kawasaki', 'husqvarna', 'husaberg'];
var question = prompt('Can you guess a make of motorcycle that either own or previously owned?').toLowerCase();
var correct;

for(var i = 0; i < motorcyclesOwned.length; i++) {
  if(motorcyclesOwned[i] === question) {
    correct = true;
    break;
  }}
  if(correct) {
    alert('Nicely done. I did own a ' + question + ' motorcycle.');
  } else {
    alert('Nope, never owned a ' + question);
  };
