var $text = document.querySelector('h1');
var currentNumber = 4;
var intervalID = setInterval(countdown, 1000);

function countdown() {
  currentNumber--;
  if (currentNumber > 0) {
    $text.textContent = currentNumber;
  } else {
    $text.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
