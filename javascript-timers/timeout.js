var $text = document.querySelector('h1');

function changeText() {
  $text.textContent = 'Hello There';
}

setTimeout(changeText, 2000);
