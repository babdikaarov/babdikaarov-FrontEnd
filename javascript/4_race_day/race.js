let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = Math.floor(Math.random() * 25)

if (runnerAge >= 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`earle adults run at 9:30am #${raceNumber}`);
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`Late adults run at 11:00 am ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`“Youth registrants run at 12:30 pm (regardless of registration) ${raceNumber}”`);
} else {
  console.log("fix your code");
}