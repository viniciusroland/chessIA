class King {
       constructor(image, x, y) {
           this.img = image
           this.x = x
           this.y = y
           this.clicado = false
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
        } else {
            this.clicado = false
        }
    }
  
  
  }

