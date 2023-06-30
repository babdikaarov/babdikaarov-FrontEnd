// Write your function here:
function reportingForDuty(rank, lastName) {
    if(typeof rank !== 'string' || typeof lastName !== 'string'){
      return "Input value should be a string!"
    }
    return `${rank} ${lastName} reporting for duty!`
  }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
  
  // We encourage you to add more function calls of your own to test your code!
  
  console.log(reportingForDuty('Mayor', 'Bull'))
  console.log(reportingForDuty(5, 5))
  console.log(reportingForDuty(true, 'Gun'))
  console.log(reportingForDuty('Busboy', false))
  
  