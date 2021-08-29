/* exported defaults */

// create storage for a test if a key of the source argument is not defined in the target argument and set as true
// look at each key of the source argument
// - look at each key of the target argument
//  - if current key of source is equal to current key of target and current key of target is not undefined
//    - set key test as false
// - if key test is true
//  - add current key of source to target
// otherwise, set key test to true

function defaults(target, source) {
  var keyIsNotInTarget = true;
  for (var key in source) {
    for (var prop in target) {
      if (key === prop && target[prop] !== undefined) {
        keyIsNotInTarget = false;
      }
    }
    if (keyIsNotInTarget === true) {
      target[key] = source[key];
    } else {
      keyIsNotInTarget = true;
    }
  }
}
