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

    updateBoard(old_position, new_position, piece) {
        this.board[old_position.x][old_position.y] = 0
        this.board[new_position.x][new_position.y] = piece
    }
    
}
