const assert = require('assert'); 
const Rooster = require('../rooster');
// import {Rooster} from '../rooster.js';


describe ('Rooster', () => {
  describe ('.announceDawn', () => {
    it ('returns a rooster call', () => {
      //setup      
      const expected = 'moo!';
      // exercise
      const actual = Rooster.announceDawn();
      //verify
      assert.equal(actual, expected);
      //tearDown


    });
  });

  describe('.timeAtDawn', () => {
    it ('returns its argument as a string', () => {
      //setup
      const num = 20;
      const expected = '20'
      // exersice
      const actual = Rooster.timeAtDawn(num)
      // verify
      assert.strictEqual(actual, expected);
      
    });
    it ('throws an error if passed a number less than 0', () => {
      //setup
      const negNum = -5;
      const expected = RangeError;
      //exercise
      
      // verify
      assert.throws(() => {
        Rooster.timeAtDawn(negNum);
      }, 
      expected)
    });
    it ('throws an error if passed a number greater than 23', () => {
      //setup
      const num = 25;
      const expected = RangeError;
      //exercise
      
      // verify
      assert.throws(() => {
        Rooster.timeAtDawn(num);
      }, 
      expected)
    });
  });
});