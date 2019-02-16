var old_position;
var new_position;
class Horse {
    constructor(image, x, y, color) {
        if(color == 'white') {
            this.value = 30
        } else {
            this.value = -30
        }
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
    }
    move_on_virtual_board(test_position, virtualBoard) {
        //this.first_move = true
        //this.eat_pieces(test_position)
        virtualBoard.updateBoard(old_position, test_position, this)
        //this.board_coords = test_position
        //this.update_round()
        //this.x = test_position.y * 80
        //this.y = test_position.x * 80
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
                if(this.check_move_rules()){
                    this.move()
                }
                
            }
        } else if(this.contador == 1) {
            //volta peca para posicao inicial caso usuario clique na mesma casa que estava para refazer a jogada
            if(this.check_move_rules()){
                this.move()
                console.log('movendo AI')
                setTimeout(moveAI, 750)

            }
            
        }
    }

    update_round() {
        if(rodada == 'white' && this.contador != 2 && !this.erro) {
            rodada = 'black'
        } else if(rodada == 'black' && this.contador != 2 && !this.erro) {
            rodada = 'white'
        }
    }

    move(test_position) {
        if(test_position) {

            this.first_move = true
            this.eat_pieces(test_position)
            let old = this.get_old_position(this.x, this.y)
            board.updateBoard(old, test_position, this)
            this.board_coords = test_position
            this.x = test_position.y * 80
            this.y = test_position.x * 80
            this.update_round()
        } else {

            this.first_move = true
            this.eat_pieces(new_position)
            board.updateBoard(old_position, new_position, this)
            this.board_coords = new_position
            this.update_round()
            this.x = new_position.y * 80
            this.y = new_position.x * 80
        }

    }

    check_move_rules(test_position) {
        if(test_position) {
            new_position = test_position
        } else {
            new_position = this.get_new_position(mouseX, mouseY)

        }
        var direcao;
        old_position = this.get_old_position(this.x, this.y)
        //new_position = this.get_new_position(mouseX, mouseY)
        if(this.color == 'black') {
            direcao = -1
        } else {
            direcao = 1
        }

        if(((new_position.y - old_position.y == -2 && new_position.x - old_position.x == -1)
         || (new_position.y - old_position.y == -2 && new_position.x - old_position.x == 1)
         || (new_position.y - old_position.y == 2 && new_position.x - old_position.x == -1)
         || (new_position.y - old_position.y == 2 && new_position.x - old_position.x == 1)
         || (new_position.y - old_position.y == -1 && new_position.x - old_position.x == -2)
         || (new_position.y - old_position.y == 1 && new_position.x - old_position.x == -2)
         || (new_position.y - old_position.y == -1 && new_position.x - old_position.x == 2)
         || (new_position.y - old_position.y == 1 && new_position.x - old_position.x == 2))
         && (board.board[new_position.x][new_position.y].color != this.color)) {

            this.contador = 0
            this.clicado = false
            return true

        } else {
            //errou
        }
        this.contador = 0
        this.clicado = false
        return false
    }

    get_available_moves() {
        var available_moves = []
        let actual_position = this.get_old_position(this.x, this.y)
        let new_possible_moves = []
        new_possible_moves.push(createVector(actual_position.x + 2, actual_position.y + 1))
        new_possible_moves.push(createVector(actual_position.x + 2, actual_position.y - 1))
        new_possible_moves.push(createVector(actual_position.x + 1, actual_position.y + 2))
        new_possible_moves.push(createVector(actual_position.x - 1, actual_position.y + 2))
        new_possible_moves.push(createVector(actual_position.x + 1, actual_position.y - 2))
        new_possible_moves.push(createVector(actual_position.x - 1, actual_position.y - 2))
        new_possible_moves.push(createVector(actual_position.x - 2, actual_position.y - 1))
        new_possible_moves.push(createVector(actual_position.x - 2, actual_position.y + 1))

        for(let i = 0; i < new_possible_moves.length; i++) {
            let possible_move = new_possible_moves[i]
            if(possible_move.x >= 0 && possible_move.x < 8 && possible_move.y >= 0 && possible_move.y < 8) {
                let move_ok = this.check_move_rules(possible_move)

                if(move_ok) {
                    available_moves.push(possible_move)
                }
            }
        }

        return available_moves
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
                removeAr(white_ai_pieces, piece_in_the_position)
                removeAr(black_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Tower') {
                removeAr(white_towers, piece_in_the_position)
                removeAr(black_towers, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)
                removeAr(black_ai_pieces, piece_in_the_position)
             
            } else if(piece_in_the_position.name == 'Horse') {
                removeAr(white_horses, piece_in_the_position)
                removeAr(black_horses, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)
                removeAr(black_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Bishop') {
                removeAr(white_bishops, piece_in_the_position)
                removeAr(black_bishops, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)
                removeAr(black_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Queen') {
                removeAr(white_queens, piece_in_the_position)
                removeAr(black_queens, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)
                removeAr(black_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'King') {
                removeAr(white_kings, piece_in_the_position)
                removeAr(black_kings, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)
                removeAr(black_ai_pieces, piece_in_the_position)
            }

        }
    }

}

