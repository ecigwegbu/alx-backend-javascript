// Primitive-Holberton Class

export default class HolbertonClass {
  // size: Number, location: String
  constructor(size, location) {
    // check size
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    // check location
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Overload Number and String methods:
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
