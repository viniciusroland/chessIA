var new_position;
var old_position;
var white_pawn_first_move = false
var black_pawn_first_move = false
class Board {

    constructor(x, y, tabuleiro) {
        this.board = tabuleiro
        this.width = x
        this.height = y
    }

    divideBoard() {
        for(let j = 0; j < 8; j++) {
            for(let i = 0; i < 8; i++) {
                if(i == j - 6 || i == j - 4 || i == j - 2 || i == j || i == j + 2 || i == j + 4 || i == j + 6) {
                    fill(255)
                } else {
                    fill(0, 200, 0)
                }
                
                rect(80 * i, 80 * j, 80, 80);

            }

        }
    }

    move_to_new_position(x, y, piece) {
        //mover esse metodo pras classes de cada peca e nao deixa-lo aqui no Board.js
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (x > j * 80 && x < j * 80 + 80 && y > i * 80 && y < i * 80 + 80) {
                    var posicao_nova = createVector(i, j)
                    new_position = posicao_nova
                }
            }
        }

        if(piece.name == "Pawn") {
            if(piece.color == "black") {
                if(new_position.y == old_position.y && new_position.x - old_position.x == -1) {
                    console.log('preto andou uma casa')
                    piece.first_move = true
                } else if(!piece.first_move && new_position.x - old_position.x == -2){
                    piece.first_move = true
                    console.warn('preto andou 2 casa')
                } else {
                    console.error('ERROU')
                }
            } else if(piece.color == "white") {
                if(new_position.y == old_position.y && new_position.x - old_position.x == 1) {
                    console.log('branco andou uma casa')
                    piece.first_move = true
                } else if(!piece.first_move && new_position.x - old_position.x == 2){
                    piece.first_move = true
                    console.warn('branco andou 2 casa')
                } else {
                    console.error('ERROU')
                }
            }
        }
        console.log(piece.name, piece.color, new_position, old_position)
        this.eat_pieces(posicao_nova)
        piece.board_coords = posicao_nova
        this.board[posicao_nova.x][posicao_nova.y] = piece
        console.log('Tabuleiro atual:', this.board)
        return posicao_nova;
    }   

    remove_from_old_position(x, y) {
        //mover esse metodo pras classes de cada peca e nao deixa-lo aqui no Board.js
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (x >= j * 80 && x <= j * 80 + 80 && y >= i * 80 && y <= i * 80 + 80) {
                    var posicao_antiga = createVector(i, j) 
                    old_position = posicao_antiga
                }
            }
        }

        this.board[posicao_antiga.x][posicao_antiga.y] = 0
        return posicao_antiga;
    }   


    eat_pieces(at_position) {
        let piece_in_the_position = this.board[at_position.x][at_position.y]
        this.board[at_position.x][at_position.y] = 0
        if(piece_in_the_position != 0) {
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
