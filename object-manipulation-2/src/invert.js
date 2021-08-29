/* exported invert */

// create storage for output
// look at each key in source argument
// - add a value with the name of the current key with a key that has the name of its value to the output
// return output

function invert(source) {
  var inverted = {};
  for (var key in source) {
    inverted[source[key]] = key;
  }
  return inverted;
}
