/* exported countValues */

function countValues(stack) {
  let current = stack.pop();
  let count = 0;
  while (current !== undefined) {
    count++;
    current = stack.pop();
  }
  return count;
}
