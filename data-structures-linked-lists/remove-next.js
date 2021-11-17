/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const afterNext = list.next.next;
  list.next = afterNext;
}
