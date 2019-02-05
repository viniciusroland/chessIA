var board;
var peca_em_questao;

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

function mousePressed() {
    white_kings[0].verify_click()
    black_kings[0].verify_click()

    white_queens[0].verify_click()
    black_queens[0].verify_click()
    for(let i = 0; i < 8; i++) {
        white_pawns[i].verify_click()
        black_pawns[i].verify_click()
    }

    for(let i = 0; i < 2; i++) {
        white_towers[i].verify_click()
        black_towers[i].verify_click()

        white_horses[i].verify_click()
        black_horses[i].verify_click()

        white_bishops[i].verify_click()
        black_bishops[i].verify_click()
        
    }
    
    
}


function setup() {
    colorMode(RGB)
    board = new Board(642, 642);
    createCanvas(board.width, board.height) 
    background(51)

    board.divideBoard()
    for (let i = 0; i < 8; i++) {
        white_pawns.push(new Pawn(white_pawn, 80 * i, 80))
        black_pawns.push(new Pawn(black_pawn, 80 * i, 480))

    }

    white_kings.push(new King(white_king, 320, 0))
    black_kings.push(new King(black_king, 320, 560))


    for (let i = 0; i < 2; i++) {
        white_towers.push(new Tower(white_tower, i * 560, 0))
        black_towers.push(new Tower(black_tower, i * 560, 560))

        white_horses.push(new Horse(white_horse, 480 - 400 * i, 0))
        black_horses.push(new Horse(black_horse, 480 - 400 * i, 560))

        white_bishops.push(new Bishop(white_bishop, 400 - 240 * i, 0))
        black_bishops.push(new Bishop(black_bishop, 400 - 240 * i, 560))

    }
    white_queens.push(new Queen(white_queen, 240, 0))
    black_queens.push(new Queen(black_queen, 240, 560))

}

function draw() {
    background(51)
    board.divideBoard()

    for(let i = 0; i < 8; i++) {
        white_pawns[i].display()
        black_pawns[i].display()

    } 
    for(let i = 0; i < 2; i++) {
        white_towers[i].display()
        black_towers[i].display()

        white_horses[i].display()
        black_horses[i].display()

        white_bishops[i].display()
        black_bishops[i].display()
        
    }
    white_kings[0].display()
    black_kings[0].display()

    white_queens[0].display()
    black_queens[0].display()
}

