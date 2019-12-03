let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReversedSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  turnLightsOn: function() {
    this.turnLightsOn = true;
  },
  turnLightsOn: function() {
    this.turnLightsOn = false;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  flashLights: function () {
    this.turnLightsOff();
    this.turnLightsOn();
    setTimeout(() => {
      this.turnLightsOff();
    }, 800)
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  accelerate: function() {
    this.speed++;
  },
  decelerate: function() {
    this.speed--;
  },
  stop: function() {
    this.speed = 0;
  },
  setSpeed: function(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }  

    if (speed < this.topReversedSpeed) {
      this.speed = this.topReversedSpeed;
      return;
    }

    this.speed = speed;
  }
};



console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h`);

car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();

console.log(`Viteza noua este ${car.speed} km/h`);
