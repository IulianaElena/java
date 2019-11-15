var watcherElement = document.getElementById('watcher-count'),
  watchers = Math.floor(Math.random( ) * 10) + 1;

  watcherElement.innerText = watchers;

var timer = setInterval(function() {
  watchers = Math.floor(Math.random( ) * 10) + 1;
  watcherElement.innerText = watchers;

}, 5000);