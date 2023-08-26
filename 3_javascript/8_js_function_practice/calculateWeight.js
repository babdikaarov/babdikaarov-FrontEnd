// Write your function here:

function calculateWeight(earthWeight, planet) {
    switch (planet) {
      case 'Mercury':
        return earthWeight * 0.378;
        break;
      case 'Venus':
        return earthWeight * 0.907;  
        break;
      case 'Mars':
        return earthWeight * 0.377; 
        break;
      case 'Jupiter':
        return earthWeight * 2.36;  
        break;
      case 'Saturn':
        return earthWeight * 0.916; 
        break;
      default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
        
    }
  }
    
   /* if (planet === 'Mercury') {
      return earthWeight * 0.378  
    } else if (planet === 'Venus') {
      return earthWeight * 0.907  
    } else if (planet === 'Mars') {
      return earthWeight * 0.377  
    } else if (planet === 'Jupiter') {
      return earthWeight * 2.36  
    } else if (planet === 'Saturn') {
      return earthWeight * 0.916 
    } else {
      return 'Invalid Planet Entry, Try: Mercury, Venus, Mars, Jupiter or Saturn.'
    }
    }*/
  
  
  
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(calculateWeight(100, 'Jupiter')) 
  // Should print 236
  