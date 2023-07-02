const menu = {
    _meal: 0,
    _price: '',
    set meal (mealToCheck) {
      if (typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
    },
    
    set price (priceToCheck) {
      if (typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price){
        return 'Today’s Special is Spaghetti for $5!”'
      } else (
        console.log('Meal or price was not set correctly!')
      )
    },
  }
  menu.meal = 'abc';
  menu.price = 15;
  
  console.log(menu.todaysSpecial)