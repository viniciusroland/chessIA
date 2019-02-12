class AI {
    constructor (pieces) {
        this.pieces = pieces

    }

    random_play(peca_em_questao) {
        var piece;
        console.warn(board.board)
        console.log(Math.floor(Math.random() * this.pieces.length))
        let piece_type = this.pieces[Math.floor(Math.random() * this.pieces.length)]
        //console.log('Tipo de peca', piece_type[0].name)

        if(peca_em_questao) {
            piece = peca_em_questao
            console.log('dentro do if')
        } else {
            console.log('dentro do else')

            piece = piece_type[Math.floor(Math.random() * piece_type.length)]
        }
        let old_position = piece.get_old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_moves = []
        var available_moves = []


        if(piece.name == 'Pawn') {
            possible_moves.push(createVector(old_position.x + 1, old_position.y))
            possible_moves.push(createVector(old_position.x + 2, old_position.y))
            possible_moves.push(createVector(old_position.x + 1, old_position.y + 1))
            possible_moves.push(createVector(old_position.x + 1, old_position.y - 1))

            for(let i = 0; i < possible_moves.length; i++){
                let move_ok = piece.check_move_rules(possible_moves[i])
                if(move_ok) {
                    available_moves.push(possible_moves[i])
                }
            }
            piece.move(available_moves[Math.floor(Math.random() * available_moves.length)])

        } else if(piece.name == 'Horse') {
            possible_moves.push(createVector(old_position.x + 2, old_position.y + 1))
            possible_moves.push(createVector(old_position.x + 2, old_position.y - 1))
            possible_moves.push(createVector(old_position.x + 1, old_position.y + 2))
            possible_moves.push(createVector(old_position.x - 1, old_position.y + 2))
            possible_moves.push(createVector(old_position.x + 1, old_position.y - 2))
            possible_moves.push(createVector(old_position.x - 1, old_position.y - 2))
            possible_moves.push(createVector(old_position.x - 2, old_position.y + 1))
            possible_moves.push(createVector(old_position.x - 2, old_position.y - 1))

            for(let i = 0; i < possible_moves.length; i++){
                let move_ok = piece.check_move_rules(possible_moves[i])
                if(move_ok) {
                    available_moves.push(possible_moves[i])
                }
            }
            piece.move(available_moves[Math.floor(Math.random() * available_moves.length)])

        }
    }
}
