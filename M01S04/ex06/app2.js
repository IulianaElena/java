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

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana ');

for(let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

console.warn('Skills');
for (let i = 0; i < person.skills.length; i++) {
  if (person.skills[i].startsWith('c')) {
    console.log(person.skills[i]);
  }
}

console.warn(' Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."');
let sentence = 'Prietenii mei sunt ';

for (let i = 0; i < person.friends.length; i++) {
  sentence += `${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    sentence += ', ';
  } else {
    sentence += '.';
  }
}
console.log(sentence);