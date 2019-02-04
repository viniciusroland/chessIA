var board;
var white_pawns = []
var black_pawns = []
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
function setup() {
    colorMode(RGB)
    board = new Board(642, 642);
    createCanvas(board.width, board.height) 
    background(51)

    board.divideBoard()
    // loading pawns into the board
    for (let i = 0; i < 8; i++) {
        let white_pawn_object = new Pawn(white_pawn, 80 * i, 80) 
        white_pawn_object.display()
        white_pawns.push(white_pawn_object)

        let black_pawn_object = new Pawn(black_pawn, 80 * i, 480)
        black_pawn_object.display()
        black_pawns.push(black_pawn_object)

    }

    //loading other pieces into the board
    //for (let i = 0; i < 2; i++) {
    //    let white_king_object = new King(white_king, 320, 0)
    //    white_king_object.display()

    //}
    let white_king_object = new King(white_king, 320, 0)
    white_king_object.display()

    let black_king_object = new King(black_king, 320, 560)
    black_king_object.display()


    for (let i = 0; i < 2; i++) {
        let white_tower_object = new Tower(white_tower, i * 560, 0)
        white_tower_object.display()

        let black_tower_object = new Tower(black_tower, i * 560, 560)
        black_tower_object.display()

        let white_horse_object = new Horse(white_horse, 480 - 400 * i, 0)
        white_horse_object.display()

        let black_horse_object = new Horse(black_horse, 480 - 400 * i, 560)
        black_horse_object.display()

        let white_bishop_object = new Bishop(white_bishop, 400 - 240 * i, 0)
        white_bishop_object.display()

        let black_bishop_object = new Bishop(black_bishop, 400 - 240 * i, 560)
        black_bishop_object.display()

    }
    let white_queen_object = new Queen(white_queen, 240, 0)
    white_queen_object.display()

    let black_queen_object = new Queen(black_queen, 240, 560)
    black_queen_object.display()

}

function draw() {

    //createCanvas(board.width, board.height) 
    //background(51)

    //board.divideBoard()

}
