// if the modal is not switched on
// - turn the modal on
// - say that the modal is on
// if the modal is already on
// - turn off the modal
// - say that the modal is off

var toggleOn = false;
var $openButton = document.querySelector('.open');
var $closeButton = document.querySelector('.close');
var $modal = document.querySelector('.non-static');

function toggleModal(event) {
  if (toggleOn === false) {
    $modal.className = 'non-static';
    toggleOn = true;
  } else {
    $modal.className = 'non-static toggle-switch';
    toggleOn = false;
  }
}

$openButton.addEventListener('click', toggleModal);
$closeButton.addEventListener('click', toggleModal);
