let personForm = document.getElementById('personForm');
let addSkillButton = document.getElementById('addSkill');
let addSkillInput = document.getElementById('skillInput');
let petSwitch = document.getElementById('hasPets');
let petFieldset = document.getElementById('pet');

let petNameInput = document.getElementById('petName');
let addPetButton = document.getElementById('addPetButton');

let person;

class Person {
  skills = [];
  pets = [];

  constructor (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.container = document.getElementById('details');

  }

  render() {
    this.clear();

    this.namePara = document.createElement('p');
    this.surnamePara = document.createElement('p');
    this.agePara = document.createElement('p');
    this.skillsList = document.createElement('ul');
    this.petsList = document.createElement('ol');
  
    this.namePara.innerText = this.name;
    this.surnamePara.innerText = this.surname;
    this.agePara.innerText = this.age;

    this.skills.forEach((skill) => {
      let skillLi = document.createElement('li');
      skillLi.innerText = skill;

      this.skillsList.appendChild(skillLi);
    });

    this.pets.forEach((pet) => {
      let petsLi = document.createElement('li');
      petsLi.innerText = `Name: ${pet.name}, Breed: ${pet.breed}, Age: ${pet.age}`;
   
      this.petsList.appendChild(petsLi);
    });

    this.container.appendChild(this.namePara);
    this.container.appendChild(this.surnamePara);
    this.container.appendChild(this.agePara);
    this.container.appendChild(this.skillsList);
    this.container.appendChild(this.petsList);
  }

  clear() {
    this.container.innerHTML = '';
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  addPet(pet) {
    this.pets.push(pet);
  }
}

class Pet {
  constructor (petName, petBreed, petAge) {
    this.name = petName;
    this.breed = petBreed;
    this.age = petAge;
  }
}

personForm.addEventListener('submit', (evt) => {
  let inputArray = evt.target.querySelectorAll('input');

  person = new Person(inputArray[0].value, inputArray[1].value, inputArray[2].value);
  person.render();
  

  event.preventDefault();
});

addSkillButton.addEventListener('click', () => { 
  let skillName = addSkillInput.value;

  if (skillName.trim().length > 0) {
    person.addSkill(skillName);
    person.render();
  }
});

addPetButton.addEventListener('click', () => {
  let petName = petNameInput.value;

  if (petName.trim().length > 0) {
    let pet = new Pet(petName);
    person.addPet(pet);
    person.render();
  }
});

petSwitch.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    petFieldset.style.display = 'block';
  } else {
    petFieldset.style.display = 'none';
  }
});


