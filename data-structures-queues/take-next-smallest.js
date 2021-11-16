/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let front = queue.dequeue();
  let second = queue.peek();
  if (second === undefined) {
    return front;
  }
  while (front > second) {
    const greaterThan = front;
    queue.enqueue(greaterThan);
    front = queue.dequeue();
    second = queue.peek();
  }
  return front;
}
