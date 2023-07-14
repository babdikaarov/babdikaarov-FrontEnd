// Write your code here:
function shoutGreetings(arr) {
    let newArr = [];
    for (const element of arr){
      newArr.push(element.toUpperCase() + '!');
    }
    return newArr;
  }
  
  
  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

  
  // console.log(greetings.map(word => word.toUpperCase() + '!'))
  
  
  