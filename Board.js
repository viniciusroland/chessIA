class Board {

    constructor(width, height, tabuleiro) {
        this.board = tabuleiro
        this.width = width
        this.height = height
        this.newest_0;
        this.newest_piece;
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

    do_move(piece, new_position) {
        let old = piece.get_old_position(piece.x, piece.y)

        this.board[old.x][old.y] = 0
        this.newest_0 = old

        this.board[new_position.x][new_position.y] = piece
        this.newest_piece = new_position

    }

    undo_move() {
        this.board[this.newest_0.x][this.newest_0.y] = this.board[this.newest_piece.x][this.newest_piece.y]
        this.board[this.newest_piece.x][this.newest_piece.y] = 0
        //this.newest_piece = undefined;
        //this.newest_0 = undefined;
    }

    calculate_total_value() {
        var total = 0
        for(let i = 0; i < 8; i ++){
            for(let j = 0; j < 8; j++) {
                let piece = this.board[i][j]
                if(piece != 0) {
                    total += piece.value
                }
            }
        }
        return total 
    }

    get_all_possible_moves(color) {
        if(color == true) {

            var total_moves = 0
            var all_available_moves = []

            for(let i = 0; i < white_ai_pieces.length; i++) {
                let piece = white_ai_pieces[i]
                let available_moves = piece.get_available_moves()
                if(available_moves.length > 0) {
                    total_moves += available_moves.length
                    for(let j = 0; j < available_moves.length; j++) {

                        all_available_moves.push([piece, available_moves[j]])
                    }
                }
            }
        } else {
            var total_moves = 0
            var all_available_moves = []

            for(let i = 0; i < black_ai_pieces.length; i++) {
                let piece = black_ai_pieces[i]
                let available_moves = piece.get_available_moves()
                if(available_moves.length > 0) {
                    total_moves += available_moves.length
                    for(let j = 0; j < available_moves.length; j++) {

                        all_available_moves.push([piece, available_moves[j]])
                    }
                }
            }
        }
        //var virtual_board = []
        //for(let j = 0; j < 8; j++){
        //    virtual_board[j] = board.board[j].slice(0)
        //}
        //var board1 = new Board(0, 0, virtual_board)
        //board1.board[0][0] = 'vai tomar no cu'
        //console.log('original', board.board)
        //console.error('copia', board1.board)
        //return available_moves
        return all_available_moves
    }
    
}
