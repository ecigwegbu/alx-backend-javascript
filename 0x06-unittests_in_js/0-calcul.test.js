const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('(2.3, 3.7) => 6', function () {
    assert.equal(calculateNumber(2.3, 3.7), 6);
  });
  it('(2.6, 3.2) => 6', function () {
    assert.equal(calculateNumber(2.6, 3.2), 6);
  });
  it('(-2.3, 3.7) => 2', function () {
    assert.equal(calculateNumber(-2.3, 3.7), 2);
  });
  it('(2.0, -0.7) => 1', function () {
    assert.equal(calculateNumber(2.0, -0.7), 1);
  });
});
