const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6) + 1
    let die2 = Math.floor(Math.random() * 6) + 1
    console.log(`total ${die1+die2}: diceOne - ${die1}, diceTwo - ${die2}`)
    // return die1 + die2
}


rollTheDice()