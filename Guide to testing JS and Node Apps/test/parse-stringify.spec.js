const { parse, stringify } = require('../parse-stringify');
// const assert = require('assert');
describe('The stringify function', () => {
  it('should stringify an object into a valid query string', () => {
    const actual = stringify({ by: 'kati-frantz' });
    const expected = 'by=kati-frantz';
    // assert.equal(actual, expected);
    expect(actual).toBe(expected);
  });
});

describe('The parse function', () => {
  it('should parse a query string into an object', () => {
    const actual = parse('?by=kati-frantz');
    const expected = { by: 'kati-frantz' };
    // Deep equal is used to compare properties between 2 objects
    // assert.deepEqual(actual, expected);
    expect(actual).toEqual(expected);
  });
});
