import {kelvinFunction} from '../src/kelvinFunction'

//function functionality has to accept two arguments.
//first argument should be a number
//second argument hould be one of three letters 'c' 'f' 'n'
//should return converted from kelvin to one of thermomemtrs: (K => C .. (.. = number))

describe("testin kelvinFunction", ()=>{
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
      });
    
      afterEach(() => {
        console.log.mockRestore();
      });
    
      it('should convert Kelvin to Celsius', () => {
        const result = kelvinFunction(350, 'c');
        expect(result).toBeCloseTo(77);
      });
    
      it('should convert Kelvin to Fahrenheit', () => {
        const result = kelvinFunction(350, 'f');
        expect(result).toBeCloseTo(170);
      });
    
      it('should convert Kelvin to Newton', () => {
        const result = kelvinFunction(350, 'n');
        expect(result).toBeCloseTo(25);
      });
    
      it('should return an error message for invalid second argument', () => {
        const result = kelvinFunction(350, 'x');
        expect(result).toEqual("provide second argument 'c', 'f', 'n'");
      });
    
      it('should log Fahrenheit and Newton temperatures', () => {
        let fahrenheit = kelvinFunction(350, 'f');
        let newton = kelvinFunction(350, 'n');
    
        expect(console.log).toHaveBeenNthCalledWith(1, `The temperature is ${fahrenheit} degrees Fahrenheit.`);
        expect(console.log).toHaveBeenNthCalledWith(2, `The temperature is ${newton} Newton scale.`);
      });
})