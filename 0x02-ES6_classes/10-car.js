// Vroom

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // clone car
  cloneCar() {
    return Object.assign(new this.constructor(), this);
  }
}
