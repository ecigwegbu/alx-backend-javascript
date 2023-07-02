// ev car
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // override cloneCar
  cloneCar() {
    // clone here - class will be base class
    return Object.assign(new Car(), this);
  }
}
