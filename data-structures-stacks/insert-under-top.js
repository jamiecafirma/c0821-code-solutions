/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const top = stack.pop();
  if (top === undefined) {
    return top;
  }
  stack.push(value);
  stack.push(top);
}
