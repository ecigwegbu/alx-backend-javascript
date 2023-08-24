const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
let spy;

describe('sendPaymentRequestToApi', function () {
  // Before each test, create a new spy
  beforeEach(function() {
    // spy = sinon.spy(Utils, "calculateNumber");
    spy = sinon.spy(console, "log");
  });
  // After each test, restore the spy
  afterEach(function() {
    spy.restore();
  });
  it("was called once with exactly 'SUM', 100, 20", function () {
    const payment = sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
  it("was called once with exactly 'SUM', 10, 10", function () {
    const payment = sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    // expect(spy.returned(10)).to.be.true;
  });
});
