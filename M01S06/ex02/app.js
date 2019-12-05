let paragraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti';

if (userAgentString.includes('Chrome')) {
  message = 'Navighezi folosind Chrome';
}

if (userAgentString.includes('Edge')) {
  message = 'Navighezi folosind Edge';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);