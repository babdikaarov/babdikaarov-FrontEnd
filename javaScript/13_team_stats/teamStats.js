const team = {
    _players: [{firstName: 'Naruto', lastName: 'Uzumaki', age: 16}],
    _games: [{opponent: 'Akatsuki', teampoints: 100, opponentpoints: 30}],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    addGame(newopponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newopponent,
        teampoints: newTeamPoints, 
        opponentpoints: newOpponentPoints
      };
    this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76)
  // console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  
  