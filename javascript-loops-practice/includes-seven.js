/* exported includesSeven */
function includesSeven(array) {
  var isSeven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isSeven = true;
    }
  }
  return isSeven;
}
