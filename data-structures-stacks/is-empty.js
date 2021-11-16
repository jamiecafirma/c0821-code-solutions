/* exported isEmpty */

function isEmpty(stack) {
  const checkStack = stack.peek();
  if (checkStack === undefined) {
    return true;
  }
  return false;
}
