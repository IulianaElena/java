(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let showButton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeButtons = document.querySelector('#removeButtons');

    const showAlert = () => {
      alert('Butonul a fost apasat');
    };

    const addMessage = () => {
      let p = document.createElement('p');
      
      if (eventBound) {
        p.innerText = 'Alerta va fi afisata';
      } else {
        p.innerText = 'Alerta nu va fi afisata';
      }

      document.body.appendChild(p);

    };

    removeButtons.addEventListener('click', () => {
      let confirmResult = confirm('Esti sigur ca stergi?');
      if (confirmResult === false) {
        return;
      }

      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
      } 

      showButton.remove();
      toggleEventButton.remove();
    });

  
    showButton.addEventListener('click', showAlert);
    let eventBound = true;
    
    toggleEventButton.addEventListener('click', (evt) => {
      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        evt.target.innerText = 'Porneste afisarea';

      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        evt.target.innerText = 'opreste afisarea';
      }

      addMessage();
    });


  });
})(); 