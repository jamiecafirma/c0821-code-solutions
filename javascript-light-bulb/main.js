// check if the light bulb is on
// - if the light bulb is on
//  - turn the light bulb off and make the background dark to match
//  - say that the light bulb is off now
// - if it's off, turn the light bulb on and light up the background too
//  - say that the light bulb is on now

var lightOn = true;
var $lightBulb = document.querySelector('.light-bulb');
var $container = document.querySelector('.container');

function toggleSwitch(event) {
  if (lightOn === true) {
    $container.className = 'container off-switch';
    $lightBulb.className = 'light-bulb off-switch';
    lightOn = false;
  } else {
    $container.className = 'container on-switch';
    $lightBulb.className = 'light-bulb on-switch';
    lightOn = true;
  }
}

$lightBulb.addEventListener('click', toggleSwitch);
