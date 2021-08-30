/* exported getValues */

// create storage for output
// look at each key in input
// - using the current key, access the value and add it to the output
// return output

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
