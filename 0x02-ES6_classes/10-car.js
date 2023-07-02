// Vroom

export default class Car {
  constructor(brand, motor, color) {
    // brand: String, motor: string, color: String
    // check brand
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    // check motor
    if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    // check motor
    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // clone car
  cloneCar() {
    // clone car code
    // return new Car(this._brand, this._motor, this._color);
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}
