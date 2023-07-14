// Write your function here:

const agreeOrDisagree = (one, two) => {
    if(one === two) {
      return 'You agree!';
    } else {
      return 'You disagree!';
  }
  }
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(agreeOrDisagree("yep", "yep")) 
  // Should print 'You agree!'
  
  // We encourage you to add more function call of your own to test your code!
  
  console.log(agreeOrDisagree("yep", "no")) 
  console.log(agreeOrDisagree("no", "no")) 
  console.log(agreeOrDisagree("no", "yep")) 