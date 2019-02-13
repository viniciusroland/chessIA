console.clear()
var game_is_over;
var ai;
var board;
var peca_em_questao;
var white_ai_pieces = []
var black_ai_pieces = []

var white_pawns = []
var black_pawns = []
var black_kings = []
var white_kings = []
var black_queens = []
var white_queens = []
var black_bishops = []
var white_bishops = []
var black_towers = []
var white_towers = []
var black_horses = []
var white_horses = []

var black_king;
var white_king;
var black_queen;
var white_queen;
var black_bishop;
var white_bishop;
var black_tower;
var white_tower;
var black_horse;
var white_horse;
var black_pawn;
var white_pawn;

function removeAr(array, item) {
    var index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function preload() {
    black_king = loadImage("ChessPieces/black_king.png")
    white_king = loadImage("ChessPieces/white_king.png")
    black_queen = loadImage("ChessPieces/black_queen.png") 
    white_queen= loadImage("ChessPieces/white_queen.png")
    black_bishop= loadImage("ChessPieces/black_bishop.png")
    white_bishop= loadImage("ChessPieces/white_bishop.png")
    black_tower= loadImage("ChessPieces/black_tower.png")
    white_tower= loadImage("ChessPieces/white_tower.png")
    black_horse= loadImage("ChessPieces/black_horse.png")
    white_horse= loadImage("ChessPieces/white_horse.png")
    black_pawn= loadImage("ChessPieces/black_pawn.png")
    white_pawn= loadImage("ChessPieces/white_pawn.png")
}
var rodada = 'black';
var clicks = 0;
var piece_clicked;

function mousePressed() { 
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (mouseX > j * 80 && mouseX < j * 80 + 80 && mouseY > i * 80 && mouseY < i * 80 + 80) {
                var indexX = i
                var indexY = j
            }
        }
    }
    if(piece_clicked == undefined || piece_clicked == 0) {
        piece_clicked = board.board[indexX][indexY]

    }
    if(piece_clicked == 0) {
        return
    }

    if(piece_clicked != 0) {
        piece_clicked.verify_click()
        clicks++
    }
    if(clicks == 2) {
        piece_clicked = undefined
        clicks = 0
    }

    //for(let i = 0; i < black_pawns.length; i++) {
    //    black_pawns[i].verify_click()
    //}
    //for(let i = 0; i < white_pawns.length; i++) {
    //    white_pawns[i].verify_click()
    //} 


    //for(let i = 0; i < white_towers.length; i++) {
    //    white_towers[i].verify_click()
    //} 
    //for(let i = 0; i < black_towers.length; i++) {
    //    black_towers[i].verify_click()
    //}


    //for(let i = 0; i < white_horses.length; i++) {
    //    white_horses[i].verify_click()
    //} 
    //for(let i = 0; i < black_horses.length; i++) {
    //    black_horses[i].verify_click()
    //}

    //for(let i = 0; i < white_bishops.length; i++) {
    //    white_bishops[i].verify_click()
    //} 
    //for(let i = 0; i < black_bishops.length; i++) {
    //    black_bishops[i].verify_click()
    //}

    //for(let i = 0; i < black_kings.length; i++) {
    //    black_kings[i].verify_click()
    //} 
    //for(let i = 0; i < white_kings.length; i++) {
    //    white_kings[i].verify_click()
    //}
    //
    //for(let i = 0; i < black_queens.length; i++) {
    //    black_queens[i].verify_click()
    //} 
    //for(let i = 0; i < white_queens.length; i++) {
    //    white_queens[i].verify_click()
    //}
    
}
var tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    ['p0', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]

function setup() {
    colorMode(RGB)
    
    var tile_size = 80;
    var border = 2;

    for (let i = 0; i < 8; i++) {
        let pawn_w = new Pawn(white_pawn, 80 * i, 80, 'white')
        let pawn_b = new Pawn(black_pawn, 80 * i, 480, 'black')

        tabuleiro[1][i] = pawn_w
        tabuleiro[6][i] = pawn_b

        white_pawns.push(pawn_w)
        white_ai_pieces.push(pawn_w)
        black_pawns.push(pawn_b)
        black_ai_pieces.push(pawn_b)

    }

    let king_w = new King(white_king, 320, 0, 'white')
    tabuleiro[0][4] = king_w
    white_kings.push(king_w)
    white_ai_pieces.push(king_w)

    let king_b = new King(black_king, 320, 560, 'black')
    tabuleiro[7][4] = king_b
    black_kings.push(king_b)
    black_ai_pieces.push(king_b)


    for (let i = 0; i < 2; i++) {
        let tower_w = new Tower(white_tower, i * 560, 0, 'white')
        let tower_b = new Tower(black_tower, i * 560, 560, 'black')

        tabuleiro[0][i * 7] = tower_w
        tabuleiro[7][i * 7] = tower_b

        white_towers.push(tower_w)
        white_ai_pieces.push(tower_w)
        black_towers.push(tower_b)
        black_ai_pieces.push(tower_b)

        let horse_w = new Horse(white_horse, 480 - 400 * i, 0, 'white')
        let horse_b = new Horse(black_horse, 480 - 400 * i, 560, 'black')

        tabuleiro[0][6 - i * 5] = horse_w
        tabuleiro[7][6 - i * 5] = horse_b

        white_horses.push(horse_w)
        white_ai_pieces.push(horse_w)
        black_horses.push(horse_b)
        black_ai_pieces.push(horse_b)

        let bishop_w = new Bishop(white_bishop, 400 - 240 * i, 0, 'white')
        let bishop_b = new Bishop(black_bishop, 400 - 240 * i, 560, 'black')

        tabuleiro[0][5 - 3 * i] = bishop_w
        tabuleiro[7][5 - 3 * i] = bishop_b

        white_bishops.push(bishop_w)
        white_ai_pieces.push(bishop_w)
        black_bishops.push(bishop_b)
        black_ai_pieces.push(bishop_b)

    }
    let queen_w = new Queen(white_queen, 240, 0, 'white')
    tabuleiro[0][3] = queen_w
    white_queens.push(queen_w)
    white_ai_pieces.push(queen_w)

    let queen_b = new Queen(black_queen, 240, 560, 'black')
    tabuleiro[7][3] = queen_b
    black_queens.push(queen_b)
    black_ai_pieces.push(queen_b)

    
    board = new Board(8 * tile_size + 1, 8 * tile_size + 1, tabuleiro);
    createCanvas(board.width, board.height) 
    background(51)

    board.divideBoard()

    //white_ai_pieces.push(white_queens)
    //white_ai_pieces.push(white_kings)
    //white_ai_pieces.push(white_towers)
    //white_ai_pieces.push(white_pawns)
    //white_ai_pieces.push(white_horses)
    //white_ai_pieces.push(white_bishops)


    ai = new AI(white_ai_pieces)
    //setInterval(ai.random_play(), 1500)
    //ai.random_play(board.board[1][1])
    //for(let i = 0; i < white_pawns.length; i++) {
    //    let test = white_pawns[i].get_available_moves()
    //    console.log('pawns', test)
    //}

    //for(let i = 0; i < white_horses.length; i++) {
    //    let test = white_horses[i].get_available_moves()
    //    console.log('horses', test)
    //}

    //for(let i = 0; i < white_towers.length; i++) {
    //    let test = white_towers[i].get_available_moves()
    //    console.log('towers', test)
    //}

    //for(let i = 0; i < white_bishops.length; i++) {
    //    let test = white_bishops[i].get_available_moves()
    //    console.log('bishops', test)
    //}

    //for(let i = 0; i < white_queens.length; i++) {
    //    let test = white_queens[i].get_available_moves()
    //    console.log('queens', test)
    //}
    //for(let i = 0; i < white_kings.length; i++) {
    //    let test = white_kings[i].get_available_moves()
    //    console.log('kings', test)
    //}
}

var testando = 0;
function draw() {
    background(51)
    board.divideBoard()

    for(let i = 0; i < white_pawns.length; i++) {
        white_pawns[i].display()
    } 
    for(let i = 0; i < black_pawns.length; i++) {
        black_pawns[i].display()
    }


    for(let i = 0; i < white_towers.length; i++) {
        white_towers[i].display()
    } 
    for(let i = 0; i < black_towers.length; i++) {
        black_towers[i].display()
    }


    for(let i = 0; i < white_horses.length; i++) {
        white_horses[i].display()
    } 
    for(let i = 0; i < black_horses.length; i++) {
        black_horses[i].display()
    }

    for(let i = 0; i < white_bishops.length; i++) {
        white_bishops[i].display()
    } 
    for(let i = 0; i < black_bishops.length; i++) {
        black_bishops[i].display()
    }

    for(let i = 0; i < white_kings.length; i++) {
        white_kings[i].display()
    } 
    for(let i = 0; i < black_kings.length; i++) {
        black_kings[i].display()
    }

    for(let i = 0; i < white_queens.length; i++) {
        white_queens[i].display()
    } 
    for(let i = 0; i < black_queens.length; i++) {
        black_queens[i].display()
    }

    if(black_kings.length == 0) {
        game_is_over = true
        if(confirm('o branco venceu')) {
            location.reload()
        }
    }
    if(white_kings.length == 0) {
        game_is_over = true
        if(confirm('o preto venceu')) {
            location.reload()
        }
    }
}

