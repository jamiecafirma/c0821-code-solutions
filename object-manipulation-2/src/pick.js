/* exported pick */

// create storage for output
// look at each element in the keys argument
// - look at each key in the source argument
//  - if current element in keys is equal to current key in source and if the key is defined in source
//    - add the key and its value to the output
// return output

function pick(source, keys) {
  var picked = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (keys[i] === prop && source[prop] !== undefined) {
        picked[prop] = source[prop];
      }
    }
  }
  return picked;
}
