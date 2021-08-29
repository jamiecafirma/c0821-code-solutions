/* exported omit */

// create storage for output
// create storage for test if a key isn't in the source, set as true
// look at each key in source argument
// - look at each element in keys argument
//  - if current element is equal to current key, set key test to false
// - if key test is true
//  - add current key to output
// - otherwise, set key test to true
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
