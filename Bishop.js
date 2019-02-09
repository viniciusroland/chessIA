var old_position;
var new_position;
class Bishop {
    constructor(image, x, y, color) {
        this.name = this.constructor.name
        this.img = image
        this.x = x
        this.y = y
        this.clicado = false;
        this.contador = 0
        this.board_coords;
        this.color = color
        this.first_move = false
        this.erro = false
        if(x == 160 && y == 0) {
            this.tile_color = 'white'
        }
        if(x == 400 && y == 0) {
            this.tile_color = 'green'
        }

        if(x == 160 && y == 560) {
            this.tile_color = 'green'
        }
        if(x == 400 && y == 560) {
            this.tile_color = 'white'
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
        var piece_in_front = undefined
        old_position = this.get_old_position(this.x, this.y)
        new_position = this.get_new_position(mouseX, mouseY)
        // 7, 5 ->>>> 4, 2
        // diagonal pra cima e pra esquerda
        if(old_position.y > new_position.y && old_position.x > new_position.x) {
            for(let i = new_position.x + 1; i < old_position.x; i++) {
                console.warn(i, i - 2)
                piece_in_front = board.board[i][i - 2]
                if(piece_in_front != 0) {
                    console.log('breakei 1 for')
                    break
                }
            }

        // diagonal pra baixo e pra direita
        } else if(old_position.y < new_position.y && old_position.x < new_position.x){
            for(let i = old_position.x + 1; i < new_position.x; i++) {
                console.warn(i, 9 - i)
                piece_in_front = board.board[i][i - 2]
                if(piece_in_front != 0) {
                    console.log('breakei 2 for')
                    break
                }
            }

        // diagonal pra cima e pra direita
        } else if(old_position.y < new_position.y && old_position.x > new_position.x){
            for(let i = new_position.x + 1; i < old_position.x; i++) {
                console.warn(i, 9 - i)
                piece_in_front = board.board[i][9 - i]
                if(piece_in_front != 0) {
                    console.log('breakei 3 for')
                    break
                }
            }

        // diagonal pra baixo pra esquerda
        } else {
            for(let i = old_position.x + 1; i < new_position.x; i++) {
                console.warn(i, 9 - i)
                piece_in_front = board.board[i][9 - i]
                if(piece_in_front != 0) {
                    console.log('breakei 4 for')
                    break
                }
            }

        }
        if(piece_in_front == undefined) {
            piece_in_front = 0
        }



        if(this.tile_color == 'white') {
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
                console.log(new_position, old_position)
                this.first_move = true
                this.eat_pieces(new_position)
                board.updateBoard(old_position, new_position, this)
                this.board_coords = new_position
                this.update_round()
                this.x = new_position.y * 80
                this.y = new_position.x * 80
            } else {
                //errou
                console.error('ERROU')
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
                console.log(new_position, old_position)
                this.first_move = true
                this.eat_pieces(new_position)
                board.updateBoard(old_position, new_position, this)
                this.board_coords = new_position
                this.update_round()
                this.x = new_position.y * 80
                this.y = new_position.x * 80
            } else {
                //errou
                console.error('ERROU')
            }

        }
        this.contador = 0
        this.clicado = false
        console.log('Tabuleiro atual:', board.board)
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

