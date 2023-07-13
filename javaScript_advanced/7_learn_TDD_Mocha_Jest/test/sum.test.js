import assert from 'node:assert/strict';
import Calculate from '../src/calculate';

describe('Calculate', () => {
  describe('.factorial', () => {
    test('test of output 5! is equal to 120', () => {
      //setup
      const expected = 120
      const output = 5
      // exercise
      const actual = Calculate.factorial(output)
      //verify
      expect(actual).toEqual(expected);

    });
    
    test('test of output 3! is equal to 6', () => {
      //setup
      const expected = 6
      const output = 3
      // exercise
      const actual = Calculate.factorial(output)
      //verify
      expect(actual).toEqual(expected);

    });

    test('test of output -3! is equal to -6', () => {
      //setup
      const expected = -6
      const output = -3
      // exercise
      const actual = Calculate.factorial(output)
      //verify
      expect(actual).toEqual(expected);

    });

    test('test of output 0! is equal to 0', () => {
      //setup
      const expected = 0
      const output = 0
      // exercise
      const actual = Calculate.factorial(output)
      //verify
      expect(actual).toEqual(expected);

    });
    
  });
});