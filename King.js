class King {
       constructor(image, x, y) {
           this.img = image
           this.x = x
           this.y = y
       }
   
       display() {
           image(this.img, this.x, this.y, 80, 80)
           console.log(this.img)
  
      }
  
  
  }

