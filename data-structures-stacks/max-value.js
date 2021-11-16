/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  let current = stack.pop();
  while (current !== undefined) {
    if (current > max) {
      max = current;
    }
    current = stack.pop();
  }
  return max;
}
