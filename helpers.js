function rollDice(){
    diceOne.draw.bind(diceOne, Math.floor(Math.random() * 6))()
    diceTwo.draw.bind(diceTwo, Math.floor(Math.random() * 6))()
    diceThree.draw.bind(diceThree, Math.floor(Math.random() * 6))()
    diceFour.draw.bind(diceFour, Math.floor(Math.random() * 6))()
    diceFive.draw.bind(diceFive, Math.floor(Math.random() * 6))()
    diceSix.draw.bind(diceSix, Math.floor(Math.random() * 6))()
}
