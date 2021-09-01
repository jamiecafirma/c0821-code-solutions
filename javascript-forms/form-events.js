function handleFocus(event) {
  console.log('"focus" event was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('"blur" event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('value of ' + event.target.name + ':', event.target.value);
}

var $username = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$username.addEventListener('focus', handleFocus);
$username.addEventListener('blur', handleBlur);
$username.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
