class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      const sum = this._ratings.reduce((total, rating) => total + rating, 0);
      return (sum / this._ratings.length).toFixed(2);
    }
  
    addRating(rating) {
      if (rating >= 1 && rating <= 5) {
        this._ratings.push(rating);
      } else {
        console.log('Invalid rating. Please provide a number between 1 and 5.');
      }
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  }
  
  
  
  // Creating instances of the classes
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.title); // Output: A Short History of Nearly Everything
  console.log(historyOfEverything.author); // Output: Bill Bryson
  console.log(historyOfEverything.pages); // Output: 544
  console.log(historyOfEverything.isCheckedOut); // Output: true
  console.log(historyOfEverything.ratings); // Output: [4, 5]
  console.log(historyOfEverything.getAverageRating()); // Output: 4.50
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.title); // Output: Speed
  console.log(speed.director); // Output: Jan de Bont
  console.log(speed.runTime); // Output: 116
  console.log(speed.isCheckedOut); // Output: true
  console.log(speed.ratings); // Output: [1, 1, 5]
  console.log(speed.getAverageRating()); // Output: 2.33
  
  const album = new CD('Artist', 'Album Title', ['Song 1', 'Song 2', 'Song 3', 'Song 4']);
  album.toggleCheckOutStatus();
  album.addRating(4);
  album.addRating(5);
  
  console.log(album.title); // Output: Album Title
  console.log(album.artist); // Output: Artist
  console.log(album.songs); // Output: ['Song 1', 'Song 2', 'Song 3', 'Song 4']
  console.log(album.isCheckedOut); // Output: true
  console.log(album.ratings); // Output: [4, 5]
  console.log(album.getAverageRating()); // Output: 4.50
  
  