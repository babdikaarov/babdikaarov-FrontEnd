const Rooster = require('./rooster');
// import {Rooster} from "../rooster";
// const assert = require('assert'); 




describe ('Rooster', () => {
    describe ('.announceDawn', () => {
      test('returns a rooster call', () => {
        const expected = 'moo!';
        const actual = Rooster.announceDawn();
        expect(actual).toEqual(expected);
        
      });
    });
  
    describe('.timeAtDawn', () => {
      test('returns its argument as a string', () => {
        const num = 20;
        const expected = '20';
        const actual = Rooster.timeAtDawn(num);
        expect(actual).toEqual(expected);
        
      });


      test('throws an error if passed a number less than 0', () => {
        const negNum = -5;
        const expected = RangeError;
        // need to use anonymous arrow funcion to test a throw error.
        expect(()=>Rooster.timeAtDawn(negNum)).toThrow(expected);
      });
      test('throws an error if passed a number greater than 23', () => {
        const num = 25;
        const expected = RangeError;
        
        expect(()=>Rooster.timeAtDawn(num)).toThrow(expected);
      });
    });
  });
