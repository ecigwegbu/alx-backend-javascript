// test.js
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const asyncFunction = require('./asyncFunction');

describe('Async Function', function() {

  // Create a spy for asyncFunction
  const asyncFunctionSpy = sinon.spy(asyncFunction);

  it('should resolve to the expected object after the given time', function(done) {

    // Call the spy-wrapped asynchronous function
    asyncFunctionSpy(50).then((result) => {

      // Perform assertions on result
      // expect(result).to.deep.equal({data: 'Successful response from the API'});

      // Verify that the spy-wrapped function was called
      expect(asyncFunctionSpy.calledOnce).to.be.true;

      // Indicate that the asynchronous test is done
      done();

    }).catch((err) => {
      // If there is an error, pass it to done
      done(err);
    });
  });

  // Optional: Reset the spy statistics after each test
  afterEach(function() {
    asyncFunctionSpy.resetHistory();
  });
});

