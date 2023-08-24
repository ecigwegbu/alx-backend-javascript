// test.js
const chai = require('chai');
const expect = chai.expect;
const asyncFunction = require('./async');

describe('Async Function', function() {

  it('should resolve after the given time', function(done) {

    // Call the asynchronous function
    asyncFunction(50).then((message) => {

      // Perform assertions
      expect(message).to.equal('Completed in 50 ms');

      // Indicate that the asynchronous test is done
      done();

    }).catch((err) => {
      // If there is an error, pass it to done
      done(err);
    });
  });
});
