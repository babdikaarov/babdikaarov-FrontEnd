// const app = require('./app');
const fs = require('fs');

// first code block for testing

describe('+', () => {
    test('returns the sum of its arguments', () => {
        //unlike mocha jest apparently has its own  method expect().toBe() and others
        expect( 3 + 4 ).toBe(7)
    })
});

// not good practice 

describe('.pop', () => {
    test('returns the last element in the array [naive]', () => {
        expect(['padawan', 'knight'].pop()).toBe('knight')
    })
});

// 3 phase approach
describe('.pop2', () => {
    test('returns the last element in the array [3phase]', () => {
        // Setup
        const knightString = 'knight';
        const jediPath = ['padawan', knightString];

        // Exercise
        const popped = jediPath.pop();
    
        // Verify 
    
        expect(popped).toBe(knightString)
    })

})

let path, str;
 
describe('appendFileSync', () => {
    // Write hooks above the tests
    beforeEach(() => {
      path = './message.txt'
    })
    afterEach(() => {
      fs.unlinkSync(path);
    })
  
   test('writes a string to text file at given path name', () => {
   
     // Setup
     
     str = 'Hello Node.js';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);

     expect(contents.toString()).toEqual(str);//or useStrictEqual()
   
     // Teardown: restore file
    //  fs.unlinkSync(path);
   
   });
   
   test('writes an empty string to text file at given path name', () => {
   
     // Setup
     
     str = '';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);
     expect(contents.toString()).toStrictEqual(str);
   
     // Teardown: restore file
     // fs.unlinkSync(path);
   
   })
  });