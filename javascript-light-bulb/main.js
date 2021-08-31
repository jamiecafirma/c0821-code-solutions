// create storage for light bulb object
// create storage for the background object
// - if the light bulb is on
//  - turn the light bulb off and make the background dark to match
// - if it's off, turn the light bulb on and light up the background too

var $lightBulb = document.querySelector('.light-bulb');
var $container = document.querySelector('.container');

function toggleSwitch(event) {
  if ($lightBulb.className === 'light-bulb on-switch') {
    $container.className = 'container off-switch';
    $lightBulb.className = 'light-bulb off-switch';
  } else {
    $container.className = 'container on-switch';
    $lightBulb.className = 'light-bulb on-switch';
  }
}

$lightBulb.addEventListener('click', toggleSwitch);
