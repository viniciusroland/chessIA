class AI {
    constructor (pieces) {
        this.pieces = pieces
    }

    random_play() {
        let piece_to_move = white_ai_pieces[Math.floor(Math.random() * white_ai_pieces.length)]

        console.log(piece_to_move.get_available_moves())
        let available_moves = piece_to_move.get_available_moves()
        console.warn('available_moves', available_moves)
        if(available_moves.length > 0) {
            let random_move = available_moves[Math.floor(Math.random() * available_moves.length)]
            piece_to_move.move(random_move)
            return false
        } else {
            this.random_play()
        }

    }
}
