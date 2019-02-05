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
}
