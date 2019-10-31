var inputLenght = document.getElementById('lenght');
var inputWidth = document.getElementById('width');

var elementResult = document.getElementById('result');
var form = document.querySelector('.rectangle-form');

form.addEventListener('submit', function(evt) {
  var lenght = inputLenght.value || 0;
  var width = inputWidth.value || 0;
  var result = 0;

  result = lenght * width;

  elementResult.innerText = result;

  evt.preventDefault();
});

