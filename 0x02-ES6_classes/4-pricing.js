// pricing

import Currency from './3-currency';

/* eslint no-underscore-dangle: 0 */
export default class Pricing {
  // amount: Number, currency: Currency
  constructor(amount, currency) {
    // check amount:
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  set amount(a) {
    if (typeof a !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = a;
  }

  get amount() {
    return this._amount;
  }

  set currency(curr) {
    if (!(curr instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = curr;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    // amount currency_name (currency_code)
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    // amount x conversion
    return amount * conversionRate;
  }
}
