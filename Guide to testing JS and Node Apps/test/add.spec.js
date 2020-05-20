const add = require('../add');
// In Jest we don't use assert
// const assert = require('assert');

describe('The add function', () => {
  it('adds two numbers', () => {
    const actual = add(1, 3);
    const expected = 4;
    expect(actual).toBe(expected);
    // assert.equal(actual, expected);
  });
});
