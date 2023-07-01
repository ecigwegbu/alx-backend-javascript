// Inheritance

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  // sqft: Number, floors: Number
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    // check floors
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    super(sqft);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    // must override
    return `Evacuate slowly the ${this._floors} floors`;
  }

  get floors() {
    return this._floors;
  }
}
