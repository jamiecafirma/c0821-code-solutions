/* exported capitalizeWord */

// create storage for output
// if the input lowercased is equal to 'javascript'
// - return 'JavaScript'
// capitalize first character of input and add it to output
// look at the rest of the characters in the input
// - make the current character lowercase and add it to the output
// return the output

function capitalizeWord(word) {
  var capitalized = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  capitalized += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalized += word[i].toLowerCase();
  }
  return capitalized;
}
