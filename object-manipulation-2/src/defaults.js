/* exported defaults */

// create storage for a test that checks if a property of the source object has a value in the target and set as true
// look at each key of the source argument
// - if the current property of source does not have a value on target
//   - set key test as false
// - if key test is true
//  - add current key of source to target
// otherwise, set key test to true

function defaults(target, source) {
  var keyIsNotInTarget = true;
  for (var key in source) {
    if (target[key] !== undefined) {
      keyIsNotInTarget = false;
    }
    if (keyIsNotInTarget === true) {
      target[key] = source[key];
    } else {
      keyIsNotInTarget = true;
    }
  }
}
