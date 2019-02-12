var old_position;
var new_position;
class Pawn {
    constructor(image, x, y, color) {
        if(color == 'white') {
            this.value = 10
        } else {
            this.value = -10
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
        if(mouseX > this.x && mouseX < this.x + 80 && mouseY > this.y  && mouseY < this.y + 80 && this.color == rodada) {
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

    check_move_rules(test_position) {
        if(test_position) {
            new_position = test_position
        } else {
            new_position = this.get_new_position(mouseX, mouseY)
        }
        old_position = this.get_old_position(this.x, this.y)
        //new_position = this.get_new_position(mouseX, mouseY)
        if(this.color == 'black') {
            var direcao = -1
        } else {
            var direcao = 1

        }

        if(new_position.y == old_position.y && new_position.x - old_position.x == direcao && board.board[new_position.x][new_position.y] == 0) {
            this.contador = 0
            this.clicado = false
            //preto andou uma casa
            return true
        } else if(!this.first_move && new_position.x - old_position.x == direcao*2 && board.board[new_position.x][new_position.y] == 0 && board.board[new_position.x - 1][new_position.y] == 0){
            this.contador = 0
            this.clicado = false
            return true
        } else if(((new_position.x - old_position.x == direcao && new_position.y - old_position.y == direcao) || (new_position.x - old_position.x == direcao && new_position.y - old_position.y == direcao * (-1))) && (board.board[new_position.x][new_position.y] != 0 && board.board[new_position.x][new_position.y].color != this.color)){
            console.error('condicao', board.board[new_position.x][new_position.y] != 0 && board.board[new_position.x][new_position.y].color != this.color)
            this.contador = 0
            this.clicado = false
            return true
        } else {
            //errou
            console.error('ERROU')
        }
        this.contador = 0
        this.clicado = false
        console.log('Tabuleiro atual:', board.board)
        return false
    }
    
    move(test_position) {
        if(test_position) {

            this.first_move = true
            this.eat_pieces(test_position)
            board.updateBoard(old_position, test_position, this)
            this.board_coords = test_position
            this.update_round()
            this.x = test_position.y * 80
            this.y = test_position.x * 80
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

    get_old_position(x, y) {
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
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (x > j * 80 && x < j * 80 + 80 && y > i * 80 && y < i * 80 + 80) {
                    var posicao_nova = createVector(i, j)
                }
            }
        }
        return posicao_nova;

    }   

    get_available_moves() {
        var available_moves = []
        let actual_position = this.get_old_position(this.x, this.y)
        let new_possible_moves = []
        new_possible_moves.push(createVector(actual_position.x + 1, actual_position.y))
        new_possible_moves.push(createVector(actual_position.x + 2, actual_position.y))
        new_possible_moves.push(createVector(actual_position.x + 1, actual_position.y + 1))
        new_possible_moves.push(createVector(actual_position.x + 1, actual_position.y - 1))

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

    eat_pieces(at_position) {
        let piece_in_the_position = board.board[at_position.x][at_position.y]
        if(piece_in_the_position != 0 && piece_in_the_position.color != this.color) {
            if(piece_in_the_position.name == 'Pawn') {
                removeAr(white_pawns, piece_in_the_position)
                removeAr(black_pawns, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Tower') {
                removeAr(white_towers, piece_in_the_position)
                removeAr(black_towers, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)
             
            } else if(piece_in_the_position.name == 'Horse') {
                removeAr(white_horses, piece_in_the_position)
                removeAr(black_horses, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Bishop') {
                removeAr(white_bishops, piece_in_the_position)
                removeAr(black_bishops, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'Queen') {
                removeAr(white_queens, piece_in_the_position)
                removeAr(black_queens, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)

            } else if(piece_in_the_position.name == 'King') {
                removeAr(white_kings, piece_in_the_position)
                removeAr(black_kings, piece_in_the_position)
                removeAr(white_ai_pieces, piece_in_the_position)
            }

        }
    }

}

