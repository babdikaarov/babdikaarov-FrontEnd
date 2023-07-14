// Write your function here:
function howOld(age, year) {
    const today = new Date();
    const currentYear = today.getFullYear();
    today.setYear(year)
    let yearDif = year - currentYear
    let newAge = yearDif + age
  
    if(year > currentYear) {
      return `You will be ${newAge} in the year ${year}`
    } else if (year < (currentYear - age)) {
      let beforeBorn = (currentYear - age) - year
      return `The year ${year} was ${beforeBorn} years before you were born`
    } else if (year < currentYear) {
      return `You were ${newAge} in the year ${year}`
    }
  }
  
  console.log(howOld(30, 1900))
  
  /*let today = new Date();
  let year = today.getFullYear();
  let age = 30;
  let yer = 2100;
  today.setYear(yer)
  let yearDif = yer - year
  let newAge = yearDif + age
  
  console.log(newAge)
  console.log(yearDif)
  console.log(year)
  console.log(today)
  */
  
  
