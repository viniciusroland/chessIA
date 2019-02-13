var virtual_boards = []
class AI {
    constructor (pieces) {
        this.pieces = pieces
    }

    random_play() {
        let piece_to_move = white_ai_pieces[Math.floor(Math.random() * white_ai_pieces.length)]

        let available_moves = piece_to_move.get_available_moves()
        if(available_moves.length > 0) {
            let random_move = available_moves[Math.floor(Math.random() * available_moves.length)]
            piece_to_move.move(random_move)
            return false
        } else {
            this.random_play()
        }
    }

    minimaxRoot(boardEmulation, depth, maximizingPlayer){
        var all_moves_and_pieces = boardEmulation.get_all_possible_moves(maximizingPlayer)
        var bestMove = -9999;

        var bestMoveFound;

        for(var i = 0; i < all_moves_and_pieces.length; i++) {
            var newGameMove = all_moves_and_pieces[i]
            let piece = newGameMove[0]
            let test_position = newGameMove[1]
            boardEmulation.do_move(piece, test_position)

            var value = this.minimax(-10000, 10000, boardEmulation, depth - 1, !maximizingPlayer)

            boardEmulation.undo_move();
            if(value >= bestMove) {
                bestMove = value;
                bestMoveFound = newGameMove;
            }
        }
        console.log('melhor movimento', bestMoveFound)
        //bestMoveFound[0] eh a peca que ira se mover
        //bestMoveFound[1] eh o movimento da peca em questao
        return bestMoveFound;

    }

    
    minimax(alpha, beta, boardEmulation, depth, maximizingPlayer) {
        var all_moves_and_pieces = boardEmulation.get_all_possible_moves(maximizingPlayer)

        //boardEmulation eh um board que simula um movimento de alguma peca

        if (depth === 0) {
            //console.warn('fim do minimax', boardEmulation.calculate_total_value())
            return boardEmulation.calculate_total_value()
        }

        var maxEval;
        var minEval;
        ////completar o final do algoritmo

        if (maximizingPlayer) {
            maxEval = -10000
            for(let i = 0; i < all_moves_and_pieces.length; i++) {
                let piece = all_moves_and_pieces[i][0]
                let test_position = all_moves_and_pieces[i][1]
                boardEmulation.do_move(piece, test_position)
                maxEval = Math.max(maxEval, this.minimax(alpha, beta, boardEmulation, depth - 1, !maximizingPlayer))
                //evaluate = this.minimax(boardEmulation, depth - 1, !maximizingPlayer)
                //if(evaluate > maxEval) {
                //    maxEval = evaluate
                //}
                boardEmulation.undo_move()
                alpha = Math.max(alpha, maxEval)
                if( beta <= alpha ) {
                    return maxEval
                }
            }
            return maxEval

        } else {
            minEval = 10000
            for(let i = 0; i < all_moves_and_pieces.length; i++) {
                let piece = all_moves_and_pieces[i][0]
                let test_position = all_moves_and_pieces[i][1]
                boardEmulation.do_move(piece, test_position)
                minEval = Math.min(minEval, this.minimax(alpha, beta, boardEmulation, depth - 1, !maximizingPlayer))
                //evaluate = this.minimax(boardEmulation, depth - 1, !maximizingPlayer)
                //if(evaluate < minEval) {
                //    minEval = evaluate
                //}
                boardEmulation.undo_move()
                beta = Math.min(beta, minEval)
                if( beta <= alpha ){
                    return minEval
                }
            }
            return minEval
        }
    }
}
