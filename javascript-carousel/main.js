var data = {
  currentImageIndex: 0,
  currentTimer: setInterval(carousel, 3000)
};
var $views = document.querySelectorAll('.view');
var dataViewValues = getDataViewValues($views);
var $dotsContainer = document.querySelector('.dots-container');
var $dots = document.querySelectorAll('.fa-circle');
var $nextButton = document.querySelector('#next-button');
var $previousButton = document.querySelector('#previous-button');

function getDataViewValues(views) {
  var output = [];
  for (var i = 0; i < views.length; i++) {
    output.push(views[i].getAttribute('data-view'));
  }
  return output;
}

function changeView(targetView) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === targetView) {
      $views[i].className = 'view';
      $dots[i].className = 'fas fa-circle';
    } else {
      $views[i].className = 'view hidden';
      $dots[i].className = 'far fa-circle';
    }
  }
}

function carousel() {
  if (data.currentImageIndex === $views.length) {
    data.currentImageIndex = 0;
  }
  changeView(dataViewValues[data.currentImageIndex]);
  data.currentImageIndex++;
}

function nextImage() {
  clearInterval(data.currentTimer);
  if (data.currentImageIndex === $views.length - 1) {
    data.currentImageIndex = 0;
  } else {
    data.currentImageIndex++;
  }
  changeView(dataViewValues[data.currentImageIndex]);
  data.currentTimer = setInterval(carousel, 3000);
}

$nextButton.addEventListener('click', nextImage);

function previousImage() {
  clearInterval(data.currentTimer);
  if (data.currentImageIndex === 0) {
    data.currentImageIndex = $views.length - 1;
  } else {
    data.currentImageIndex--;
  }
  changeView(dataViewValues[data.currentImageIndex]);
  data.currentTimer = setInterval(carousel, 3000);
}

$previousButton.addEventListener('click', previousImage);

function dotClicked() {
  if (event.target.tagName !== 'I') {
    return;
  }
  clearInterval(data.currentTimer);
  var $targetView = event.target.getAttribute('data-view');
  changeView($targetView);
  data.currentImageIndex = parseInt(event.target.getAttribute('data-index'));
  data.currentTimer = setInterval(carousel, 3000);
}

$dotsContainer.addEventListener('click', dotClicked);
