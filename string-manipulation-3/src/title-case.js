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
// capitalize the first character of the title and add it to the output
// look at each character
// - if the current character is a space
//  - if the current word lowercase matches javascript
//    - add JavaScript to the output and current character
//    - clear the current word
//  - if the current word lowercase matches api
//    - add API to the output and current character
//    - clear the current word
//  - if the second to last character in the output is a colon
//   - capitalize the current word, add the word to the output, then current character
//   - clear the current word
//  - if the current word is four characters or more
//   - capitalize the current word, then add the word and current character to the output
//   - clear the current word
//  - if the current word lowercase matches any word in the exceptions list
//   - add the word, in lowercase, to the output, then current character
//   - clear the current word
// - otherwise, add the current character to the current word
// return the output

function titleCase(title) {
  var apaTitle = '';
  var currentWord = '';
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  function capitalize(word) {
    var capitalizedWord = '';

    capitalizedWord += word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      if (capitalizedWord[capitalizedWord.length - 1] === '-') {
        capitalizedWord += word[i].toUpperCase();
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
    }
    return capitalizedWord;
  }

  for (var char = 0; char < title.length; char++) {
    if (title[char] === ' ') {
      if (currentWord.toLowerCase() === 'javascript') {
        apaTitle += 'JavaScript' + title[char];
        currentWord = '';
      } else if (currentWord.toLowerCase() === 'api') {
        apaTitle += 'API' + title[char];
        currentWord = '';
      } else if (currentWord.toLowerCase() === 'javascript:') {
        apaTitle += 'JavaScript:' + title[char];
        currentWord = '';
      } else if (currentWord.toLowerCase() === 'api:') {
        apaTitle += 'API:' + title[char];
        currentWord = '';
      } else if (apaTitle === '') {
        apaTitle += capitalize(currentWord) + title[char];
        currentWord = '';
      } else if (apaTitle[apaTitle.length - 2] === ':') {
        apaTitle += capitalize(currentWord) + title[char];
        currentWord = '';
      } else if (currentWord.length >= 4) {
        apaTitle += capitalize(currentWord) + title[char];
        currentWord = '';
      } else if (currentWord.length < 4) {
        for (var e = 0; e < exceptions.length; e++) {
          if (currentWord.toLowerCase() === exceptions[e]) {
            apaTitle += currentWord.toLowerCase() + title[char];
            currentWord = '';
          }
        }
        if (currentWord !== '') {
          apaTitle += capitalize(currentWord) + title[char];
          currentWord = '';
        }
      }
    } else {
      currentWord += title[char];
    }
  }
  if (currentWord.toLowerCase() === 'javascript') {
    apaTitle += 'JavaScript';
  } else if (currentWord.toLowerCase() === 'api') {
    apaTitle += 'API';
  } else {
    apaTitle += capitalize(currentWord);
  }
  return apaTitle;
}
