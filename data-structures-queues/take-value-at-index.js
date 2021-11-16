/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let front = queue.dequeue();
  if (front === undefined) {
    return;
  }
  for (let i = 0; i < index; i++) {
    queue.enqueue(front);
    front = queue.dequeue();
  }
  return front;
}
