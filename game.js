var name = prompt('What is your name?');
var greet = document.getElementById('greeting');
greet.textContent = 'Good day, ' + name + ' let\'s play!'

var question1 = function() {
  var where = prompt('Am I from Seattle').toLowerCase();
  var guess1 = document.getElementById('gOne');
  guess1.textContent = 'You answered ' + where;
  var answer = document.getElementById('aOne');

  if((where !== 'yes' && where !== 'no') && (where !== 'y' && where !== 'n')) {
    answer.textContent = "Please enter 'yes' or 'no'";
    question1();
  } else if(where === 'yes' || where === 'y') {
    answer.className = 'wrong';
    answer.textContent = "No I'm actually from Oklahoma";
  } else {
    answer.className = 'right';
    answer.textContent = "That's right do I you know you?";
  }
}
question1();

var question2 = function() {
  var car = prompt('Do I drive?').toLowerCase();
  var guess2 = document.getElementById('gTwo');
  guess2.textContent = 'You answered ' + car;
  var answer2 = document.getElementById('aTwo');

  if((car !== 'yes' && car !== 'no') && (car !== 'y' && car !== 'n')) {
    answer2.textContent = "Please enter 'yes' or 'no'";
    question2();
  } else if(car === 'yes' || car === 'y') {
    answer2.className = 'right';
    answer2.textContent = "I do drive, well done!";
  } else {
    answer2.className = 'wrong';
    answer2.textContent = "Actually I like to drive if I can get out of the city!";
  }
}
question2();

var question3 = function() {
  var house = prompt('Do I live in a house?').toLowerCase();
  var guess3 = document.getElementById('gThree');
  guess3.textContent = 'you answered ' + house;
  var answer3 = document.getElementById('aThree');

  if((house !== 'yes' && house !== 'no') && (house !== 'y' && house !== 'n')) {
    answer3.textContent = "Please enter 'yes' or 'no'";
    question3();
  } else if(house === 'yes' || house === 'y') {
    answer3.className = 'right';
    answer3.textContent = "Very good";
  } else {
    answer3.className = 'wrong';
    answer3.textContent = "I actually do, I share a house with several other people.";
  }
}
question3();

var question4 = function() {
  var motorcycle = prompt('Do I like motorcycles?').toLowerCase();
  var guess4 = document.getElementById('gFour');
  guess4.textContent = 'you answered ' + motorcycle;
  var answer4 = document.getElementById('aFour');

  if((motorcycle !== 'yes' && motorcycle !== 'no') && (motorcycle !== 'y' && motorcycle !== 'n')) {
    answer4.textContent = "Please enter 'yes' or 'no'";
    question4();
  } else if(motorcycle === 'yes' || motorcycle === 'y') {
    answer4.className = 'right';
    answer4.textContent = 'You got it!';
  } else {
    answer4.className = 'wrong';
    answer4.textContent = 'I really do love to ride motorcycles.';
  }
};
question4();

var question5 = function() {
  var num = 7;
  var user = parseInt(prompt("I'm thinking of a number between 1-10. Can you guess what it is?"));
  var answer5 = document.getElementById('aFive');
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
  answer5.textContent = "Nailed it! Well done. That only took " + guessTotal + " guesses.";
}
question5();

var question6 = function() {
var motorcyclesOwned = ['suzuki', 'honda', 'kawasaki', 'husqvarna', 'husaberg'];
var question = prompt('Can you guess a make of motorcycle that either own or previously owned?').toLowerCase();
var answer6 = document.getElementById('aSix');
var correct;

for(var i = 0; i < motorcyclesOwned.length; i++) {
  if(motorcyclesOwned[i] === question) {
    correct = true;
    break;
  }}
  if(correct) {
    answer6.textContent = 'Nicely done. I did own a ' + question + ' motorcycle.';
  } else {
    answer6.textContent = 'Nope, never owned a ' + question;
  };
}
question6();
