// pricing

import Currency from './3-currency';

/* eslint no-underscore-dangle: 0 */
export default class Pricing {
  // code: String, name: String
  constructor(code, name) {
    // check code:
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // check name:
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a number');
    }

    this._code = code;
    this._name = name;
  }

  set code(c) {
    if (typeof c !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = c;
  }

  get code() {
    return this._code;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
