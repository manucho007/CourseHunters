const { findUserByEmail, findUserById } = require('../users');
// const assert = require('assert');
describe('The findUserByEmail function', () => {
  // done is a callback function that notifies the test is done running
  // This way we can test async functions
  it('finds a user by email', (done) => {
    findUserByEmail('bahdcoder@gmail.com').then((response) => {
      // assert.equal(response.message, 'User found successfully.');
      expect(response.message).toEqual('User found successfully.');
      //   Waits for use to call the done function to tell we finished the test
      done();
    });
  });

  //   This way we return a promise and the test runner waits till the response is resolved before finishing the test
  it('finds a user by email (Using the return promise method)', () => {
    return findUserByEmail('bahdcoder@gmail.com').then((response) => {
      // assert.equal(response.message, 'User found successfully.');
      expect(response.message).toBe('User found successfully.');
    });
  });

  it('finds a user by email (Using async/await)', async () => {
    const response = await findUserByEmail('bahdcoder@gmail.com');
    // assert.equal(response.message, 'User found successfully.');
    expect(response.message).toBe('User found successfully.');
  });

  //   Testing for rejected promises
  it('rejects with error if user with email was not found.', () => {
    // return findUserByEmail('x@y.com').then(
    //   () => {
    //     assert.fail('Expected findUserByEmail function to reject.');
    //   },
    //   (error) => {
    //     assert.equal(error.message, 'User with email: x@y.com was not found.');
    //   }
    // );
    const actual = findUserByEmail('x@y.com');
    expect(actual).rejects.toEqual(
      new Error('User with email: x@y.com was not found.')
    );
  });
});

describe('The findUserById function', () => {
  it('should find a user by id', async () => {
    const response = await findUserById(1);
    // assert.equal(response.message, 'User found successfully.');
    expect(response.message).toBe('User found successfully.');
  });
  it('should reject if user is not found by id', () => {
    // return findUserById(90).then(
    //   () => {
    //     assert.fail('Expected findUserById function to reject.');
    //   },
    //   (error) => {
    //     assert.equal(error.message, 'User with id: 90 was not found.');
    //   }
    // );
    const actual = findUserById(90);
    expect(actual).rejects.toEqual(
      new Error('User with id: 90 was not found.')
    );
  });
});
