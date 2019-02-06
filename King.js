class King {
    constructor(image, x, y) {
        this.name = this.constructor.name
        this.img = image
        this.x = x
        this.y = y
        this.clicado = false
        this.contador = 0
        this.board_coords;
    }
   
    display() {
        if(!this.clicado) {
        //image(this.img, this.x, this.y, 80, 80)
            if(this.board_coords != undefined) {
                image(this.img, this.board_coords.y * 80, this.board_coords.x * 80, 80, 80)
             } else {
                image(this.img, this.x, this.y, 80, 80)
             }

         } else {
             image(this.img, mouseX - 60, mouseY - 60, 120, 120)
         }
 
     }

    verify_click() {
        if(mouseX > this.x && mouseX < this.x + 80 && mouseY > this.y && mouseY < this.y + 80) {
            this.clicado = true
            this.contador++
            old_position = board.remove_from_old_position(this.x, this.y)
            if(this.contador == 2) {
                this.move_piece()
            }
        } else if(this.contador == 1) {
            this.move_piece()
        }
    }


    move_piece() {
        //old_position = board.remove_from_old_position(this.x, this.y)
        this.x = mouseX - 25
        this.y = mouseY - 25
        new_position = board.move_to_new_position(mouseX, mouseY, this) 

        this.contador = 0
        this.clicado = false
    }
  
  
  }

