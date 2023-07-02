// Vroom

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // clone car
  cloneCar() {
    // clone car code
    // return new Car(this._brand, this._motor, this._color);
    // return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return Object.assign(new this.constructor(), this);
  }
}
