// A Building
/* eslint-disable class-methods-use-this */

/* eslint no-underscore-dangle: 0 */
export default class Building {
  // sqft: Number
  constructor(sqft) {
    // Abstract class
    // eslint-disable-next-line no-prototype-builtins
    // if (this.constructor.toString() === 'class TestBuilding extends _building.default {}') {
    if (this instanceof Building && this.constructor !== Building) {
      // eslint-disable-next-line no-prototype-builtins
      if ((!this.hasOwnProperty('evacuationWarningMessage'))) {
        // must override method
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    // check sqft:
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    // must override
  }

  get sqft() {
    return this._sqft;
  }
}
