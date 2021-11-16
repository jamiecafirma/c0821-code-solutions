/* exported take2nd */

function take2nd(queue) {
  const front = queue.dequeue();
  const second = queue.dequeue();
  if (front === undefined) {
    return;
  } else if (second === undefined) {
    return front;
  }
  queue.enqueue(front);
  return second;
}
