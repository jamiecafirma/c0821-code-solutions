function map(array, transform) {
  const output = [];
  for (var i = 0; i < array.length; i++) {
    output.push(transform(array[i]));
  }
  return output;
}

const moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const timesThree = number => number * 3;
const tripled = map(moreNumbers, timesThree);
console.log('value of tripled:', tripled);

const moreLanguages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];
const lowerCase = language => language.toLowerCase();
const lowerCased = map(moreLanguages, lowerCase);
console.log('value of lowerCased:', lowerCased);
