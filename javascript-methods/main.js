var num1 = 4;
var num2 = 7;
var num3 = 1;
var maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Spider-Man', 'Wonder Woman', 'Batman', 'Iron Man'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell'
  },
  {
    title: 'Julius Caesar',
    author: 'William Shakespeare'
  }
];
var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Jamie Cafirma';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
