class Pawn {
    constructor(image, x, y) {
        this.img = image
        this.x = x
        this.y = y
        console.log('Pawn', this.x, this.y)
    }

    display(clicado) {
        if(!clicado) {
            image(this.img, this.x, this.y, 80, 80)
        } else {
            image(this.img, mouseX - 40, mouseY - 40, 120, 120)
        }

    }

    move() {
                
    }

    

}

