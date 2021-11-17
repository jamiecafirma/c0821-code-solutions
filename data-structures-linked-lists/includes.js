/* exported includes */

function includes(list, value) {
  while (list.next !== null) {
    if (list.data !== value) {
      list = list.next;
    } else {
      return true;
    }
  }
  if (list.data === value) {
    return true;
  }
  return false;
}
