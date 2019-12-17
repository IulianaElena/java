
let stage = document.querySelector('.stage');
let message = document.querySelector('.message');
let countElement = document.querySelector('.count');
let count = 0;

stage.addEventListener('mouseover', () => {
  message.innerText = 'Bleaah';
  count = count + 1;
});

stage.addEventListener('mouseout', () => {
  message.innerText = 'pfffui';
  countElement.innerText = `Niliili de ${count} ori`;
});

