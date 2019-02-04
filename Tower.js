class Tower {
     constructor(image, x, y) {
         this.img = image
         this.x = x
         this.y = y
         console.log('Tower', this.x, this.y)
     }
 
     display(clicado) {
         if(!clicado) {
            image(this.img, this.x, this.y, 80, 80)
         } else {
             image(this.img, mouseX - 40, mouseY - 40, 120, 120)
         }
 
     }

    verify_click() {
        if(mouseX > this.x && mouseY < 80 + white_tower_object.y) {
            //console.log('cliquei na segunda torre branca')
            peca_em_questao = 'segunda torre branca'
        } else if(mouseX < 80 && mouseY < 80) {
            //console.log('cliquei na primeira torre branca')
            peca_em_questao = 'primeira torre branca'
        }

    }
 
 
 }

