/* exported getKeys */

// create storage for the output
// look at each key in the input
// - add current key to the output
// return output

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
