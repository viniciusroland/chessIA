class Bishop {
     constructor(image, x, y) {
         this.name = this.constructor.name
         this.img = image
         this.x = x
         this.y = y
         this.clicado = false;
         this.contador = 0
     }
     display() {
         if(!this.clicado) {
            image(this.img, this.x, this.y, 80, 80)
         } else {
             image(this.img, mouseX - 60, mouseY - 60, 120, 120)
         }
 
     }

    verify_click() {
        if(mouseX > this.x && mouseX < this.x + 80 && mouseY > this.y && mouseY < this.y + 80) {
            this.clicado = true
            this.contador++
        } else if(this.contador == 1) {
            this.clicado = false
            this.x = mouseX - 40
            this.y = mouseY - 40
            this.contador = 0
            
        }
    }
 
 
 }

