/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const after = list.next.next;
  const first = list;
  list = list.next;
  list.next = first;
  list.next.next = after;
  return list;
}
