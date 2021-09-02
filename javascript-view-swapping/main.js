var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function showTab(event) {
  if (event.target.matches('.tab') === false) {
    return;
  }
  for (var i = 0; i < $tabs.length; i++) {
    if ($tabs[i] === event.target) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }
  var $dataView = event.target.getAttribute('data-view');

  for (var v = 0; v < $views.length; v++) {
    if ($views[v].getAttribute('data-view') === $dataView) {
      $views[v].className = 'view';
    } else {
      $views[v].className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', showTab);
