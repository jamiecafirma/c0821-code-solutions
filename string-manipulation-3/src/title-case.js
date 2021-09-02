/* exported titleCase */

// create storage for the output
// create storage for the current word
// create an exceptions list
// create a function to capitalize words
// - create storage for the output
// - make the first character uppercase and add it to the output
// - look at each character after the first
//  - if the last character in the output is a hyphen
//   - make the current character uppercase and add it to the output
//  - otherwise, add the current character in lowercase to the output
// - return the output
// look at each character in the title
// - if the current character is a space
//  - if the current word lowercase matches javascript
//    - add JavaScript to the output
//    - clear the current word
//  - if the current word lowercase matches api
//    - add API to the output
//    - clear the current word
//  - if the last character in the output is a colon
//   - capitalize the current word, add a space, then the word to the output, then another space
//   - clear the current word
//  - if the current word is more than four characters long
//   - capitalize the current word, then add the word and a space to the output
//   - clear the current word
//  - if the current word lowercase matches any word in the exceptions list
//   - add the word, in lowercase, to the output, then a space
//   - clear the current word
// - otherwise, add the current character to the current word
// add the current word to the output
// return the output

function titleCase(title) {
  var apaTitle = '';
  var currentWord = '';
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  function capitalize(word) {
    var capitalizedWord = '';
    capitalizedWord += word[0].toUpperCase();
    for (var i = 1; i < title.length; i++) {
      capitalizedWord += word[i].toLowerCase();
    }
    return capitalizedWord;
  }
}
