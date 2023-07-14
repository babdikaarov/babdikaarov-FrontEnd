const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 8;
    } else if (day === 'Wednesday') {
        return 8;
    } else if (day === 'Thursday') {
        return 8;
    } else if (day === 'Friday') {
        return 8;
    } else if (day === 'Saturday') {
        return 8;
    }
  }
  // console.log(getSleepHours('Friday'));
  
  const getActualSleepHours = () => 8 + 5 + 7 + 5 + 8 + 9 + 10;
  // console.log(getActualSleepHours());
  
  const getIdealSleepHours = (sleepHours) => {
    const idealHours = sleepHours * 7;
    return idealHours;
  };
  // console.log(getIdealSleepHours(8));
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
      if(actualSleepHours === idealSleepHours){
      console.log(`"Sleeping time vs needed: ${actualSleepHours} vs ${idealSleepHours}. You got perfect amount of sleep!!!"`)
    } else if(actualSleepHours > idealSleepHours) {
      console.log(`"Sleeping time vs needed: ${actualSleepHours} vs ${idealSleepHours}.You got more sleep than needed!!"`);
    } else {
      console.log(`"Sleeping time vs needed: ${actualSleepHours} vs ${idealSleepHours}.You should get some rest!"`);
    }
  };
  calculateSleepDebt()
  