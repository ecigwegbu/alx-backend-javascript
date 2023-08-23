const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it("('SUM', 2.3, 3.7) => 6", function () {
    assert.equal(calculateNumber('SUM', 2.3, 3.7), 6);
  });
  it("('SUBTRACT', 2.6, 3.2) => 6", function () {
    assert.equal(calculateNumber(2.6, 3.2), 6);
  });
  it("('DIVIDE',-2.3, 3.7) => 2", function () {
    assert.equal(calculateNumber(-2.3, 3.7), 2);
  });
  it("('sum', 2.0, -0.7) => 'Error'", function () {
    assert.equal(calculateNumber(2.0, -0.7), 1);
  });
});
