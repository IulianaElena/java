var person = {
  name: 'Boo',
  surname: 'Booooooo',
  age: 33,
  petOwner: true,
  skills: ['html', 'javascript', 'css', 'java', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30,
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31,
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }]
};

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.');

for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');

for (let i = 0; i < person.skills.length; i++) {
  if (!person.skills[i].startsWith('j')) {
    console.log(person.skills[i]);
  }
 
}

console.warn('Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.');
let sentence = 'Prietenii mei sunt ';

for (let i = 0; i < person.friends.length; i++) {
  sentence += `${person.friends[i].name} ${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    sentence += ', ';
  } else {
    sentence += '.';
  }
}
console.log(sentence);

console.warn(' Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.');
let totalAge = 0;
for (let i = 0; i < person.friends.length; i++) {
  if (person.friends[i].age >= 30){
    totalAge += person.friends[i].age;
  }
}
console.log(totalAge);

console.warn(' Folosind un for, afiseaza suma anilor de nastere a persoanelor. ');
let birthYearSum = 0;
for (let i = 0; i < person.friends.length; i++){
  let birthYear = 2019 - person.friends[i].age;
  birthYearSum += birthYear;

}
console.log(birthYearSum);

console.warn(' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.');
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference = person.age - person.friends[i].age;
  if(ageDifference > 2) {
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este ${ageDifference}`);
  }
}

console.warn(' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.');
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference = person.age - person.friends[i].age;
  if(person.friends[i].age % 2 !== 0){
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este ${ageDifference}`)
  }
}

console.warn(' Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.');
for (let i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}