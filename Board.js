class Board {

    constructor(x, y, tabuleiro) {
        this.board = tabuleiro
        this.width = x,
        this.height = y
        console.log(this.board)
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
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (x > j * 80 && x < j * 80 + 80 && y > i * 80 && y < i * 80 + 80) {
                    var posicao_nova = createVector(i, j)
                }
            }
        }
        console.log(posicao_nova) 
        piece.board_coords = posicao_nova
        this.board[posicao_nova.x][posicao_nova.y] = piece
        console.log("Tabuleiro atual:", this.board)
    }   

    remove_from_old_position(x, y) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (x >= j * 80 && x <= j * 80 + 80 && y >= i * 80 && y <= i * 80 + 80) {
                    var posicao_antiga = createVector(i, j) 
                }
            }
        }

        this.board[posicao_antiga.x][posicao_antiga.y] = 0
    }   
}
