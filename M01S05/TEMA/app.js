function surfaceCalculator(L, l, h) {
  var surface = 0;
  switch (arguments.length) {
    case 1:
      surface = Math.pow(L,2);
    break;

    case 2:
      surface = L * l;
    break;

    case 3:
      surface = L * l *h;
    break;
  }

  return surface;
}

console.log(surfaceCalculator(2));
console.log(surfaceCalculator(6, 7));
console.log(surfaceCalculator(2, 3, 4));

const calculateCircleArea = (r) => {
  return Math.PI * Math.pow(r, 2);
};

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

let pet = {
  getName: function () {
    return 'Viorica';
  },
  getSpecies: function () {
    return 'Primata';
  },
  getAge: function () {
    return 0;
  }
};

console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani`);