var old_position;
var new_position;
class Queen {
    constructor(image, x, y, color) {
        if(color == 'white') {
            this.value = 90
        } else {
            this.value = -90
        }
        this.name = this.constructor.name
        this.tile_color;
        this.img = image
        this.x = x
        this.y = y
        this.clicado = false;
        this.contador = 0
        this.board_coords;
        this.color = color
        this.first_move = false
        this.erro = false
        if(x == 240 && y == 560) {
            this.tile_color = 'white'
        }
        if(x == 240 && y == 0) {
            this.tile_color = 'green'
        }
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
        if(mouseX > this.x && mouseX < this.x + 80 && mouseY > this.y && mouseY < this.y + 80 && this.color == rodada) {
            this.clicado = true
            this.contador++
            if(this.contador == 2) {
                //tenta mover peca para posicao nova
                this.check_move_rules()
            }
        } else if(this.contador == 1) {
            //volta peca para posicao inicial caso usuario clique na mesma casa que estava para refazer a jogada
            this.check_move_rules()
        }
    }


    update_round() {
        if(rodada == 'white' && this.contador != 2 && !this.erro) {
            rodada = 'black'
        } else if(rodada == 'black' && this.contador != 2 && !this.erro) {
            rodada = 'white'
        }
    }

    check_move_rules() {
        var piece_in_front;
        var piece_aside;
        old_position = this.get_old_position(this.x, this.y)
        new_position = this.get_new_position(mouseX, mouseY)
        var caso = this.get_moviment_case(new_position, old_position, this.tile_color)

        if(new_position.x == new_position.y - 6 || new_position.x == new_position.y - 4 || new_position.x == new_position.y - 2 || new_position.x == new_position.y || new_position.x == new_position.y + 2 || new_position.x == new_position.y + 4 || new_position.x == new_position.y + 6) {
            this.tile_color = 'white'
        } else {
            this.tile_color = 'green'
        }
        //movimentos diagonais
        //diagonal pra cima e pra esquerda
        if(old_position.y > new_position.y && old_position.x > new_position.x) {
            for(let i = new_position.x + 1; i < old_position.x; i++) {

                if(caso == 'dif == -7'){
                    piece_in_front = board.board[i][i + 7]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -6'){
                    piece_in_front = board.board[i][i + 6]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -5'){
                    piece_in_front = board.board[i][i + 5]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -4'){
                    piece_in_front = board.board[i][i + 4]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -3'){
                    piece_in_front = board.board[i][i + 3]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -2'){
                    piece_in_front = board.board[i][i + 2]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -1'){
                    piece_in_front = board.board[i][i + 1]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 0'){
                    piece_in_front = board.board[i][i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 1'){
                    piece_in_front = board.board[i][i - 1]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 2'){
                    piece_in_front = board.board[i][i - 2]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 3'){
                    piece_in_front = board.board[i][i - 3]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 4'){
                    piece_in_front = board.board[i][i - 4]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 5'){
                    piece_in_front = board.board[i][i - 5]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 6'){
                    piece_in_front = board.board[i][i - 6]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 7'){
                    piece_in_front = board.board[i][i - 7]
                    if(piece_in_front != 0) {
                        break
                    }
                }

            }

        // diagonal pra baixo e pra direita
        } else if(old_position.y < new_position.y && old_position.x < new_position.x){
            for(let i = old_position.x + 1; i < new_position.x; i++) {

                if(caso == 'dif == -7'){
                    piece_in_front = board.board[i][i + 7]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -6'){
                    piece_in_front = board.board[i][i + 6]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -5'){
                    piece_in_front = board.board[i][i + 5]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -4'){
                    piece_in_front = board.board[i][i + 4]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -3'){
                    piece_in_front = board.board[i][i + 3]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -2'){
                    piece_in_front = board.board[i][i + 2]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == -1'){
                    piece_in_front = board.board[i][i + 1]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 0'){
                    piece_in_front = board.board[i][i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 1'){
                    piece_in_front = board.board[i][i - 1]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 2'){
                    piece_in_front = board.board[i][i - 2]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 3'){
                    piece_in_front = board.board[i][i - 3]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 4'){
                    piece_in_front = board.board[i][i - 4]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 5'){
                    piece_in_front = board.board[i][i - 5]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 6'){
                    piece_in_front = board.board[i][i - 6]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'dif == 7'){
                    piece_in_front = board.board[i][i - 7]
                    if(piece_in_front != 0) {
                        break
                    }
                }
            }

        // diagonal pra cima e pra direita
        } else if(old_position.y < new_position.y && old_position.x > new_position.x){
            for(let i = new_position.x + 1; i < old_position.x; i++) {
                if(caso == 'sum == 14'){
                    piece_in_front = board.board[i][14 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 13'){
                    piece_in_front = board.board[i][13 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 12'){
                    piece_in_front = board.board[i][12 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 11'){
                    piece_in_front = board.board[i][11 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 10'){
                    piece_in_front = board.board[i][10 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 9'){
                    piece_in_front = board.board[i][9 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 8'){
                    piece_in_front = board.board[i][8 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 7'){
                    piece_in_front = board.board[i][7 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 6'){
                    piece_in_front = board.board[i][6 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 5'){
                    piece_in_front = board.board[i][5 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 4'){
                    piece_in_front = board.board[i][4 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 3'){
                    piece_in_front = board.board[i][3 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 2'){
                    piece_in_front = board.board[i][2 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 1'){
                    piece_in_front = board.board[i][1 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 0'){
                    piece_in_front = board.board[i][i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
            }

        // diagonal pra baixo pra esquerda
        } else {
            for(let i = old_position.x + 1; i < new_position.x; i++) {
                if(caso == 'sum == 14'){
                    piece_in_front = board.board[i][14 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 13'){
                    piece_in_front = board.board[i][13 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 12'){
                    piece_in_front = board.board[i][12 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 11'){
                    piece_in_front = board.board[i][11 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 10'){
                    piece_in_front = board.board[i][10 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 9'){
                    piece_in_front = board.board[i][9 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 8'){
                    piece_in_front = board.board[i][8 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 7'){
                    piece_in_front = board.board[i][7 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 6'){
                    piece_in_front = board.board[i][6 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 5'){
                    piece_in_front = board.board[i][5 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 4'){
                    piece_in_front = board.board[i][4 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 3'){
                    piece_in_front = board.board[i][3 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 2'){
                    piece_in_front = board.board[i][2 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 1'){
                    piece_in_front = board.board[i][1 - i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
                if(caso == 'sum == 0'){
                    piece_in_front = board.board[i][i]
                    if(piece_in_front != 0) {
                        break
                    }
                }
            }
        }

        if(piece_in_front == undefined) {
            piece_in_front = 0
        }
        
        //movimentos horizontais ou verticais
        //vertical pra cima
        if(new_position.x < old_position.x && new_position.y == old_position.y) {
            for(let i = new_position.x + 1; i < old_position.x; i++) {
                piece_in_front = board.board[i][new_position.y]
                if(piece_in_front != 0) {
                    break
                }
            }
            if(piece_in_front == undefined) {
                piece_in_front = 0
            }
        //vertical pra baixo
        } else if(new_position.x > old_position.x && new_position.y == old_position.y){

            for(let i = old_position.x + 1; i < new_position.x; i++) {
                piece_in_front = board.board[i][new_position.y]
                if(piece_in_front != 0) {
                    break
                }
            }
            if(piece_in_front == undefined) {
                piece_in_front = 0
            }
        //horizontal pra esquerda
        } else if(new_position.y < old_position.y && new_position.x == old_position.x){
            for(let i = new_position.y + 1; i < old_position.y; i++) {
                piece_aside = board.board[new_position.x][i]
                if(piece_aside != 0) {
                    break
                }
            }
            if(piece_aside == undefined) {
                piece_aside = 0
            }
        //horizontal pra direita
        } else if(new_position.y > old_position.y && new_position.x == old_position.x){

            for(let i = old_position.y + 1; i < new_position.y; i++) {
                piece_aside = board.board[new_position.x][i]
                if(piece_aside != 0) {
                    break
                }
            }
            if(piece_aside == undefined) {
                piece_aside = 0
            }
            
        }

        if(this.tile_color == 'white'){

            if(((new_position.x - new_position.y == 6 && old_position.x - old_position.y == 6) ||
                (new_position.x - new_position.y == 4 && old_position.x - old_position.y == 4 ) ||
                (new_position.x - new_position.y == 2 && old_position.x - old_position.y == 2  )||
                (new_position.x - new_position.y == 0 && old_position.x - old_position.y == 0 ) ||
                (new_position.x - new_position.y == -2 && old_position.x - old_position.y == -2) ||
                (new_position.x - new_position.y == -4 && old_position.x - old_position.y == -4 )||
                (new_position.x - new_position.y == -6 && old_position.x - old_position.y == -6) ||

                (new_position.x + new_position.y == 0 && old_position.x + old_position.y == 0)  ||
                (new_position.x + new_position.y == 2 && old_position.x + old_position.y == 2)  ||
                (new_position.x + new_position.y == 4 && old_position.x + old_position.y == 4)  ||
                (new_position.x + new_position.y == 6 && old_position.x + old_position.y == 6)  ||
                (new_position.x + new_position.y == 8 && old_position.x + old_position.y == 8)  ||
                (new_position.x + new_position.y == 10 && old_position.x + old_position.y == 10)  ||
                (new_position.x + new_position.y == 12 && old_position.x + old_position.y == 12)  ||
                (new_position.x + new_position.y == 14 && old_position.x + old_position.y == 14))
                && piece_in_front == 0 && board.board[new_position.x][new_position.y].color != this.color) {

                    this.first_move = true
                    this.eat_pieces(new_position)
                    board.updateBoard(old_position, new_position, this)
                    this.board_coords = new_position
                    this.update_round()
                    this.x = new_position.y * 80
                    this.y = new_position.x * 80

            }

        } else if(this.tile_color == 'green') {
           if(((new_position.x - new_position.y == 7 && old_position.x - old_position.y == 7)  ||
                (new_position.x - new_position.y == 5 && old_position.x - old_position.y == 5)  ||
                (new_position.x - new_position.y == 3 && old_position.x - old_position.y == 3)  ||
                (new_position.x - new_position.y == 1 && old_position.x - old_position.y == 1)  ||
                (new_position.x - new_position.y == -1 && old_position.x - old_position.y == -1) ||
                (new_position.x - new_position.y == -3 && old_position.x - old_position.y == -3) ||
                (new_position.x - new_position.y == -5 && old_position.x - old_position.y == -5) ||
                (new_position.x - new_position.y == -7 && old_position.x - old_position.y == -7) ||
 
                (new_position.x + new_position.y == 1 && old_position.x + old_position.y == 1)  ||
                (new_position.x + new_position.y == 3 && old_position.x + old_position.y == 3 ) ||
                (new_position.x + new_position.y == 5 && old_position.x + old_position.y == 5)  ||
                (new_position.x + new_position.y == 7 && old_position.x + old_position.y == 7)  ||
                (new_position.x + new_position.y == 9 && old_position.x + old_position.y == 9)  ||
                (new_position.x + new_position.y == 11 && old_position.x + old_position.y == 11) ||
                (new_position.x + new_position.y == 13 && old_position.x + old_position.y == 13))
               && piece_in_front == 0 && board.board[new_position.x][new_position.y].color != this.color){

                    this.first_move = true
                    this.eat_pieces(new_position)
                    board.updateBoard(old_position, new_position, this)
                    this.board_coords = new_position
                    this.update_round()
                    this.x = new_position.y * 80
                    this.y = new_position.x * 80

           }
        }
        //trocar o true pela condicao dos bishops
        if(new_position.y == old_position.y && piece_in_front == 0 && board.board[new_position.x][new_position.y].color != this.color){
            this.first_move = true
            this.eat_pieces(new_position)
            board.updateBoard(old_position, new_position, this)
            this.board_coords = new_position
            this.update_round()
            this.x = new_position.y * 80
            this.y = new_position.x * 80
        } else if(new_position.x == old_position.x && piece_aside == 0 && board.board[new_position.x][new_position.y].color != this.color) {
            this.first_move = true
            this.eat_pieces(new_position)
            board.updateBoard(old_position, new_position, this)
            this.board_coords = new_position
            this.update_round()
            this.x = new_position.y * 80
            this.y = new_position.x * 80
        } else {
            console.error('ERROU')
        }
        this.contador = 0
        this.clicado = false
        console.log('Tabuleiro atual:', board.board)
    }

    get_moviment_case(new_position, old_position, tile_color) {
        if(tile_color == 'white') {
            var value = 0
        } else {
            var value = 1
        }
        //diffs
        if(new_position.x - new_position.y == 6 + value && old_position.x - old_position.y == 6 + value) {
            let total = 6 + value
            let case_ = 'dif == ' + total
            return case_
        }
        if(new_position.x - new_position.y == 4 + value && old_position.x - old_position.y == 4 + value ) {
            let total = 4  + value
            let case_ = 'dif == ' + total
            return case_
        }
        if(new_position.x - new_position.y == 2 + value && old_position.x - old_position.y == 2 + value  ){
            let total = 2 + value
            let case_ = 'dif == ' + total
            return case_
        }
        if(new_position.x - new_position.y == 0 + value && old_position.x - old_position.y == 0 + value ) {
            let total = 0 + value
            let case_ = 'dif == ' + total
            return case_
        }
        if(new_position.x - new_position.y == -2 + value && old_position.x - old_position.y == -2 + value) {
            let total = -2 + value
            let case_ = 'dif == ' + total
            return case_
        }
        if(new_position.x - new_position.y == -4 + value && old_position.x - old_position.y == -4 + value ){
            let total = -4 + value
            let case_ = 'dif == ' + total
            return case_
        }
        if(new_position.x - new_position.y == -6 + value && old_position.x - old_position.y == -6 + value) {
            let total = -6 + value
            let case_ = 'dif == ' + total
            return case_
        }
        if(new_position.x - new_position.y == -7 && old_position.x - old_position.y == -7) {
            let total = -7 
            let case_ = 'dif == ' + total
            return case_
        }

        //sums
        if(new_position.x + new_position.y == 0 + value && old_position.x + old_position.y == 0 + value)  {
            let total = 0 + value
            let case_ = 'sum == ' + total
            return case_
        }
        if(new_position.x + new_position.y == 2 + value && old_position.x + old_position.y == 2 + value)  {
            let total = 2 + value
            let case_ = 'sum == ' + total
            return case_
        }
        if(new_position.x + new_position.y == 4 + value && old_position.x + old_position.y == 4 + value)  {
            let total = 4 + value
            let case_ = 'sum == ' + total
            return case_
        }
        if(new_position.x + new_position.y == 6 + value && old_position.x + old_position.y == 6 + value)  {
            let total = 6 + value
            let case_ = 'sum == ' + total
            return case_
        }
        if(new_position.x + new_position.y == 8 + value && old_position.x + old_position.y == 8 + value)  {
            let total = 8 + value
            let case_ = 'sum == ' + total
            return case_
        }
        if(new_position.x + new_position.y == 10 + value && old_position.x + old_position.y == 10 + value)  {
            let total = 10 + value
            let case_ = 'sum == ' + total
            return case_
        }
        if(new_position.x + new_position.y == 12 + value && old_position.x + old_position.y == 12 + value)  {
            let total = 12 + value
            let case_ = 'sum == ' + total
            return case_
        }
        if(new_position.x + new_position.y == 14 && old_position.x + old_position.y == 14) {
            let total = 14 
            let case_ = 'sum == ' + total
            return case_
        }
    }

    get_old_position(x, y) {
        //mover esse metodo pras classes de cada peca e nao deixa-lo aqui no Board.js
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (x >= j * 80 && x <= j * 80 + 80 && y >= i * 80 && y <= i * 80 + 80) {
                    var posicao_antiga = createVector(i, j) 
                }
            }
        }
        return posicao_antiga;
    }   

    get_new_position(x, y) {
        //mover esse metodo pras classes de cada peca e nao deixa-lo aqui no Board.js
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (x > j * 80 && x < j * 80 + 80 && y > i * 80 && y < i * 80 + 80) {
                    var posicao_nova = createVector(i, j)
                }
            }
        }
        return posicao_nova;

    }   

    eat_pieces(at_position) {
        let piece_in_the_position = board.board[at_position.x][at_position.y]
        if(piece_in_the_position != 0 && piece_in_the_position.color != this.color) {
            //deleting piece object in the board table (this.board)
            //this.board[at_position.x][at_position.y] = 0
            if(piece_in_the_position.name == 'Pawn') {
                removeAr(white_pawns, piece_in_the_position)
                removeAr(black_pawns, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Tower') {
                removeAr(white_towers, piece_in_the_position)
                removeAr(black_towers, piece_in_the_position)
             
            } else if(piece_in_the_position.name == 'Horse') {
                removeAr(white_horses, piece_in_the_position)
                removeAr(black_horses, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Bishop') {
                removeAr(white_bishops, piece_in_the_position)
                removeAr(black_bishops, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Queen') {
                removeAr(white_queens, piece_in_the_position)
                removeAr(black_queens, piece_in_the_position)

            } else if(piece_in_the_position.name == 'King') {
                removeAr(white_kings, piece_in_the_position)
                removeAr(black_kings, piece_in_the_position)
            }

        }
    }

}

