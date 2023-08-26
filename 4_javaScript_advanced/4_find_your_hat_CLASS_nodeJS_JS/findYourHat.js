const prompt = require('prompt-sync')({sigint: true});

class Field {

    // private properties for creating maze
    #hat = '^';
    #hole = 'O';
    #fieldCharacter = '░';
    #pathCharacter = '*';

    // property to store created maze
    #myField;

    //maze scale
    scale;

    //controllers to access and if needed setup them
    up = 'w';
    right = 'd';
    down = 's';
    left = 'a';
    exit = false;
    
    //coursor location;
    coursorX;
    coursorY;

    //score tracking;
    gamesPlayed = 0;
    won = 0;
    lost = 0;


  
    constructor(myField) {
      this.#myField = myField;
     
    }


    randomIndex(val) { return Math.floor(Math.random() * val)};

    assignHolesRandomly(arr, level) {
        for (let i = 0; i < level; i++) {
          arr[this.randomIndex(arr.length - 1)] = this.#hole;
        }
        return arr;
      };


// method to validate maze solvability using recursive backtracking return boolean value;
      
    validateMaze(arr, x, y) {
        const arrayCopy = arr.map((row) => row.slice()); // Create a copy of the original array
        const rows = arrayCopy.length;
        const cols = arrayCopy[0].length;
  
        // Base cases for out-of-bounds cells
        if (x < 0 || x >= rows || y < 0 || y >= cols) {
          return false;
        }
  
        // Base case for reaching the hat
        if (arrayCopy[x][y] === this.#hat) {
          return true;
        }
  
        // Base case for obstacle holes or already visited cells
        if (arrayCopy[x][y] !== this.#fieldCharacter) {
          return false;
        }
  
        // Mark the current cell as visited
        arrayCopy[x][y] = this.#pathCharacter;
  
        // Recursively explore adjacent cells in all four directions
        const directions = [
          [0, 1],   // Right
          [1, 0],   // Down
          [0, -1],  // Left
          [-1, 0]   // Up
        ];
  
        for (const [dx, dy] of directions) {
          const newX = x + dx;
          const newY = y + dy;
  
          // Check if the new position is within bounds and not a wall or hole
          if (this.validateMaze(arrayCopy, newX, newY)) {
            return true;
          }
        }
  
        // If no valid path found, backtrack and mark the current cell as a path
        arrayCopy[x][y] = this.#pathCharacter;
  
        return false;
      };
  
    choosingMazeScale() {
        let regex = /^(10|[1-9])$/;

        console.log(`current scale ${this.scale}` )
        this.scale = prompt("Please choose range between 1 - 10 >> ");

        console.log(`scale adjusted to ${this.scale}` )
        if (!regex.test(this.scale)){
            this.scale = prompt("The scale level accepts a number, suggested range 1 - 10 >> ");

            console.log(`scale adjusted to ${this.scale}` )
        }
    }
      
    generateField () {
        if(typeof this.#myField !== 'undefined'){
            this.gamesPlayed++
        }
        if (!this.scale){
            this.scale = 2
        }
        
        let rows = this.scale * 3;
        console.log("generating scale " + this.scale)
    
  
      // Populate the field
      const populateField = () => {
        let field = [];
        for (let i = 0; i < rows; i++) {
          let row = [];
          for (let j = 0; j < rows; j++) {
            row.push(this.#fieldCharacter);
          }
          // Helper function invocation.
          this.assignHolesRandomly(row, this.scale);
          field.push(row);
        }
  
        // Assign a hat to random x-y axis in array
        field[this.randomIndex(rows)][this.randomIndex(rows)] = this.#hat;
  
        return field;
      };
  
      let newField = populateField();
  
      // Assign a starting point to an array
      let startX, startY, valid;
      do {
        startX = this.randomIndex(rows);
        startY = this.randomIndex(rows);
        valid = this.validateMaze(newField, startX, startY);
      } while (newField[startX][startY] === this.#hat || !valid);
  
      newField[startX][startY] = this.#pathCharacter;
  
      this.#myField = newField;
      
    }
  
    print() {
        
        const clearScreenCode = "\u001B[2J"; // ANSI escape code to clear the screen
        const moveCursorToTopCode = "\u001B[H"; // ANSI escape code to move the cursor to the top-left position
        
        // Clear the screen and move the cursor to the top-left position
        process.stdout.write(clearScreenCode + moveCursorToTopCode);
        console.log(`controlers:`);
        console.log(`move: up - ${this.up}; right - ${this.right}; down - ${this.down}; left - ${this.left}`);
        console.log(`controller settings: type "settings"`)
        console.log(`exit game: "exit" or "cntr + C"`)
        console.log(`to choose scale: "scale"`)
        console.log('\n')
        console.log('='.repeat(20))
        console.log(`${this.gamesPlayed && 'played games: ' + this.gamesPlayed + '||' || ''}  won: ${this.won} || lost: ${this.lost} || maze scale: ${this.scale}`)
        console.log('='.repeat(20))
        console.log('\n')
        for (let i = 0; i < this.#myField.length; i++) {
          console.log(this.#myField[i].join(''));
        }
        console.log('\n')
      
    }

    setController(){
        this.up = prompt('set key to move UP')
        this.right = prompt('set key to move RIGHT')
        this.down = prompt('set key to move DOWN')
        this.left = prompt('set key to move LEFT')
    }

    gameReset() {
        this.#myField = undefined
        this.coursorX = undefined;
        this.coursorY = undefined;
        this.gamesPlayed = 0;
        this.won = 0;
        this.lost = 0;
        
    }
    // this method is a helper function for courserMove()
    controller(){

        let move = prompt('Move >> ')
        switch (move) {
            case 'scale':
                return 'scale';
            case 'exit':
                this.exit = true;
                break;
            case "settings":
            this.setController();
              return this.controller()
            case this.up:
              console.log('Moving up');
              return this.up;
            case this.right:
              console.log('Moving right');
              return this.right;
            case this.down:
              console.log('Moving down');
              return this.down;
            case this.left:
              console.log('Moving left');
              return this.left;
            default:
              console.log('Invalid move');
            //   move = prompt(`up = ${this.up} \n right = ${this.right} \n down = ${this.down} \n left = ${this.left} \n Move >> `)
              return this.controller()
          }

        
    }


    gameFlow(){
        if(
            typeof this.coursorX === 'undefined' ||
            typeof this.coursorY === 'undefined' ||
            this.#myField[this.coursorX][this.coursorY] !== this.#pathCharacter
          ){
            // console.log("loop for coursore assignment called")
            for(let i = 0; i < this.#myField.length; i++){
                for(let j = 0; j< this.#myField[i].length; j++){
                    if(this.#myField[i][j] === this.#pathCharacter){
                        this.coursorX = i;
                        this.coursorY = j;
                    }
                }
            }
        }

        switch (this.controller()){
            //updating and marking the visited path
            case this.up:
                this.coursorX--;
                break;
            case this.right:
                this.coursorY++;
                break;
            case this.down:
                this.coursorX++;
                break;
            case this.left:
                this.coursorY--;
                break;
            case 'scale':
                this.choosingMazeScale();
                this.gameReset();
                break
            default:
                break
            
        }

        if(this.updateScores()){
            this.generateField();
            this.coursorX = undefined;
            this.coursorY = undefined;
        } else {
            this.#myField[this.coursorX][this.coursorY] = this.#pathCharacter;
        }

    }
    
    updateScores(){


        if(this.#myField == undefined){
            return true
        }

        // Base cases for out-of-bounds cells
        if (this.coursorX < 0 || this.coursorX >= this.#myField.length || this.coursorY < 0 || this.coursorY >= this.#myField[0].length) {
          this.lost++ 
          return true
        }
  
        // Base case for reaching the hat
        if (this.#myField[this.coursorX][this.coursorY] === this.#hat) {
          this.won++;
         return true
  
        }
  
        // Base case for obstacle holes or already visited cells
        if (this.#myField[this.coursorX][this.coursorY] !== this.#fieldCharacter) {
          this.lost++;
         return true
    
        }
        return false

    }

    

    get playGame(){
        do {
            if(this.#myField == undefined){
                this.generateField()
            }
            this.print()
            this.gameFlow()
            
            console.log()
        } while (!this.exit)
    }



}
  
  const testGame = new Field();
  testGame.playGame;