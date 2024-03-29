class Dice {
    constructor(x, y) {
       this.x = x 
       this.y = y
       this.width = 150
       this.height = 150 
       this.avocado = new Image()
       this.avocado.src = "./images/dices/Avocado.png"
       this.chili = new Image()
       this.chili.src = "./images/dices/Chili.png"
       this.chocolate = new Image()
       this.chocolate.src = "./images/dices/Chocolate.png"
       this.coyote = new Image()
       this.coyote.src = "./images/dices/Coyote.png"
       this.ocelot = new Image()
       this.ocelot.src = "./images/dices/Ocelot.png"
       this.tomato = new Image()
       this.tomato.src = "./images/dices/Tomato.png"
    }    
    draw(face) {

        ctx.drawImage([
            this.avocado, 
            this.chili, 
            this.chocolate, 
            this.coyote, 
            this.ocelot, 
            this.tomato][face], this.x, this.y, this.width, this.height)
        dices.push(values[face])
    }
}



