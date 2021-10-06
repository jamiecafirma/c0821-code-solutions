let currentCount = 3;

const intervalId = setInterval(function () {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000);
