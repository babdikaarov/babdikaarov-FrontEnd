const assert = require('assert');
const fs = require('fs');


describe('check boolean value in asser.ok', () => {
    it('returns smth', () => {
        assert.ok(false)
    })
})

// first code block for testing

describe('+', () => {
    it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3 + 4 === 7);
    });
});

// not good practice 

describe('.pop', () => {
    it('returns the last element in the array [naive]', () => {
      assert.ok(['padawan', 'knight'].pop() === 'knight'); 
    });
  });
  
  // 3 phase approach
  describe('.pop', () => {
    it('returns the last element in the array [3phase]', () => {
      // Setup
      const knightString = 'knight';
      const jediPath = ['padawan', knightString];
  
      // Exercise
      const popped = jediPath.pop();
  
      // Verify
      assert.ok(popped === knightString);
    });
  });
  
let path, str;
 
  describe('appendFileSync', () => {
    // Write hooks above the tests
    before(() => {
      path = './message.txt'
    })
    afterEach(() => {
      fs.unlinkSync(path);
    })
  
    it('writes a string to text file at given path name', () => {
   
     // Setup
     
     str = 'Hello Node.js';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);
     assert.equal(contents.toString(), str);
   
     // Teardown: restore file
    //  fs.unlinkSync(path);
   
   });
   
   it('writes an empty string to text file at given path name', () => {
   
     // Setup
     
     str = '';
    
     // Exercise: write to file
     fs.appendFileSync(path, str);
   
     // Verify: compare file contents to string
     const contents = fs.readFileSync(path);
     assert.equal(contents.toString(), str);
   
     // Teardown: restore file
    //  fs.unlinkSync(path);
    
   });
  });