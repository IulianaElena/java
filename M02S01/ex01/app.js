class Car {
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;
  constructor(
    make, 
    color, 
    wheels, 
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels; 
    this.speed = speed;

  
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  setRelativeSpeed(deltaSpeed) {
    let intendedSpeed = this.speed += deltaSpeed;
    this.setSpeed(intendedSpeed);
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }
  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOff();
    this.turnLightsOn();
    window.setTimeout(() => {
      this.turnLightsOff();
    }, 8000)
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(this.speed);
  }  

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }
    
    this.speed = speed;
    //return speed;
  }
}

var audi = new Car('Audi', 'black', 4, 50);
let opel = new Car('Opel', 'red', 4, 110);
let cars = [audi, opel];

cars.forEach((car) => {
  console.log(`masina era marca ${car.make} si se deplasa cu viteza ${car.speed}.`);
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();

  console.log(`Viteza noua este ${car.speed}.`);

});

