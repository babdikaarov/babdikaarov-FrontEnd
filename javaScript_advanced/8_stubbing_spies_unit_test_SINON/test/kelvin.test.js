import kelvinFunction from '../src/kelvinFunction'

//function functionality has to accept two arguments.
//first argument should be a number
//second argument hould be one of three letters 'c' 'f' 'n'

describe("testin kelvinFunction", ()=>{
    
    
      test('should convert Kelvin to Celsius', () => {
        const result = kelvinFunction(350, 'c');
        const expected = 77;
        expect(result).toBeCloseTo(expected, 0);
      });
    
      test('should convert Kelvin to Fahrenheit', () => {
        const result = kelvinFunction(350, 'f');
        expect(result).toBeCloseTo(170, 0);
      });
    
      test('should convert Kelvin to Newton', () => {
        const result = kelvinFunction(350, 'n');
        expect(result).toBeCloseTo(25, 0);
      });
    
      test('should return an error message for invalid second argument', () => {
        const result = kelvinFunction(350, 'x');
        expect(result).toEqual("provide second argument 'c', 'f', 'n'");
      });
    
})