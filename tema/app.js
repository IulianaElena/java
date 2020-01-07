let formular = document.getElementById('formular');
let addPersonButton = document.getElementById('addPerson');
let personArray = new Array();
let person;
let list =  document.getElementById('list');
let winner = document.getElementById('winner');

class Person {
  constructor(firstname, surname) {
    this.firstname = firstname;
    this.surname = surname;
  }
}

function render (person) {
  var nameSurname = document.createElement('li');
  nameSurname.innerText = `${person.firstname} ${person.surname}`;

  nameSurname.appendChild(removeButton);
  list.appendChild(nameSurname);
}

addPersonButton.addEventListener('click', () => {
    let addName = document.getElementById('firstname');
    let addSurname = document.getElementById('surname');

    var removeButton = document.createElement('button');
    removeButton.innerText = '-';
    removeButton.addEventListener("click", () => {
      list.removeChild(nameSurname);
    });
  
});
