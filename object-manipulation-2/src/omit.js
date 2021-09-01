/* exported omit */

// create storage for output
// create storage for a test to see if a property isn't in the source, set as true
// look at each property in the source object
// - look at each item in the keys list
//  - if current property of the keys list is also found in the source, the property test is false now
// - if the property test is true
//  - add current property to output
// - otherwise, set the value key test from false to true
// return output

function omit(source, keys) {
  var omitted = {};
  var keyIsNotThere = true;
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === prop) {
        keyIsNotThere = false;
      }
    }
    if (keyIsNotThere === true) {
      omitted[prop] = source[prop];
    } else {
      keyIsNotThere = true;
    }
  }
  return omitted;
}
