class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;
  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption,
    currentFuelVolume = 0,
    isStarted = false,
    mileage = 0
  ) {
    this.#brand = brand;
    this.#model = model;
    this.#yearOfManufacturing = yearOfManufacturing;
    this.#maxSpeed = maxSpeed;
    this.#maxFuelVolume = maxFuelVolume;
    this.#fuelConsumption = fuelConsumption;
    this.#currentFuelVolume = currentFuelVolume;
    this.#isStarted = isStarted;
    this.#mileage = mileage;
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw new Error('Имя бренда должно содержать буквы!');
    }
    if (value.length < 1) {
      throw new Error('Имя бренда слмшком короткое!');
    }
    if (value.length > 50) {
      throw new Error('Имя бренда слишком длинное!');
    }
    this.#brand = value;
  }

  get brand() {
    return this.#brand;
  }

  set model(value) {
    if (typeof value !== 'string') {
      throw new Error('Имя модели должно содержать буквы!');
    }
    if (value.length < 1) {
      throw new Error('Имя модели слмшком короткое!');
    }
    if (value.length > 50) {
      throw new Error('Имя модели слишком длинное!');
    }
    this.#model = value;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(value) {
    if (typeof value !== 'number') {
      throw new Error('Некорректный формат!');
    }
    if (value < 1900) {
      throw new Error('Машина слишком старая!');
    }
    if (value > 2022) {
      throw new Error('Машина не может быть из будущего!');
    }
    this.#yearOfManufacturing = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    if (typeof value !== 'number') {
      throw new Error('Некорректный формат!');
    }
    if (value < 100) {
      throw new Error('Машина слишком медленная!');
    }
    if (value > 300) {
      throw new Error('Машина слишком быстрая!');
    }
    this.#maxSpeed = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(value) {
    if (typeof value !== 'number') {
      throw new Error('Некорректный формат!');
    }
    if (value < 5) {
      throw new Error('Бак слишком маленький!');
    }
    if (value > 20) {
      throw new Error('Бак слишком большой!');
    }
    this.#maxFuelVolume = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(value) {
    if (typeof value !== 'number') {
      throw new Error('Некорректный формат!');
    }
    this.#fuelConsumption = value / 100;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена!');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(litersOfFuel) {
    if (typeof litersOfFuel !== 'number' || litersOfFuel <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }
    if (litersOfFuel + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
    this.#currentFuelVolume += litersOfFuel;
  }

  drive(speed, timeOfDriving) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Неверная скорость');
    }
    if (typeof timeOfDriving !== 'number' || timeOfDriving <= 0) {
      throw new Error('Неверное количество часов');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    let currentFuelCons = this.#fuelConsumption * speed * timeOfDriving;
    if (this.#currentFuelVolume - currentFuelCons < 0) {
      throw new Error('Недостаточно топлива');
    }
    this.#currentFuelVolume -= currentFuelCons;
    this.#mileage += speed * timeOfDriving;
  }
}

module.exports = { Car };
