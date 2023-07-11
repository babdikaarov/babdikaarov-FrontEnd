class School {
    constructor(name, level, numberOfStudents, averageTestScores){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      this._averageTestScores = averageTestScores;
    }
  
    // Getters
    get name() {
      return this._name;
    }
    
    get level() {
      return this._level;
    }
    
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    
    get averageTestScores() {
      return this._averageTestScores;
    }
  
    // Setter
    set numberOfStudents(num) {
      if (typeof num === "number"){
        this._numberOfStudents = number;
      } else {
        return "Invalid input: numberOfStudents must be set to a Number.";
      }
    }
  
    // Method to display quick facts about the school
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level, with an average test score of ${this._averageTestScores}.`);
    }
  
    // Static method to pick a substitute teacher from an array
    static pickSubstituteTeacher(substituteTeachers){
      let random = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[random];
    }
  }
  
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    // Getter
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, numberOfStudents){
      super(name, 'middle', numberOfStudents);
    }
  }
  
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams; 
    }
  
    // Getter
    get sportsTeams() {
      console.log(this._sportsTeams);
    }
  }
  
  // Test instances and console.log statements
  
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts(); // Display quick facts about the primary school
  console.log(lorraineHansbury.averageTestScores); // Log the average test scores
  
  const substituteTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobili']);
  console.log(`Substitute teacher: ${substituteTeacher}`); // Log the randomly picked substitute teacher
  
  const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  alSmith.sportsTeams; // Log the sports teams of the high school
  