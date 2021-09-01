// if the correct key is pressed
// - turn the current character green
// - update the current character
// - underline the next character the user has to type
// if the wrong key is pressed
// - turn the current character and the underline red
// - user can only move on to the next key if the correct character is typed

var $characters = document.querySelectorAll('span');
var index = 0;
var currentKey = $characters[index];

function typingLesson(event) {
  if (event.key === $characters[index].textContent) {
    currentKey.className = 'correct';
    index++;
    currentKey = $characters[index];
    currentKey.className = 'current-character';
  } else {
    currentKey.className = 'wrong';
  }
}

document.addEventListener('keydown', typingLesson);
