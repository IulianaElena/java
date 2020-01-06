const showMessage = (message, targetElement) => {
  let paragraph = document.getElementById(targetElement);

  if (paragraph) {
    paragraph.innerText = message;
  } else {
    let p = document.createElement('p');
    p.innerText = message;
    p.id = targetElement;
    document.body.appendChild(p);
  }
};

let originalW = window.innerWidth;

window.addEventListener('resize', module.exports((evt) => {
  console.log('Fereastra si-a schimbat dimensiunea');
  showMessage(`Fereastra are ${evt.target.innerWidth} pixeli.`, 'toaster');

  if (evt.target.innerWidth !== originalW) {
    showMessage('Fereastra si-a schimbat latimea', 'salam');
  } else {
    showMessage('Fereastra NU si-a schimbat latimea', 'salam');
  }

  showMessage(`Fereastra are  ${evt.target.innerHeight} pixeli`, 'toaster');
  if (evt.target.innerHeight !== originalH) {
    showMessage('Fereastra are acum', 'toaster');
  } else {
    showMessage('Fereastra nu si-a schimbat latimea', 'salam');
  }
}, 400));

